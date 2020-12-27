const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config");

console.log(config.db.username)
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const sports = [
	{
		title: "Swimming",
		description: "Drinking vinegar banh mi brunch microdosing meggings hella pinterest. Gastropub tote bag vegan, truffaut raclette tumblr microdosing hoodie fixie echo park pop-up. Selfies offal twee plaid, hot chicken pabst trust fund air plant organic pitchfork humblebrag pickled thundercats microdosing. Meh slow-carb photo booth 3 wolf moon, wolf paleo polaroid. Chillwave hot chicken raw denim forage brunch. Ramps tousled woke migas skateboard blue bottle disrupt pinterest mixtape. Flannel marfa pour-over, la croix vexillologist portland seitan DIY.",
		image: "https://media.gq.com/photos/57a26909bf91805850f35e58/16:9/w_2991,h_1682,c_limit/michael-phelps.jpg"
	},
	{
		title: "Mountain biking",
		description: "Drinking vinegar banh mi brunch microdosing meggings hella pinterest. Gastropub tote bag vegan, truffaut raclette tumblr microdosing hoodie fixie echo park pop-up. Selfies offal twee plaid, hot chicken pabst trust fund air plant organic pitchfork humblebrag pickled thundercats microdosing. Meh slow-carb photo booth 3 wolf moon, wolf paleo polaroid. Chillwave hot chicken raw denim forage brunch. Ramps tousled woke migas skateboard blue bottle disrupt pinterest mixtape. Flannel marfa pour-over, la croix vexillologist portland seitan DIY.",
		image: "https://images.vastsverige.com/publishedmedia/5l1ev5myo7gw2x1q7dxx/Dalsland-Mtb-_Photo_Cred_Roger_Borgelid.jpg"
	},
	{
		title: "Hiking",
		description: "Drinking vinegar banh mi brunch microdosing meggings hella pinterest. Gastropub tote bag vegan, truffaut raclette tumblr microdosing hoodie fixie echo park pop-up. Selfies offal twee plaid, hot chicken pabst trust fund air plant organic pitchfork humblebrag pickled thundercats microdosing. Meh slow-carb photo booth 3 wolf moon, wolf paleo polaroid. Chillwave hot chicken raw denim forage brunch. Ramps tousled woke migas skateboard blue bottle disrupt pinterest mixtape. Flannel marfa pour-over, la croix vexillologist portland seitan DIY.",
		image: "https://d3aux7tjp119y2.cloudfront.net/images/029_100_132-IBSweb_H0schMi.width-800.jpg"
	},
	{
		title: "Cricket",
		description: "Drinking vinegar banh mi brunch microdosing meggings hella pinterest. Gastropub tote bag vegan, truffaut raclette tumblr microdosing hoodie fixie echo park pop-up. Selfies offal twee plaid, hot chicken pabst trust fund air plant organic pitchfork humblebrag pickled thundercats microdosing. Meh slow-carb photo booth 3 wolf moon, wolf paleo polaroid. Chillwave hot chicken raw denim forage brunch. Ramps tousled woke migas skateboard blue bottle disrupt pinterest mixtape. Flannel marfa pour-over, la croix vexillologist portland seitan DIY.",
		image: "https://www.thecricketblog.info/wp-content/uploads/2018/09/Virat.jpg"
	},
]

app.get("/", (req, res) => {
	res.render("landing");
})

app.get("/sports", (req, res) => {
	res.render("sports",{sports});
})

app.get("/sports/new", (req, res) => {
	res.render("sports_new");
})

app.post("/", (req, res) => {
	res.redirect("/sports");
})

app.post("/sports", (req, res) => {
	//console.log(req.body);
	sports.push(req.body);
	res.redirect("/sports");
})

app.listen(3000, () => {
	console.log("App running on port 3000");
})