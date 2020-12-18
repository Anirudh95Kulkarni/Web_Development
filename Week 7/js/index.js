/*
6. styling
*/
//======================================================================
//helper functions
//======================================================================
//Task completed marked by strike through
const markComplete = (ele) => {
    //switch on strike through if not present
    if(ele.classList.length==0){
        ele.classList.add("complete");
    }
    else{
        ele.classList.remove("complete");
    }
}
//Create delete option for each list
const addDeleteImage = (li) => {
    let img = document.createElement("img");
    img.setAttribute("src", "https://cdn.onlinewebfonts.com/svg/img_275374.png");
    img.setAttribute("alt", "Delete Button");
    img.classList.add("hideDeleteButton");
    li.appendChild(img);
}
//option to delete stuff in case mouse is over the list item
const deletableTask = (li) => {
    li.style.color = "rgb(54, 94, 52)";
        li.getElementsByTagName("img")[0].classList.remove("hideDeleteButton");
        li.getElementsByTagName("img")[0].classList.add("showDeleteButton");
        li.getElementsByTagName("img")[0].addEventListener("click", function(){
            li.remove();
        })
}
//hide deletable task
const hideDeletableTask = (li) => {
    li.style.color = "";
    li.getElementsByTagName("img")[0].classList.add("hideDeleteButton");
}
//============================================================================
//initializations
//============================================================================
let todos = ["Course work", "Code practise", "excercise", "running"];
const ul = document.createElement("ul");
const list = document.getElementById("todoBlock").appendChild(ul); 
const addButton = document.getElementById("addButton");
const newTodo = document.getElementById("newTodo");
const submit = document.getElementById("submit");

//============================================================================
//main 
//============================================================================
//Add option
addButton.addEventListener("click", ()=>{
    if(newTodo.classList.length == 1){
        newTodo.classList.remove("hideInput");  
        submit.classList.remove("hideInput");      
    }
    else{
        newTodo.classList.add("hideInput");
        submit.classList.add("hideInput");      
    }
})
//Add the new item to list and add functionality to it
submit.addEventListener("click",()=>{
    //console.log(newTodo.value);
    let newLi = document.createElement("li");
    newLi.textContent = newTodo.value;
    ul.insertBefore(newLi, ul.querySelector("li"));
    todos.unshift(newTodo.value);
    //Mark task complete
    newLi.addEventListener("click", function(){
        markComplete(this);
    });
    addDeleteImage(newLi);
    //Delete complted tasks
    newLi.addEventListener("mouseover", function(){
        deletableTask(this);
    })
    newLi.addEventListener("mouseout", function(){
        hideDeletableTask(this);
    })
})
//iterate through the elements, display and add functionality
todos.forEach((item)=>{
    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = item ;
    //Mark task complete
    li.addEventListener("click", function(){
     markComplete(this);   
    });
    //Add delete button
    addDeleteImage(li);
    //Delete complted tasks
    li.addEventListener("mouseover", function(){
        deletableTask(this);
    })
    li.addEventListener("mouseout", function(){
        hideDeletableTask(this);
    })
})