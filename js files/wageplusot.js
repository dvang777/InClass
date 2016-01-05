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
	var regwage;
	regwage = reghours * regpay;
	return regwage;
    }
var reghours = 40;
var regpay = 23.43;
var totalreg = regwage(reghours,regpay);
console.log(totalreg); 

function otwage(othours,otpay){
	var totalot;
	totalot = othours * otpay;
	return totalot;
    }
var othours = 7;
var otpay = 1.5 * 23.43;
var totalot= otwage(othours,otpay)
console.log(totalot);

function totalwage(regwage,otwage){
	var result;
	result = regwage + otwage;
	return result;
	}
var regwage = regwage(reghours,regpay);
var otwage = otwage(othours,otpay)
var combinedwage = totalwage(regwage,otwage);
console.log(combinedwage);