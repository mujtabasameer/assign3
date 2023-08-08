import inquirer from "inquirer";
async function main() {
    let check = true;
    let choice;
    console.log("Welcome to currency converter!");
    while (check === true) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'conversion',
                message: 'Enter your choice:',
                choices: ['USD', 'EURO', 'POUND', 'YEN', 'EXIT'],
            }
        ]);
        choice = answer.conversion;
        switch (choice) {
            case 'USD':
                await pkr_to_currency(choice);
                break;
            case 'EURO':
                await pkr_to_currency(choice);
                break;
            case 'POUND':
                await pkr_to_currency(choice);
                break;
            case 'YEN':
                await pkr_to_currency(choice);
                break;
            case 'EXIT':
                console.log("Thank you for using this app!");
                check = false;
                break;
            default:
                console.log("Invalid choice!");
                break;
        }
    }
}
async function pkr_to_currency(currency) {
    const pkr_val_answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'pkr_val_str',
            message: 'Enter amount in PKR:',
        }
    ]);
    const pkr_val_float = parseFloat(pkr_val_answer.pkr_val_str);
    if (isNaN(pkr_val_float)) {
        console.log("Invalid input. Please enter a valid number.");
    }
    else {
        let convert;
        switch (currency) {
            case 'USD':
                convert = pkr_val_float * 0.0035;
                console.log(`Amount=${convert.toFixed(3)} USD`);
                break;
            case 'EURO':
                convert = pkr_val_float * 0.0032;
                console.log(`Amount=${convert.toFixed(3)} EUR`);
                break;
            case 'POUND':
                convert = pkr_val_float * 0.0027;
                console.log(`Amount=${convert.toFixed(3)} GBP`);
                break;
            case 'YEN':
                convert = pkr_val_float * 0.49;
                console.log(`Amount=${convert.toFixed(3)} JPY`);
                break;
        }
    }
}
main();
