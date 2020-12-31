const Sport = require('../models/sport');
const Comment = require('../models/comment');

const sport_seeds = [
	{
		title: "Swimming",
		description: "I'm baby shaman marfa adaptogen whatever pickled vexillologist umami, unicorn roof party skateboard mumblecore flannel hashtag. Intelligentsia retro cold-pressed lyft chicharrones. Sustainable four loko raw denim 3 wolf moon quinoa readymade retro ennui. Pop-up brunch green juice disrupt tumblr banjo kickstarter pickled distillery af intelligentsia readymade slow-carb hexagon. Drinking vinegar iPhone fam, bicycle rights adaptogen 3 wolf moon sustainable shabby chic food truck next level glossier hammock woke. Fanny pack biodiesel hammock, PBR&B pickled pop-up drinking vinegar umami shoreditch +1 flexitarian brunch.",
		player: "Michael Phelps",
		genre: "water sports",
		groupSport: false,
		inOlympics: true,
		image: "https://media.gq.com/photos/57a26909bf91805850f35e58/16:9/w_2991,h_168..."
	},
	{
		title: "Mountain biking",
		description: "Flexitarian live-edge shabby chic migas fingerstache trust fund 3 wolf moon lyft chicharrones literally locavore letterpress typewriter try-hard scenester. Franzen shoreditch lo-fi meggings deep v. Squid hella synth seitan you probably haven't heard of them sustainable godard. Dreamcatcher truffaut narwhal, ennui locavore thundercats stumptown. Yuccie cliche DIY marfa meditation, readymade typewriter sartorial leggings small batch jean shorts chia pug direct trade.",
		player: "Lance Armstrong",
		genre: "motor sports",
		groupSport: false,
		inOlympics: false,
		image: "https://images.vastsverige.com/publishedmedia/5l1ev5myo7gw2x1q7dxx/Dalsland-Mtb-_Photo_Cred_Roger_Borgelid.jpg"
	},
	{
		title: "Cricket",
		description: "Umami shaman 90's typewriter ethical, poutine synth health goth readymade flexitarian next level thundercats small batch. Tilde four dollar toast small batch stumptown la croix whatever microdosing quinoa 8-bit man bun thundercats pork belly normcore offal. Direct trade asymmetrical narwhal biodiesel, shaman poke vexillologist scenester vaporware. Put a bird on it cray cloud bread, banh mi etsy cornhole woke man braid unicorn selfies subway tile deep v XOXO blog messenger bag. Kombucha literally forage, dreamcatcher iPhone viral four loko kogi.",
		player: "Virat Kohli",
		genre: "ball sports",
		groupSport: true,
		inOlympics:	false,
		image: "https://www.thecricketblog.info/wp-content/uploads/2018/09/Virat.jpg"
	}
]

const seed = async () => {
	//Delete all the current sports and comments
	await Sport.deleteMany();
	console.log("Deleted all sports");
	
	await Comment.deleteMany();
	console.log("Deleted all comments");
	
	//create 3 new sports
	for (const sport_seed of sport_seeds){
		let sport = await Sport.create(sport_seed);
		console.log("Created new sport : "+sport.title);
		//create a new comment for each sport 
		await Comment.create({
			user: "Scooby",
			text: "I absolutely love it",
			sportId: sport._id
		})
		console.log("Comment created!");
	}
}

module.exports = seed;
