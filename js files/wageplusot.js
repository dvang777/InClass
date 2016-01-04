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

function addwage(pay,hours){
	var hours = prompt ("Please enter hours", " ");
	var pay = 23.43;
	var result = hours * pay;
	result = pay * hours;
	return result;
	}

var pay = 23.43;
var hours = 40;
var total = pay * hours;
total = addwage(pay, hours);
console.log(total);

