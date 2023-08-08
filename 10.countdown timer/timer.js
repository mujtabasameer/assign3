"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    console.log('Welcome to coundown timer!');
    const get_min = parseInt((0, readline_sync_1.question)('Enter minutes: '));
    const get_sec = parseInt((0, readline_sync_1.question)('Enter seconds: '));
    countdown_timer(get_min, get_sec);
}
function countdown_timer(minute, second) {
    const target_time = new Date();
    target_time.setMinutes(target_time.getMinutes() + minute);
    target_time.setSeconds(target_time.getSeconds() + second);
    const loop = setInterval(() => {
        const current_time = new Date();
        const rem_time = target_time.getTime() - current_time.getTime();
        if (rem_time <= 0) {
            console.log("Time Over!");
            clearInterval(loop);
        }
        else {
            const rem_time2 = new Date(rem_time);
            const rem_min = rem_time2.getMinutes();
            const rem_sec = rem_time2.getSeconds();
            console.log(`Remaining time:\n${rem_min} minutes ${rem_sec} seconds`);
        }
    }, 1000);
}
main();
