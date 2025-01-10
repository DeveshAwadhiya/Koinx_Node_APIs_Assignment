const express = require('express');
const Crypto = require('../models/crypto');
const router = express.Router();

router.get('/deviation', async (req, res) => {
  try {
    const { coin } = req.query;
    if (!coin) {
      return res.status(400).json({ error: 'Coin parameter is required' });
    }

    const data = await Crypto.find({ coin }).sort({ createdAt: -1 }).limit(100);  
    if (data.length === 0) {
      return res.status(404).json({ error: 'No data found for the requested coin' });
    }

    const prices = data.map(record => record.price);
    const deviation = calculateStandardDeviation(prices);

    res.json({ deviation });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


const calculateStandardDeviation = (arr) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  const squaredDiffs = arr.map(val => Math.pow(val - mean, 2));
  const avgSquaredDiff = squaredDiffs.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(avgSquaredDiff);
};

module.exports = router;
