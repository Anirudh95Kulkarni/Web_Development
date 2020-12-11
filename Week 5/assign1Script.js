/*
1. Add and remove the first element
*/
arr = [1,2,3,4,5];
let addToArray = (arr, num)=>{
    return arr.push(num);
}

let removeFromArray = (arr) =>{
    return arr.pop();
}

// FUnction call
addToArray(arr,6);
console.log(arr);
removeFromArray(arr);
console.log(arr);

/*
2. Add and remove the last element
*/
arr = [1,2,3,4,5];
let addTo1stArray = (arr, num)=>{
    return arr.unshift(num);
}

let removeFrom1stArray = (arr)=>{
    return arr.shift();
}
// FUnction call
addTo1stArray(arr,0);
console.log(arr);
removeFrom1stArray(arr);
console.log(arr);

/*
3. Return next item
*/
let str = ["a", "b", "c", "d"];
let returnNext = (arr, item)=>{
    if(arr.includes(item)){
        let idx = arr.indexOf(item);
        if(arr.length-1===idx)
            return "";
        else
            return arr[idx+1];
    }
    else
        return false;
}

returnNext(str, "a");

/*
4. Return chunk
*/
let str = ["a", "b", "c", "d"];
let returnChunck = (arr, startItem, endItem) =>{
    if(!arr.includes(startItem) || !arr.includes(endItem))
        return false;
    else{
        let idx1 = arr.indexOf(startItem);
        let idx2 = arr.indexOf(endItem) + 1;
        if(idx1<idx2){
            return arr.slice(idx1, idx2);
        } 
        else
            return false;
    }
}

returnChunck(str,"a","c")

/*
4. Sum values
*/
arr = [1,2,3,4,5];
let count = 0;
arr.forEach((num)=>{
    count+=num;
})
console.log(count);

/*
5. Join strings 
*/
let str = ["a", "b", "c", "d"];
let phrase ="hello";
let joinStrings = str.map((item)=>{
    return phrase + item;
})
