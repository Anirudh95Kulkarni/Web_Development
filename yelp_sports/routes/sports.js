const express = require("express");
const router = express.Router();
const Sport = require("../models/sport");
const Comment = require("../models/comment");

//index
router.get("/", async (req, res) => {
	try{
		const sports = await Sport.find().exec();
		res.render("sports",{sports: sports});
	}
	catch(err){
		console.log(err);
		res.send("YOu broke it: "+err);
	}
})

//create
router.post("/", (req, res) => {
	//console.log(req.body);
	const genre = req.body.genre.toLowerCase();
	const newSport = {
		title: req.body.title,
		description: req.body.description,
		player: req.body.player,
		genre,
		groupSport: !!req.body.groupSport,
		inOlympics: !!req.body.inOlympics,
		image: req.body.image
	}
	
	Sport.create(newSport)
	.then((sport) => {
		//console.log(sport)
		res.redirect("/sports/"+sport._id);
	})
	.catch((err) => {
		console.log(err)
		res.redirect("/sports");
	})
})

//new
router.get("/new", (req, res) => {
	res.render("sports_new");
})

//show
router.get("/:id", (req, res) => {
	Sport.findById(req.params.id)
	.exec()
	.then((sport) => {
		Comment.find({sportId: req.params.id}, (err, comments) => {
			if(err){
				res.send(err);
			}
			else{
				res.render("sports_show", {sport, comments});
				//console.log(comments)
			}
		})
	})
	.catch((err) => {
		res.send(err);
	})
})

//edit
router.get("/:id/edit", (req, res) => {
	//Get the sport from the DB
	Sport.findById(req.params.id)
	.exec()
	.then((sport) => {
		res.render("sports_edit", {sport});
	})
	.catch((err) => {
		res.send(err);
	})
})

//update
router.put("/:id", (req, res) => {
	const genre = req.body.genre.toLowerCase();
	const sportTemp = {
		title: req.body.title,
		description: req.body.description,
		player: req.body.player,
		genre,
		groupSport: !!req.body.groupSport,
		inOlympics: !!req.body.inOlympics,
		image: req.body.image
	}
	
	Sport.findByIdAndUpdate(req.params.id, sportTemp, {new: true})
	.exec()
	.then((updatedSport) => {
		console.log(updatedSport);
		res.redirect(`/sports/${req.params.id}`);
	})
	.catch((err) => {
		console.log(err)
		res.send(err);
	})
})

//delete
router.delete("/:id", (req, res) => {
	Sport.findByIdAndDelete(req.params.id)
	.exec()
	.then((deletedSport) => {
		console.log(deletedSport);
		res.redirect(`/sports`);
	})
	.catch((err) => {
		console.log(err)
		res.send(err);
	})
})

module.exports = router;