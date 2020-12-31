const express = require("express");
const router = express.Router({mergeParams: true});
const Comment = require("../models/comment");

router.get("/new", (req, res) => {
	res.render("comments_new", {sportId: req.params.id})
})

router.post("/", (req, res) => {
	//Create  the comment
	Comment.create({
		user: req.body.user,
		text: req.body.text,
		sportId: req.body.sportId,
	})
	.then((newComment) => {
		res.redirect(`/sports/${req.body.sportId}`)
	})
	.catch((err) => {
		console.log(err);
		res.redirect(`/sports/${req.body.sportId}`)
	})
})

module.exports = router;