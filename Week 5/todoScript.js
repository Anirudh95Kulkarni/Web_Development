const todos = [];

let input = prompt("What do you wanna do now?").toLowerCase();

//Function declarations
const addNewTodo = () => {
    todos.push(prompt("What Todo item?").toLowerCase());
}
const removeItem = () => {
    const idx = todos.indexOf(prompt("Wich item to remove?").toLowerCase());
    if(idx!==-1){
        todos.splice(idx,1);
        console.log("Item removed");
    }
    else
    {
        console.log("Item not present");
    }
}

//Main loop
while (input!=="quit"){
    if(input==="show"){
        console.log(todos);
    }
    else if(input==="new"){
        addNewTodo();
    }
    else if(input==="remove"){
        removeItem();
    }
    input = prompt("What do you wanna do now?").toLowerCase();
}