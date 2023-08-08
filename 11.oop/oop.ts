import { question } from "readline-sync";

class person {
    private personality: string;

    constructor() {
        this.personality = "mystery";
    }

    public AskQuestion(answer: number): void {
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

    public GetPersonality(): string {
        return this.personality;
    }

}

class student extends person {
    private _name: string;

    constructor() {
        super();
        this._name = "";
    }


    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }
}

function main(): void {
    try {
        let input: string = question('Type 1 if u like to talk to others and type 2 if you like to keep to yourself');
        const myperson = new person();
        myperson.AskQuestion(parseInt(input));
        console.log(`You are ${myperson.GetPersonality()}`);

        let name: string = question('What is your name: ');
        const mystudent = new student();
        mystudent.name = name;
        console.log(`Your name is : ${mystudent.name} and your personality is ${mystudent.GetPersonality()}`);
    }
    catch
    {
        console.log('Please enter an integer value.');
    }
}

main();

