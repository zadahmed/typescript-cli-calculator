"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)("Enter First Number: \n");
    var operator = (0, readline_sync_1.question)("Enter operator: \n");
    var secondString = (0, readline_sync_1.question)("Enter second number: \n");
    var firstNumber = isNumber(firstString);
    var op = isOperator(operator);
}
function isNumber(str) {
    var numb = parseInt(str);
    var isNumb = !(isNaN(numb));
    return isNumb;
}
function isOperator(operator) {
    switch (operator) {
        case '*':
        case '-':
        case '+':
        case '/':
            return true;
        default:
            return false;
    }
}
