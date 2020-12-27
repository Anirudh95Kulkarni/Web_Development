const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
	title: String,
	description: String,
	image: String
});

const Sport = mongoose.model("sport", sportSchema);

module.exports = Sport;
