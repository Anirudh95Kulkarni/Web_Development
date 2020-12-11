function fortuneTeller(kids = 0, partner="no one", locate =  "Earth", job = "chiling expert"){
    console.log(`You will be a  ${job}, in ${locate}, and married to ${partner} with ${kids} kids.`)
}

function calcCircle(radius){
    console.log("Circumference = "+(2*Math.PI*radius).toFixed(2));
    console.log("Area = "+(Math.PI*radius*radius).toFixed(2))
}

function basicMath(num1, num2, op){
    if(typeof num1 === "number" && typeof num2 === "number"){
        if(op === "add"){
            return num1 + num2;
        }
        else if(op === "subtract"){
            return num1 - num2;
        }
        else if(op === "multiply"){
            return num1*num2 ;
        }
        else if(op === "divide"){
            if(num2 === 0)
                return "Error! division by 0";
            else
                return num1/num2;
        }
        else
            return "Not a valid operation";
    }
    return "Not a valid number";    
}

function randomizer(num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        if(num1 === num2)
            return "Same number, no random number";
        else if(num1<num2)
            return (Math.floor(Math.random() * (num2+1 - num1) ) + num1);
        else if(num2< num1)
            return (Math.floor(Math.random() * (num1+1 - num2) ) + num2); 
        else    
            return "Invalid";
    }
    return "Not a valid number";  
}

fortuneTeller(4, "Sharon", "Stockholm", "genius");
calcCircle(5);
const k = basicMath(5, 0, "divide");
console.log("Result of operation is "+k);
console.log("Random number is: "+ randomizer(-3,-5));

