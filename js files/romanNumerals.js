"use strict";

function getUserInput(message){
	var userInput;
	userInput = window.prompt(message);
	return userInput;
}


function main(){
    var userDataInput;


    userDataInput = getUserInput("Enter Number:")

	while (isNaN(userDataInput)){
		alert("User Input Error!");
		userDataInput = getUserInput("Enter Number:");
        
    }
}

main();