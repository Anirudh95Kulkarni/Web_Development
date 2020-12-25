/*
const joke = require('one-liner-joke');

const myJoke = joke.getRandomJoke();
console.log((myJoke));
*/

const casual = require('casual');

let people  = [];
for(let i = 0; i < 10; i++){
	people.push(casual.full_name);
};
//console.log(people);

let credentials = [];

for (let i=0; i<10; i++){
	const credential = {
		firstName: casual.first_name,
		lastName: casual.last_name,
		address: casual.address,
		stateAbb: casual.state_abbr,
		creditCardNumber: casual.card_number(),
		creditcardExpiration: casual.card_exp
	}
	credentials.push(credential);
}
console.log(credentials);
