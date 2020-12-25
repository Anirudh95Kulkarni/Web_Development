const express = require("express");
const app = express();

//routing 
app.get("/", (req, res) => {
	res.send("This is the root or home page");
})

app.get("/sports/:game", (req, res, next) => {
	let val;
	if(req.params.game === "Soccer")
		val = "awesome"; 
	else if(req.params.game === "Basketball")
		val = "okay";
	else if(req.params.game === "Golf")
		val = "boring";
	else
		next();
	res.send(`${req.params.game} is ${val}`);
})

app.get("/parrot/:phrase/:count", (req, res, next) => {
	let out = "";
	if(isNaN(req.params.count))
		next();
	for(let i = 0; i<req.params.count; i++){
		out += req.params.phrase+" ";
	}
	res.send(out);
})

app.get("*", (req, res) => {
	res.send("ERROR 404: The page you are looking for doesn't exist");
})

//start app
app.listen(3000, () => {
	console.log("App is running on port 3000");
})