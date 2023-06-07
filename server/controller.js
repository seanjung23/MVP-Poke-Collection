const axios = require('axios');
require('dotenv').config();
const {} = require('./db.js');

const config = {
  headers: {
    "X-Api-Key": process.env.API_TOKEN
  }
};

module.exports = {
  retrieveCardsAPI: async (query) => {
    let request = config;
    request.headers = config.headers;
    request.params = query;

    try {
      const response = await axios.get('https://api.pokemontcg.io/v2/cards', request);
      return response.data;
    } catch (error) {
      console.error('error retrieving card information from server!', error);
    }
  }
};