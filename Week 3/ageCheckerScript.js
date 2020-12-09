const age = prompt("Enter your age");
let out;
if(age<0 || age===NaN){
    out = "Error! That is not a number ";
}
else{
    
    if(age<16){
        out = "Won't someone PLEASE think of the children?! ";
    }
    else if(age<18){
        out = "Sorry you are not old enough to come. Drive on home, kid! ";
    }
    else if(age<21){
        out = "Come on in, but no drinking. ";
    }
    else{
        out = "Okay, get smashed! ";
    }
    
    if(age%2!==0){
        if(age==21){
            out += "Happy 21st birthday! ";
        }
        out += "You're an odd one...";
    }
    if(age%Math.sqrt(age)===0){
        out += "Holy crap, you're a perfect square!";
    }
}
alert(`${out}`);
console.log(out);