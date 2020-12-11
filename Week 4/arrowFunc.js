const myFunc = (num)=>{
    return num*2;
}
myFunc(2);

//one parameter, no paranthesis needed

const oneParm = num =>{
    return num*2;
}

oneParm(5);

//no curly brackets for single line code

const noCurly = (a,b) => a*b;

noCurly(3,4);

//Higher order functions
const myFunc = () => {
    console.log("OK 1......2....3.....Let's Jam");
}
// function called every 1000ms
// function is reference here, not called
setInterval(myFunc, 1000); 

//can also directly define the function
setInterval( () =>{
    console.log("Direct definition of arrow function");
},2000);