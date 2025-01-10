require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const fetchCryptoData = require('./jobs/fetchCryptoData');
const cron = require('node-cron');

fetchCryptoData();

const app = express();
app.use(express.json());

const statsRoute = require('./routes/stats');
const deviationRoute = require('./routes/deviation');
app.use(statsRoute);
app.use(deviationRoute);

connectDB();
cron.schedule('0 */2 * * *', async () => {
  console.log('Fetching crypto data...');
  await fetchCryptoData();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
