// Declaring the objects
const myTruck = {
    make: "Chevy",
    model: "Silverado",
    year: 2015,
    color: "silver",
    powerWindow: true,
    bluetooth: false
}

// Access the members 
// Dot notation
myTruck.color
//bracket notation only when it has a space or starts with number
myTruck["1stUser"]
myTruck["full name"]
let myVar = "color"
myTruck[myVar] //valid
myTruck.myVar //invalid

//add new item
myTruck.owner = "Anirudh"

//nested
const post = {
    id: "darkShadow",
    author: "ANirK",
    text: "I hate social media",
    comments: [
        {author: "user1", text: "Me too"},
        {author: "user2", text: "I love it"},
        {author: "user3", text: "I dont care"}
    ]
} 

post.comments[0]
//{author: "user1", text: "Me too"}

//Adding methods to objects
const dog = {
    name: "Max",
    age: 1,
    speak: function(){
        console.log("woof woof");
    }
}

dog.speak()

const cat ={
    name: "lucifer",
    age:23,
    speak: function(){
        console.log("mewo mewoo");
    }
}

//lo dash utility functions
//check it out

//this keyword
const person = {
    name: "josh",
    age : 30,
    sayHi: function(){
        console.log("Hi I'm "+this.name+" and my age is "+this.age);
    }
}
// Hi I'm josh and my age is 30


//arrow function breaks binding, so use the old school method ^
const otherPerson = {
    name: "jack",
    age : 334,
    sayHi: ()=>{
        console.log("Hi I'm "+this.name+" and my age is "+this.age);
    }
}
// Hi I'm  and my age is undefined

const posts = {
    user: "jbash",
    data: ["good", "bad", "ugly"],
    print: function(){
        this.data.forEach((comments) => {
            console.log(comment);
        })
    }
}