const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const books = [
		{author: "Jim butcher", title: "Turn coat" },
		{author: "Alexandre Dumas", title: "The count of monte carlo"},
		{author: "S M Sterling", title: "A meeting of corvaalis"}
	];

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.get("/", (req, res) => {
	res.render("index.ejs");
})

app.get("/books", (req, res) => {
	res.render("books",{books});
})

//post
app.post("/books", (req, res) => {
	books.push(req.body);
	res.redirect("/books");
})

//listen
app.listen(3000, () => {
	console.log("App running on port 3000");
})