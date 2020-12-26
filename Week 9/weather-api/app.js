const fetch =require("node-fetch");

const api_key = "2adb38b0249487b538c00e641f56fd94";
const url = `https://api.openweathermap.org/data/2.5/forecast?zip=560072,IN&appid=${api_key}&units=metric`;

fetch(url)
.then((res) => {
	return res.json();
})
.then((res) => {
	let time = 1609016400;
	for (let i=0; i<res.list.length; i++){
		if(res.list[i].dt === time){
			console.log("Temperature : "+res.list[i].main.temp);
			time += 86400;
		}
	}
})
.then((err) => {
	console.log(err);
})