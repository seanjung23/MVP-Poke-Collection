const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

mongoose.connect("mongodb://127.0.0.1:27017/poke");

const pokeSchema = mongoose.Schema({
  id: String,
});

const Poke = mongoose.model("Poke", pokeSchema);

module.exports = {
  getAll: async () => {
    try {
      const pokeData = await Poke.find({});
      return pokeData;
    } catch (err) {
      console.error("Error saving poke:", err);
      throw err;
    }
  },

  save: async (pokeData) => {
    try {
      const filter = { id: pokeData.id };
      const update = { id: pokeData.id };
      const options = { upsert: true, new: true };

      const savedPoke = await Poke.findOneAndUpdate(filter, update, options);
      return savedPoke;
    } catch (err) {
      console.error("Error saving poke:", err);
      throw err;
    }
  },

  remove: (pokeData) => {
    return Poke.deleteOne({ id: pokeData.id });
  },
};
