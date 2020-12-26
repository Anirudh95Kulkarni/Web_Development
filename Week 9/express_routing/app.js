const express = require("express");
const app = express();

app.use(express.static("public"));
//Routes
app.get("/", (req, res) => {
	res.send("This is the root route");
})

app.get("/login", (req, res) => {
	res.send("This is the login page");
})

app.get("/users/:username", (req, res) => {
	res.render("username.ejs");
})

app.get("/products/:id/comments/:commentid", (req, res) => {
	res.send(`THis is the page for product with ID: ${req.params.id} with comment ID: ${req.params.commentid}`);
})

app.get("/products/:id", (req, res) => {
	//Get info from the database
	const product = req.params.id;
	res.render("products.ejs", {product: product});
})

app.get("/customers", (req, res) => {
	const customers = [
		"Max",
		"Bandit",
		"Chloe",
		"Zeus"
	]
	res.render("customers.ejs", {
		customers
	});
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