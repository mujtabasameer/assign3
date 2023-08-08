"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var u_arr = [];
var p_arr = [];
function atm() {
    console.log('a.Signup\nb.Login\nx.exit');
    var choice = (0, readline_sync_1.question)('Enter choice:\n');
    while (choice !== 'x') {
        switch (choice) {
            case 'a':
                {
                    signup();
                    break;
                }
            case 'b':
                {
                    var log_check = login();
                    if (log_check === true) {
                        console.log('a.deposit\nb.widraw\nx.exit');
                        var choice2 = (0, readline_sync_1.question)('Enter choice:\n');
                        while (choice2 !== 'x') {
                            switch (choice2) {
                                case 'a':
                                    {
                                        console.log('deposit successful');
                                        break;
                                    }
                                case 'b':
                                    {
                                        console.log('deposit successful');
                                        break;
                                    }
                                case 'x':
                                    {
                                        break;
                                    }
                                    console.log('a.deposit\nb.widraw\nx.exit');
                                    var choice2_1 = (0, readline_sync_1.question)('Enter choice:\n');
                            }
                        }
                    }
                    else {
                        console.log('Login failed.');
                    }
                }
            case 'x':
                {
                    break;
                }
        }
        console.log('a.Signup\nb.Login\nx.exit');
        choice = (0, readline_sync_1.question)('Enter choice:\n');
    }
}
function login() {
    var q1 = (0, readline_sync_1.question)('Username:\n');
    var check = false;
    var check2 = false;
    var login_check = false;
    var choice;
    while (check === false) {
        for (var i = 0; i < u_arr.length; i++) {
            if (q1 === u_arr[i]) {
                check2 = true;
                var q2 = (0, readline_sync_1.question)('Password:\n');
                if (q2 === p_arr[i]) {
                    login_check = true;
                    check = true;
                }
                else {
                    choice = (0, readline_sync_1.question)("Invalid Password! Do u wish to try again?(y for yes)");
                    if (choice === 'y') {
                        check = false;
                        check2 = true;
                    }
                    else
                        check = true;
                }
            }
        }
        if (check2 === false) {
            choice = (0, readline_sync_1.question)("Invalid Username! Do u wish to try again?(y for yes)");
            if (choice === 'y') {
                q1 = (0, readline_sync_1.question)('Username:\n');
            }
            else
                check = true;
        }
    }
    return login_check;
}
function signup() {
    u_arr.push((0, readline_sync_1.question)('Enter username:\n'));
    p_arr.push((0, readline_sync_1.question)('Enter password:\n'));
}
atm();
