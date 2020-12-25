const express = require("express");
const app = express();

//Root
app.get("/", (req, res) =>{
	res.send("I AM ROOT");
});
// /login
app.get("/login", (req, res) => {
	res.send("Login page is here");
})
// /sing
app.get("/sing", (req, res) => {
	res.send("Back to love content");
})

app.listen(3000, () => {
	console.log("App is Running");
})