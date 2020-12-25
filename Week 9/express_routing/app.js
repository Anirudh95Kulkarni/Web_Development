const express = require("express");
const app = express();

//Routes
app.get("/", (req, res) => {
	res.send("This is the root route");
})

app.get("/login", (req, res) => {
	res.send("This is the login page");
})

app.get("/users/:username", (req, res) => {
	res.send(`The submitted username is: ${req.params.username}`);
})

app.get("/products/:id/comments/:commentid", (req, res) => {
	res.send(`THis is the page for product with ID: ${req.params.id} with comment ID: ${req.params.commentid}`);
})
//Always have the * route at the end to ensure that you check the defined routes first
//Express works by checking the code line by line
app.get("*", (req, res) => {
	res.send("This is a 404");
})
//Listen
app.listen(3000, () => {
	console.log("App listening on port 3000");
})