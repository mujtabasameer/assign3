"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var num1 = (0, readline_sync_1.question)('Enter first number :\n');
    var num2 = (0, readline_sync_1.question)('Enter second number :\n');
    var opp = (0, readline_sync_1.question)('Choose operator :\n');
    var check1 = check_num(num1) && check_num(num2) && check_operator(opp);
    if (check1 === true) {
        var number1 = parseInt(num1);
        var number2 = parseInt(num2);
        var calc = calculation(number1, number2, opp);
        console.log("Result is : \"".concat(calc, "\"!"));
    }
    else
        console.log('Inalid inputs.');
}
function check_num(num) {
    var number1 = parseInt(num);
    var isnum = !isNaN(number1);
    return isnum;
}
function check_operator(opp) {
    if (opp === '+' || opp === '-' || opp === '*' || opp === '/') {
        return true;
    }
    else
        return false;
}
function calculation(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    }
    else if (operator === '-') {
        return num1 - num2;
    }
    else if (operator === '*') {
        return num1 * num2;
    }
    else if (operator === '/') {
        return num1 / num2;
    }
}
main();
