"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function guessing_game() {
    var num = random_num();
    var attempts = 0;
    var inp_num = (0, readline_sync_1.question)("Enter you guess:\n");
    var inp_num2 = to_num(inp_num);
    var guess = false;
    while (guess === false) {
        attempts++;
        if (inp_num2 === num) {
            console.log("Correct guess!");
            guess = true;
        }
        else if (inp_num2 > num) {
            console.log("Guess high! Try again");
            inp_num = (0, readline_sync_1.question)("Enter you guess:\n");
            inp_num2 = to_num(inp_num);
        }
        else if (inp_num2 < num) {
            console.log("Guess low! Try again");
            inp_num = (0, readline_sync_1.question)("Enter you guess:\n");
            inp_num2 = to_num(inp_num);
        }
    }
}
function random_num() {
    var rand_num = Math.floor(Math.random() * 101);
    return rand_num;
}
function to_num(num) {
    var inp_num2 = parseInt(num);
    var check_n = !isNaN(inp_num2);
    while (check_n === false) {
        var inp_num = (0, readline_sync_1.question)('Invalid input! Enter a number:\n');
        inp_num2 = parseInt(inp_num);
        if (!isNaN(inp_num2)) {
            check_n = true;
        }
    }
    return inp_num2;
}
guessing_game();
