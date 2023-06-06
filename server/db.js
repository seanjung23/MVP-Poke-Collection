const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');

mongoose.connect('mongodb://127.0.0.1:27017/poke');

const pokeSchema = mongoose.Schema({
  word: String,
  definition: String
});

const Poke = mongoose.model('Poke', pokeSchema);

module.exports = {
  getAll: () => {
    return Poke.find({});
  },

  // save: (word) => {
  //   return Word.create(word);
  // },

  // remove: (word) => {
  //   return Word.deleteOne({_id: ObjectId(word._id)});
  // },

  // update: (word) => {
  //   return Word.updateOne({_id: word._id}, {$set:{word: word.updatedWord, definition: word.updatedDefinition}});
  // },

  // search: (word) => {
  //   return Word.find(word);
  // }
};