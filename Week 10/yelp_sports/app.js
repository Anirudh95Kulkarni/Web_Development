const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config");
const Sport = require("./models/sport");

const mongoose = require('mongoose');
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});

//console.log(config.db.username)
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.render("landing");
})

app.get("/sports", (req, res) => {
	Sport.find()
	.exec()
	.then((foundSports) => {
		res.render("sports",{sports: foundSports});
	})
	.catch((err) => {
		console.log(err);
		res.send(err);
	})
	
})

app.get("/sports/new", (req, res) => {
	res.render("sports_new");
})

app.post("/sports", (req, res) => {
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
		res.redirect("/sports");
	})
	.catch((err) => {
		console.log(err)
		res.redirect("/sports");
	})
})
app.get("/sports/:id", (req, res) => {
	Sport.findById(req.params.id)
	.exec()
	.then((sport) => {
		res.render("sports_show", {sport});
	})
	.catch((err) => {
		res.send(err);
	})
	
})

app.listen(3000, () => {
	console.log("App running on port 3000");
})