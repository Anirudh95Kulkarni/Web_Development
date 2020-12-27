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

const Sport = mongoose.model("sport", sportSchema);

module.exports = Sport;
