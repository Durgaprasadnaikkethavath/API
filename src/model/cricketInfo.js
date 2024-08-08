const mongoose = require("mongoose");

// schema

const cricketSchema = new mongoose.Schema({
  ranking: Number,
  name: String,
  runs: Number,
  balls: Number,
  fours: Number,
  sixes: Number,
  sr: Number,
  team: String,
  opposition: String,
  matchDate: String,
});

//collections

const mensRanking = new mongoose.model("mensRanking", cricketSchema);

module.exports = mensRanking;
