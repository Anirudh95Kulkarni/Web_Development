//---------------------------------------------------
//Helper functions
//---------------------------------------------------
const pickColor = () => {
    const random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
const changeColors = (color) => {
    squares.forEach((square)=>{
        square.style.backgroundColor = color;
    })
}
const randomColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}
const generateRandaomColors = (num) =>{
    let output = [];
    for (let i=0; i<num; i++){
        output.push(randomColor());
    }
    return output;
}
const reset = () => {
    colors = generateRandaomColors(numSquares);
    pickedColor = pickColor();
    resetButton.textContent ="New Colors";
    colorDisplay.textContent = pickedColor ;
    for (let i =0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.backgroundColor = "black";
        }
    }
    title.style.backgroundColor = "steelblue";
    message.textContent ="";
}

//------------------------------------------------------------
//Init declarations
//------------------------------------------------------------
//State
let numSquares = 6;

//Select elements
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const modeButtons = document.querySelectorAll(".mode");

let colors = generateRandaomColors(numSquares);
//Choose the winning color
let pickedColor = pickColor();

//------------------------------------------------------------
//Main
//------------------------------------------------------------

//update the color Display
colorDisplay.textContent = pickedColor;

//reset game button
resetButton.addEventListener("click", reset);
//Mode Selector
modeButtons.forEach((button)=>{
    button.addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent == "Easy"){
            numSquares = 3;
        }
        else {
            numSquares = 6;
        }
        reset();
    })
})


//Set up the squares
for(let i=0; i< colors.length; i++){
    squares[i].style.backgroundColor = colors[i];
    //Add click listners
    squares[i].addEventListener("click", function(){
        //Get the color of the clicked square
        const clickedColor = this.style.backgroundColor;
        //Cmpare the color with picked color
        if(clickedColor===pickedColor){
            message.textContent = " Correct! You win!!";
            changeColors(clickedColor);
            title.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        }
        else{
            this.style.backgroundColor = "black";
            message.textContent = " You suck";
        }
    })
};



