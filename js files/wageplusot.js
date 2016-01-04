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

function addwage(pay,hours,ot,otpay){
	var hours = prompt ("Please enter hours", "Enter Hours");
	var pay = 23.43;
	var ot = prompt ("Please enter OT hours", "Enter OT Hours");
	var otpay = pay * 1.5;
	var result = (hours * pay) + (ot * otpay);
	return result;
	}

var pay = 23.43;
var hours = 40;
var ot = 7
var otpay = 1.5 * pay
var total = (pay * hours) + (ot * otpay)
total = addwage(pay, hours, ot, otpay);
console.log(total);

