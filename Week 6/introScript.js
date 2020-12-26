//Retrieve an item, the first item
const myTitle = document.querySelector("h1")

///modify
myTitle.style.backgroundColor = "blue"

myTitle.style.color ="white"

const para = document.getElementsByTagName("p")

para[0].style.color = "orange"

document.getElementById("myID")

//get all elements with p-tag as class name
//treat like array
document.getElementsByClassName("p-tag")
myPara[0]

//use the css specifier
document.querySelector("h1")
document.querySelector("#myID")
document.querySelector(".p-tag")
document.querySelectorAll("p") //for all the tags

const titles =  document.getElementsByTagName("h1") //returns a list of html items
const mytitle = Array.from(titles) //Convert to type array to use array functions

const newTitle =document.querySelector("h1")
//use textContent whenever possible for changing the content
newTitle.textContent = "Whatever I want"
//innerHTML allows to embed HTML and used only to preserve nested html

//Modifying DOM element class
//Afterr adding the css with different pre designed classes
document.querySelector("p").classList.add("red")
document.querySelector("p").classList
//DOMTokenList ["p-tag", value: "p-tag"]
document.querySelector("p").classList.remove("red")
document.querySelector("p").classList.toggle("green") //on to off and vice versa

//modifying the attributes
document.querySelector("a").getAttribute("href")
document.querySelector("a").setAttribute("href", "https://google.com")
document.querySelectorAll("a")[1].setAttribute("href", "https://rimworldgame.com/")

//DOM events
document.querySelector("h1").addEventListener("click", () =>{ console.log("Clicked") })
document.querySelector("li").addEventListener("mouseover", ()=>console.log(" you moused over li"))
document.querySelector("p").addEventListener("click", () => { document.querySelector("h1").textContent = "Changed title after click" })
//use traditional function declaration for eventListner to avoid function breaking especially while using this keyword

