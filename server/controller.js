const axios = require("axios");
require("dotenv").config();
const { getAll, save, remove } = require("./db.js");

const config = {
  headers: {
    "X-Api-Key": process.env.API_TOKEN,
  },
};

module.exports = {
  retrieveCardsAPI: async (query) => {
    let request = config;
    request.headers = config.headers;
    request.params = query;

    try {
      const response = await axios.get(
        "https://api.pokemontcg.io/v2/cards",
        request
      );
      return response;
    } catch (error) {
      console.error("error retrieving card information from API!", error);
    }
  },

  getAll: getAll,
  save: save,
  remove: remove,
};
