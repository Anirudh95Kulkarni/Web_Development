const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
	title: String,
	description: String,
	player: String,
	genre: String,
	date: Date,
	groupSport: Boolean,
	inOlympics: Boolean,
	image: String
});

module.exports = mongoose.model("sport", sportSchema);
