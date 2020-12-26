//Functions with while loop
function printWithWhile(start, end){
    while(start<=end){
        console.log(start);
        start++;
    }
}
function printEvenWithWhile(start, end){
    while(start<=end){
        if(start%2===0){
            console.log(start);
        }
        start++;
    }
}
function printOddWithWhile(start, end){
    while(start<=end){
        if(start%2!==0){
            console.log(start);
        }
        start++;
    }
}
function printDiv15WithWhile(start, end){
    while(start<=end){
        if(start%15===0){
            console.log(start);
        }
        start++;
    }
}
//Functions with for loop
function printWithFor(start, end){
    for(let i=start; i<=end; i++){
        console.log(i);
    }
}
function printEvenWithFor(start, end){
    for(let i=start; i<=end; i++){
        if(i%2===0){
            console.log(i);
        }
    }
}
function printOddWithFor(start, end){
    for(let i=start; i<=end; i++){
        if(i%2!==0){
            console.log(i);
        }
    }
}
function printDiv15WithFor(start, end){
    for(let i=start; i<=end; i++){
        if(i%15===0){
            console.log(i);
        }
    }
}

//While loop implementation
console.log("Printing numbers with while, from -7 till 24");
printWithWhile(-7, 24);
console.log("Printing even numbers with while, from 4 till 30");
printEvenWithWhile(4, 30);
console.log("Printing odd numbers with while, between 4000 and 4037");
printOddWithWhile(4001, 4036);
console.log("Printing numbers divisible by 5 and 3 with while, from 5 till 60");
printDiv15WithWhile(5, 60);
//For loop implementation
console.log("Printing numbers with for, from -7 till 24");
printWithFor(-7, 24);
console.log("Printing even numbers with for, from 4 till 30");
printEvenWithFor(4, 30);
console.log("Printing odd numbers with for, between 4000 and 4037");
printOddWithFor(4001, 4036);
console.log("Printing numbers divisible by 5 and 3 with for, from 5 till 60");
printDiv15WithFor(5, 60);

