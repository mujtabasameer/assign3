import inquirer from 'inquirer';

const todolist: string[] = [];
async function add() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'todo',
            message: 'Add to your list:',
        }
    ]);
    todolist.push(answers.todo);
}

function display() {
    let count: number = 1;
    console.log("Here are your todo-list items:");
    for (let i = 0; i < todolist.length; i++) {
        console.log(`${count}. ${todolist[i]}`);
        count++;
    }
}

async function main() {
    let check: boolean = true;
    while (check === true) {
        const choice = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Welcome to todo-list app.',
                choices: ['Add', 'Display', 'Exit'],

            }
        ]);

        let choice2: string = choice.choice;
        switch (choice2) {
            case 'Add':
                await add();
                break;

            case 'Display':
                display();
                break;

            case 'Exit':
                console.log("Thank you for using this app!.");
                check = false;
                break;

            default:
                console.log("Invalid choice!");
        }
    }

}

main();