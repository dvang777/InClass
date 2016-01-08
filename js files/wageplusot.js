"use strict";
var workerapay;
var workerahours;
var workeratotal;

workerapay = 17.24;
workerahours = 34;
workeratotal = workerapay * workerahours;

console.log("workerapay=", workerapay);
console.log("workerahours=", workerahours);
console.log("workerapay*workerahours=", workeratotal)

var workerbpay;
var workerbhours;
var otpay;
var othour;
var workerbtotal;

workerbpay = 23.43;
workerbhours = 47;

if(workerbhours > 40) {
	otpay = 1.5 * workerbpay;
	othour = workerbhours - 40;
}
workerbtotal = (workerbpay * 40) + (otpay * othour);

console.log("workerbpay=", workerbpay);
console.log("workerbhours=", workerbhours);
console.log("otpay=", otpay);
console.log("othour=", othour);
console.log("(workerbpay * 40) + (otpay * othour)=", workerbtotal);

function getUserInput(Message){
	var userData;
	userData = window.prompt(Message);
	return userData;
}
function regwage(reghours,regpay){
	var wage;
	wage = reghours * regpay;
	return wage;
    }
function otwage(othours,otpay){
	var totalot;
	totalot = othours * otpay;
	return totalot;
    }
function totalwage(regwage,otwage){
	var result;
	result = regwage + otwage;
	return result;
	}
function main(){
	var hours;
	var pay;
	var totalreg;
	var hoursO;
	var payO;
	var totalot;
	var wageA;
	var wageB;
	var combinedwage;
	hours = getUserInput("Enter Hours:");
	pay = getUserInput ("Enter Pay:");
	totalreg = regwage(hours,pay);
	console.log("Regular Pay", totalreg);
	hoursO = getUserInput("Enter Overtime Hours:");
	payO = 1.5 * pay;
	totalot = otwage(hoursO,payO);
	console.log("Over Time Pay", totalot);
	wageA = regwage(hours,pay);
	wageB = otwage(hoursO,payO);
	combinedwage = totalwage(wageA,wageB);
	console.log("Total Pay",combinedwage);
}
main();