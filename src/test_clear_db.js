const mongoose = require('mongoose');
const Crypto = require('./models/crypto'); // Path to your Crypto model

const clearDatabase = async () => {
  try {
    await Crypto.deleteMany({});  // This will remove all records from the Crypto collection
    console.log('Database cleared successfully.');
  } catch (error) {
    console.error('Error clearing the database:', error.message);
  }
};

clearDatabase();