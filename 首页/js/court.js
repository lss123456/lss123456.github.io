"use  strict"

var num1 = document.getElementById("num1");
var num2 = document.querySelector("#num2");
var point = document.querySelectorAll("input")[2];
var result = document.querySelectorAll("input")[3];


var count = document.querySelector("button");
var count2 = document.querySelectorAll("button")[1];
var count3 = document.querySelectorAll("button")[2];
var count4 = document.querySelectorAll("button")[3];


//count.onclick = function () {

//文本妆化位数字
//parseFloat();
//可以取小数
//parseInt();
//取整数
//"2345"-0
//字符串-0变数字
//var num1Val =parseFloat(num1.value);
//var num2Val = parseFloat(num2.value);

//result.value = num1Val + num2Val;

//}


//方法一

// count.onclick = function () {
//     plus();
// };
// count2.onclick = function () {
//     minus();
// };
// count3.onclick = function () {
//     multiplication();
// };
// count4.onclick = function () {
//     division();
// };


// function plus() {
//     var num1Val = parseFloat(num1.value);
//     var num2Val = parseFloat(num2.value);

//     result.value = num1Val + num2Val;
// }

// function minus() {
//     var num1Val = parseFloat(num1.value);
//     var num2Val = parseFloat(num2.value);
//     result.value = num1Val - num2Val;

// }

// function multiplication() {
//     var num1Val = parseFloat(num1.value);
//     var num2Val = parseFloat(num2.value);
//     result.value = num1Val * num2Val;

// }

// function division() {
//     var num1Val = parseFloat(num1.value);
//     var num2Val = parseFloat(num2.value);
//     result.value = num1Val / num2Val;

// }

//方法二
count.onclick = process;
function process(){
    var num1Val = parseFloat(num1.value);
    var num2Val = parseFloat(num2.value);
    result.value = eval(num1Val + point.value + num2Val);
};


get