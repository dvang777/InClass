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

function regwage(reghours,regpay){
	var wage;
	wage = reghours * regpay;
	return wage;
    }
var hours;
var pay;
var totalreg;
hours = 40;
pay = 23.43;
totalreg = regwage(hours,pay);
console.log("Regular Pay", totalreg); 

function otwage(othours,otpay){
	var totalot;
	totalot = othours * otpay;
	return totalot;
    }
var hoursO;
var payO;
var totalot;
hoursO = 7;
payO = 1.5 * pay;
totalot = otwage(hoursO,payO);
console.log("Over Time Pay", totalot);

function totalwage(regwage,otwage){
	var result;
	result = regwage + otwage;
	return result;
	}
var wageA;
var wageB;
var combinedwage;
wageA = regwage(hours,pay);
wageB = otwage(hoursO,payO);
combinedwage = totalwage(wageA,wageB);
console.log("Total Pay",combinedwage);