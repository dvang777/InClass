"use strict";
function getUserInput(message){
    var userInput;
    userInput = window.prompt(message);
    return userInput;
}
function findPalindrome(data){
    data = data.split("").reverse().join("");
    return data;
}
function main(){
    var userData;
    var checkPalindrome;

    userData = getUserInput("Enter data:");
    checkPalindrome = findPalindrome(userData);

    if (checkPalindrome === userData){
    	console.log ("It's a palindrome!");
    }else{
    	console.log ("Not a palindrome!");
    }
}
main();