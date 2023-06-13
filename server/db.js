const mongoose = require("mongoose");
const {ObjectId} = require('mongodb');

mongoose.connect('mongodb://127.0.0.1:27017/poke');

const pokeSchema = mongoose.Schema({
  id: String
});

const Poke = mongoose.model('Poke', pokeSchema);

module.exports = {
  getAll: async () => {
    try {
      const pokeData = await Poke.find({});
      return pokeData;
    } catch (err) {
      console.error('Error saving poke:', err);
      throw err;
    }
  },

  save: async (pokeData) => {
    try {
      const savedPoke = await Poke.create(pokeData);
      return savedPoke;
    } catch (err) {
      console.error('Error saving poke:', err);
      throw err;
    }
  },

  remove: (pokeData) => {
    return Poke.deleteOne({ _id: ObjectId(pokeData._id) });
  }
};