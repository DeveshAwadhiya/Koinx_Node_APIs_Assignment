const axios = require('axios');
const Crypto = require('../models/crypto');

const fetchCryptoData = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,matic-network,ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
    );
    // console.log('Response from API:', response.data);

    const coins = ['bitcoin', 'matic-network', 'ethereum'];
    
    for (let coin of coins) {
      const data = response.data[coin];

      if (data) {
        console.log(`Storing data for ${coin}`);
        await Crypto.create({
          coin: coin,
          price: data.usd,
          marketCap: data.usd_market_cap,
          change24h: data.usd_24h_change,
        });
        console.log(`${coin} data stored successfully.`);
      } else {
        console.log(`No data found for ${coin}`);
      }
    }

    console.log('All crypto data fetched and stored.');
  } catch (error) {
    console.error('Error fetching crypto data:', error.message);
  }
};

module.exports = fetchCryptoData;
