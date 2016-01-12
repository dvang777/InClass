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

function convertRoman(){
    var romans = {};
    var result = 0;
    var pos = 1;
    var char = "";
    var thisSum = "";
    var nextchar = "";

    romans["I"] = 1;
    romans["V"] = 5;
    romans["X"] = 10;
    romans["L"] = 50;
    romans["C"] = 100;
    romans["D"] = 500;
    romans["M"] = 1000;

    while(pos lte len(input)) {
        char = mid(input, pos, 1);
    if(pos != len(input)) {
        nextchar = mid(input, pos+1, 1);
    if(romans[char] < romans[nextchar]) {
        thisSum = romans[nextchar] - romans[char];
        result += thisSum;
        pos+=2;
}else{
    result += romans[char];
    pos++;
}
}else{
    result += romans[char];
    pos++;
}
}

return result;
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