const userName = "Max";
const password = "woof";
const submittedUserName = "Max";
const submittedPassword = "bark";
if(userName ===submittedUserName && password ===submittedPassword){
    console.log("You are logged in!");
}
else if(userName == submittedUserName){
    console.log("Wrong password");
}
else{
    console.log("Wrong username");
}
