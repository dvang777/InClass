"use strict";
function getUserInput(message){
	var userInput;
	userInput = window.prompt(message);
	return userInput;
}
function getWeather(weatherCondition){
	switch(new weatherCondition().getCondition()){
		case 1:
		condition = "Clear & Sunny";
		break;
		case 2:
		condition = "Cloudy";
		break;
		case 3:
		condition = "Rainy";
		break;
		case 4;
		condition = "Overcast";
		break;
		case 5:
		condition = "Hazy";
		break;
	}
}
function getNewTemperature(temperature){
	switch(new temperature().getTemperature()){
		case 1:
		temperature = Math.floor((Math.random()*99) + 85);
		console.log(temperature);
		break;
		case 2:
		temperature = Math.floor((Math.random()*84)+72);
		console.log(temperature);
		break;
		case 3:
		temperature = Math.floor((Math.random()*70)+ 66);
		console.log(temperature);
		break;
		case 4:
		temperature = Math.floor((Math.random()*65)+ 56);
		console.log(temperature);	
	}
}
function getDays(numberOfDays){
	var forecast;
	var forecastDays = [];
	for(forecast = 0; forecast < numberOfDays; forecast++){
		forecastDays[forecast] = Math.floor((Math.random() * 31) + 1);
	}
	return boardLevels;   
} 
function getSupplies(){
	var cups;
	var lemon;
	var sugar;
	var ice;

	cups = 0;
	lemon = 0;
	sugar = 0;
	ice = 0;
}
function getCustomers(numberOfCustomers){
	var randomCustomers;
	randomCustomers = Math.floor((Math.random()*150) + 1);
	return randomCustomers;
}
function main(){
	var NumberOfDays = [];
}