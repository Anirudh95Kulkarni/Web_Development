//Add new car from db
//get all cars from db

const config =require("../yelp_sports/config.js");
const mongoose = require('mongoose');

//console.log(config.db.connection)
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});

const carSchema = new mongoose.Schema({
	make: String,
	model: String,
	year: Number,
	color: String,
	mileage: Number,
	needsRepair: Boolean
});

const Car = mongoose.model("Car", carSchema);

const myTruck = new Car ({
	make: "Cheverolet",
	model: "Silverado",
	year: 2004,
	color: "Silver",
	mileage: 120000,
	needsRepair: false
});
/*
myTruck.save((err,car) => {
	if(err)
		console.log(err);
	else
		console.log(car);
});
*/
/*
Car.create(myTruck, (err,car) => {
	if(err)
		console.log(err);
	else
		console.log(car);
});
*/
/*
Car.create(myTruck)
.then((err, car) =>{
	if(err)
		console.log(err);
	else
		console.log(car);
})
*/

Car.findById("5fe8d110b65695c04be85e10")
.exec() //execute our query returning a promise
.then((foundCar) => {
	console.log(foundCar);
})
.catch((err) => {
	console.log("Error! "+err);
})