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

function addwage(regpay,otpay){
	var result
	result = regpay + otpay;
	return result;
	}

var pay;
var hours;
var ot;
var otpay;
var regpay;
var total;
pay = 23.43;
hours = prompt ("Enter Hours", "Enter Hours");
ot = prompt ("Enter OT Hours", "Enter OT Hours");
otpay = 1.5 * pay;
regpay = pay * hours;
otpay = ot * otpay;
total = addwage(regpay,otpay);
console.log(total);

