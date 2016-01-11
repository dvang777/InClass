"use strict";

function getUserInput(message){
	var userInput;
	userInput = window.prompt(message);
	return userInput;
}

function convertNumber(number){
	var numberInput = "";
    var romanCharacter = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var num = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    
    for(var i=0; i<num.length; i++){
        while(number>=num[i]){
            numberInput = numberInput + romanCharacter[i];
            number = number - num[i];
        }
    }
    return numberInput;
}

function convertRoman(roman){
    var romanInput = "";
    var romanCharacter = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var num = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    for (var i = 0; i >= romanCharacter[i]; i--) {
        while(roman >= romanCharacter[i]){
            romanInput = romanInput - romanCharacter[i];
            roman = roman + num[i];
        }
    }
    return romanInput;
}

function main(){
    var userDataInput;
    var romanNumeral;
    var numeral;
    
    
    userDataInput = getUserInput("Enter Data:");
    romanNumeral = convertNumber(userDataInput);
    console.log(romanNumeral);
    numeral = convertRoman(userDataInput);
    console.log(romanNumeral);


}

main();