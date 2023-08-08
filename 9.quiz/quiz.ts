import inquirer from "inquirer";

let ans1: string, ans2: string, ans3: string, ans4: string, correct_ans: number = 0;

async function main() {
    await questions();
    console.log(`Correct Answers: ${correct_ans}`);
}

async function questions() {
    const answer1 = await inquirer.prompt([
        {
            type: 'list',
            name: 'q1',
            message: 'What is the name of founder of Pakistan?',
            choices: ['Muhammed Ali Jinnah', 'Allama Iqbal', 'Liaqat Ali Khan', 'Imran Khan'],
        }
    ]);
    ans1 = answer1.q1;
    checkans1();

    const answer2 = await inquirer.prompt([
        {
            type: 'list',
            name: 'q2',
            message: 'In which year did Pakistan gain independence from British rule?',
            choices: ['1940', '1944', '1857', '1947'],
        }
    ]);
    ans2 = answer2.q2;
    checkans2();

    const answer3 = await inquirer.prompt([
        {
            type: 'list',
            name: 'q3',
            message: 'What is the National language of Pakistan?',
            choices: ['English', 'Urdu', 'Pushto', 'Siraiki'],
        }
    ]);
    ans3 = answer3.q3;
    checkans3();

    const answer4 = await inquirer.prompt([
        {
            type: 'list',
            name: 'q4',
            message: 'What is the name of Capital of Pakistan?',
            choices: ['Karachi', 'Lahore', 'Islamabad', 'Quetta'],
        },

    ]);
    ans4 = answer4.q4;
    checkans4();
}

function checkans1() {
    if (ans1 === 'Muhammed Ali Jinnah') {
        console.log("Correct Answer!");
        correct_ans++;
    }
    else
        console.log("Invalid Answer");
}

function checkans2() {
    if (ans2 === '1947') {
        console.log("Correct Answer!");
        correct_ans++;
    }
    else
        console.log("Invalid Answer");
}

function checkans3() {
    if (ans3 === 'Urdu') {
        console.log("Correct Answer!");
        correct_ans++;
    }
    else
        console.log("Invalid Answer");
}

function checkans4() {
    if (ans4 === 'Islamabad') {
        console.log("Correct Answer!");
        correct_ans++;
    }
    else
        console.log("Invalid Answer");
}

main();