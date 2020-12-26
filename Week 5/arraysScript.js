const movies = ["Avengers", "cap America", "beautiful mind", "Batman"];
console.log(movies);

movies[20] = "Snmake charmer";
// All items between 4 and 20 index is undefined

//mixed arrays are permitted in JS
const mixedArr = [2, "hello", true, null];

//Arrays are references
const x = [1,2,4,5];

const y =  x;

x[2] = 19;
//This changes value for both x and y

//make copy of data
//spread operator, making a shalloow copy 
const z =[...x]

//lo dash  clonedeep for making copy of arrays

//Mutator Methods with arrays - original array modified
let dogs = ["Max", "Sam", "Lila", "John"];
let dog = dog.pop(); 
dogs.pop(); //not null return type
dogs.push("genZee");

//add and remove from the front of the array
let dogFront = dogs.shift(); //remove
dogs.unshift(dogFront); //add

// add or remove from the middle
//splice
// array.splice(index, deletecount, item1, item2....)
//returns an array
let z = dogs.splice(1,1); 
//for adding the element
let xc = dogs.splice(1,0,"Sam");
//no second parameter, then the entire subarray from index will be deleted
dogs.splice(1); //everythhing from iindex 1 is deleted (incluseive)
dogs.splice(1,3) //this removes 3 items from index 1 (inclusive)

//Accessor methods - original array not modified
let friends =["Chris", "Brevin", "Thanos", "Sindhu", "Somayan"];
friends.concat("jacob"); // original aray not modified
let xy = friends.concat("jacob"); //new array formed with jacob
let zz = friends.concat(["ana", "shruthi"]); //add =ing arrays
friends.indexOf("Chris"); 
friends.includes("Chris"); //returns true or false
friends.join();// join all the elements of the array
friends.join(","); //join with ,
friends.join("|");
friends.join(", ");
//slice isdifferent from splice as the original is not modified
friends.slice(1,2) //element at 1
friends.slice(1) // from element at 1 till end

//Array iterators
let arr =[ 1,2,3,4,5];
arr.forEach((num)=>{
    console.log(num);
})
let count = 0;
arr.forEach((num)=>{
    count += num ; 
})
//each num in arr is multiplied by 3
let x = arr.map((num)=>{
    return 3*num;
})


