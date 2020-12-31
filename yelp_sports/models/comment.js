const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	user: String,
	text: String,
	sportId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Sport"
	}
});

module.exports = mongoose.model("comment", commentSchema);