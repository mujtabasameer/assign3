"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const paragraph = (0, readline_sync_1.question)("Enter paragraph to count words:\n");
    const count = word_counter(paragraph);
    console.log(`Words: ${count}`);
}
function word_counter(paragraph) {
    const count = paragraph.split(" ").length;
    return count;
}
main();
