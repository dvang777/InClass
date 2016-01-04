"use strict";

var workerapay;
var workerahours;
var workeratotal;

workerapay = 17.24;
workerahours = 34
workeratotal = workerapay * workerahours

console.log("workerapay=", workerapay);
console.log("workerahours=", workerahours);
console.log("workerapay*workerahours=", workeratotal)


var workerbpay;
var workerbhours;
var otpay;
var othour;
var workerbtotal;
var workerbhoursadj;

workerbpay = 23.43;
workerbhours = 47;
workerbhoursadj = workerbhours - othour;



if(workerbhours > 40){
	otpay = 1.5 * workerbpay;
	othour = workerbhours - 40;
}
workerbtotal = (workerbpay * workerbhours) + (otpay * othour)

console.log("workerbpay=", workerbpay);
console.log("workerbhours=", workerbhours);
console.log("(workerbhours - othour)=", workerbhoursadj);
console.log("otpay=", otpay);
console.log("othour=", othour);
console.log("(workerbpay * workerbhours) + (otpay * othour)=", workerbtotal);