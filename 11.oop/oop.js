"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
class person {
    constructor() {
        this.personality = "mystery";
    }
    AskQuestion(answer) {
        if (answer === 1) {
            this.personality = 'extrovert';
        }
        else if (answer === 2) {
            this.personality = 'introvert';
        }
        else {
            this.personality = 'You are still a mystery';
        }
    }
    GetPersonality() {
        return this.personality;
    }
}
class student extends person {
    constructor() {
        super();
        this._name = "";
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
function main() {
    try {
        let input = (0, readline_sync_1.question)('Type 1 if u like to talk to others and type 2 if you like to keep to yourself');
        const myperson = new person();
        myperson.AskQuestion(parseInt(input));
        console.log(`You are ${myperson.GetPersonality()}`);
        let name = (0, readline_sync_1.question)('What is your name: ');
        const mystudent = new student();
        mystudent.name = name;
        console.log(`Your name is : ${mystudent.name} and your personality is ${mystudent.GetPersonality()}`);
    }
    catch (_a) {
        console.log('Please enter an integer value.');
    }
}
main();
