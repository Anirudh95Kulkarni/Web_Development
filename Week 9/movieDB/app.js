const express = require("express");
const app = express();
const fetch = require("node-fetch");

const api_key =  "8f54e652";

app.set("view engine", "ejs");

app.get("/", (req,res) => {
	fetch(`http://www.omdbapi.com/?apikey=${api_key}&s=Star+wars`)
	.then((response) => response.json())
	.then((response) => {
		console.log(response);
		res.render("movies", {data:response});
	})
	.catch((err) => res.send(err))
})

app.listen(3000, () => {
	console.log("Movie Db server running");
})