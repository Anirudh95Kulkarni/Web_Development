const mongoose = require("mongoose");
const config = require("../../Week\ 10/yelp_sports/config.js");

mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});

//create models
const userSchema = new mongoose.Schema({
	username: String,
	full_name: String,
	addresses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Address"
		}
	]
	});

const User = mongoose.model("User", userSchema);

const addressSchema = new mongoose.Schema({
	street: String,
	city: String,
	state: String,
	zip: String
})

const Address = mongoose.model("Address", addressSchema);

//execute commands

User.create({
	username: "test1",
	full_name: "Paul Atter",
	addresses: []
	})
.then((newUser) => console.log(newUser))
.catch((err) => console.log(err))


Address.create({
	street: "123 AnyStreet",
	city: " New York",
	state: "NY",
	zip: "12345"	
})
.then((newAddress) => console.log(newAddress))
.catch((err) => console.log(err));
