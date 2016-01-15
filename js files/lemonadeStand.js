"use strict";
function getUserInput(message){
    var userInput;
    userInput = window.prompt(message);
    return userInput;
}
function calcPrice(item,price){
    var value;
    value = item * price;
    return value;
}
function calcPlayerCash(playerCash,inventory){
    var remainingCash;
    remainingCash = playerCash - inventory;  
    if(remainingCash > playerCash){  
        alert("Over Limit!")  
    } return remainingCash;
}
function getRandomBetweenRange(min,max){
    return Math.floor(Math.random()*(max - min + 1) ) + min;
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
        console.log(condition);;
    }
        return condition;   
}
function getNewTemperature(){
    var temperature;
    temperature = Math.floor((Math.random()* 5)+ 1)
    switch(temperature){
        case 1:
        temperature = Math.floor((Math.random() * 11) + 90);
        console.log(temperature,"degrees");
        break;
        case 2:
        temperature = Math.floor((Math.random() * 10) + 80);
        console.log(temperature, "degrees");
        break;
        case 3:
        temperature = Math.floor((Math.random() * 10) +70);
        console.log(temperature,"degrees");
        break;
        case 4:
        temperature = Math.floor((Math.random() * 10) +60);
        console.log(temperature, "degrees");
        break;
        case 5:
        temperature = Math.floor((Math.random() * 10) +50);
        console.log(temperature, "degrees");
    }
    return temperature;
}
function getCustomers(temperature){
    var randomCustomers;
    randomCustomers = getRandomBetweenRange(10,90);
    if(temperature >=90){
        randomCustomers = getRandomBetweenRange(75,90);
        console.log(randomCustomers, "Potential Customers");
    }else if(temperature <90 && temperature >= 80){
        randomCustomers = getRandomBetweenRange(61,75);
        console.log(randomCustomers, "Potential Customers");
    }else if(temperature <79 && temperature >=70){
        randomCustomers = getRandomBetweenRange(46,60);
        console.log(randomCustomers, "Potential Customers");
    }else if(temperature < 69 && temperature >= 60){
        randomCustomers = getRandomBetweenRange(31,45);
        console.log(randomCustomers,"Potential Customers");
    }else if(temperature < 60){
        randomCustomers = getRandomBetweenRange(10,30)
        console.log(randomCustomers,"Potential Customers");
    }
    return randomCustomers;
}
function getSuccessRate(price,customers){
    var successRate;
    successRate = Math.ceil(.60 * customers);
    if (price > 0.25 ){
        successRate = Math.ceil(0.75 * customers);
    }else if(price < 0.25 && price > 0.20){
        successRate = Math.ceil(0.80 * customers);
    }else if(price < 0.20 && price > 0.15){
        successRate = Math.ceil(0.85 * customers);
    }else if(price < 0.15 && price > 0.10){
        successRate = Math.ceil(0.90 * customers);
    }else if(price < 0.10){
        successRate = Math.ceil(0./95 * customers);
    } return successRate;
}

function getCostPerGlass(){
    var glassPrice;
    glassPrice = getRandomBetweenRange(10,15) / 100;
    alert("Price per glass is $" + glassPrice);
    console.log("Price per glass is $" + glassPrice);
    return glassPrice;
}
function getRemainingCash(cash,purchased){
    var currentCash;
    currentCash = cash - purchased;
    alert("You have $" + currentCash + " remaining.");
    console.log("You have $" + currentCash + " remaining.");
    return currentCash;
}
function playerTurn(day,playerCash){
    var cupPrice;
    var remainingCash;
    var cupPurchase;
    var cupTotal;
    var currentCash;
    var weather;
    var highTemp;
    var randomRange;
    var success;
    var playerPrice;
    var playerSale;
    var updatedCash;
    var playerNet;
    var success;
    var initCash;
    var customers;

    highTemp = getNewTemperature();
    alert("Today's High Temp is " + highTemp + " degrees");
    console.log("Today's High Temp is " + highTemp + " degrees");
    weather = getWeather();
    alert("Looks like today will be " + weather);
    console.log("Looks like today will be " + weather);
    
    cupPrice = getCostPerGlass();
   
    cupPurchase = getUserInput("How many glasses will you buy?");
    console.log("How many glasses will you buy?");
    cupTotal = Math.floor(cupPurchase * cupPrice);
    while(cupTotal > playerCash){
        alert("Over Limit");
    };

    currentCash = getRemainingCash(playerCash,cupTotal);

    playerPrice = getUserInput("How much will you charge per glass?");
    console.log("You charged $" + playerPrice);
    customers = getCustomers(highTemp);
    console.log("Potential" + customers);
    success = getSuccessRate(playerPrice, customers);
    console.log(success, "customers bought lemonade.");
    
    playerSale = Math.floor(playerPrice * success);
    console.log("You sold $" + playerSale);
    
    playerNet = Math.floor(playerSale - cupTotal);
    
    updatedCash = Math.floor(currentCash + playerNet);
    alert("You now have $" + updatedCash);

    return updatedCash;
}
function main(){
    var inputOfDays;
    var currentDay;
    var turn;
    var startAmount = 5,
      totalAmount = 0,
      daysOpen = 5;
  
  var turnAmount = startAmount; 
  for (var i = 0; i < daysOpen; ++i) {
    turnAmount = playerTurn(i, turnAmount);
    while(turnAmount <= 0){
        alert("Over Limit, You have no money left");
    }
    alert("You have $ " + turnAmount);
    console.log("You have $ " + turnAmount);

    totalAmount += turnAmount;

    alert("You made $" + totalAmount);
    console.log("You made $ " + totalAmount);
  }
}