"use strict";
function getUserInput(message){
    var userInput;
    userInput = window.prompt(message);
    return userInput;
}
function getWeather(condition){
    condition = Math.floor((Math.random()* 5)+ 1);
    switch(condition){
        case 1:
        condition = "Clear and Sunny";
        console.log(condition);
        break;
        case 2:
        condition = "Cloudy";
        console.log(condition);
        break;
        case 3:
        condition = "Hazy";
        console.log(condition);
        break;
        case 4:
        condition = "Rainy";
        console.log(condition);
        break;
        case 5:
        condition = "Foggy";
        console.log(condition);
        break;
    }
}
function getNewTemperature(temperature){
    temperature = Math.floor((Math.random()* 5)+ 1)
    switch(temperature){
        case 1:
        temperature = Math.floor(Math.random() * 10 + 90);
        console.log(temperature,"degrees");
        break;
        case 2:
        temperature = Math.floor(Math.random() * 10 + 80);
        console.log(temperature, "degrees");
        break;
        case 3:
        temperature = Math.floor(Math.random() * 10 +70);
        console.log(temperature,"degrees");
        break;
        case 4:
        temperature = Math.floor(Math.random() * 10 +60);
        console.log(temperature, "degrees");
        break;
        case 5:
        temperature = Math.floor(Math.random() * 10 +50);
        console.log(temperature, "degrees");
    }
}
function getCustomers(){
    var randomCustomers;
    randomCustomers = Math.floor((Math.random()*100) + 40);
    console.log(randomCustomers, "possible customers.");
    return randomCustomers;
}
function calcInventoryCost(cupPrice,lemonPrice,sugarPrice,icePrice){
    var paperCups;
    var lemons;
    var sugar;
    var iceCubes;
    var cupCost;
    var lemonCost;
    var sugarCost;
    var iceCost
    var totalInventoryCost;
    
    paperCups = document.getElementById("cups").value;
    lemons = document.getElementById("lemon").value;
    sugar = document.getElementById("sugar").value;
    iceCubes = document.getElementById("ice").value;
    cupCost = paperCups * cupPrice;
    lemonCost = lemons * lemonPrice;
    sugarCost = sugar * sugarPrice;
    iceCost = iceCubes * icePrice;
    totalInventory = cupCost + lemonCost + sugarCost + iceCost;

    return totalInventoryCost;
}
function calcPlayerCash(playerCash,inventory){
    var remainingCash;

    playerCash = 15;
    inventory = calcInventoryCost();
    remainingCash = playerCash - inventory;
    document.getElementById("cash").innerHTML;
    return remainingCash;
}

function main(){
    var inputOfDays;
    var supplyPrice;
    var cupPrice;
    var lemonPrice;
    var sugarPrice;
    var icePrice;
    var weather;
    var highTemp;
    var customers;
    var currentTurn;

    
    inputOfDays = getUserInput("How many days will your lemonade stand open?","7");
    console.log(inputOfDays, "days");
    weather = getWeather();
    highTemp = getNewTemperature();
    customers = getCustomers();
    cupPrice = ".04";
    lemonPrice = ".05";
    sugarPrice = ".04";
    icePrice = ".01";

    for (currentTurn =  0; currentTurn >= inputOfDays; currentTurn ++) {
        console.log(currentTurn);
    };
    
    document.getElementById('button').onclick = function(){
        calcInventoryCost();
    }  
}

main();