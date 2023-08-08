import {question} from "readline-sync";

function guessing_game()
{
    const num:number=random_num();
    let attempts:number=0;
    let inp_num=question("Enter you guess:\n");
    let inp_num2=to_num(inp_num);
    let guess:boolean=false;
    while(guess===false)
    {
        attempts++;
        if(inp_num2===num)
        {
            console.log(`Correct guess!`);
            guess=true;
        }

        else if(inp_num2>num)
        {
            console.log(`Guess high! Try again`)
            inp_num=question("Enter you guess:\n");
            inp_num2=to_num(inp_num);
        }

        else if(inp_num2<num)
        {
            console.log(`Guess low! Try again`)
            inp_num=question("Enter you guess:\n");
            inp_num2=to_num(inp_num);
        }
    }
}

function random_num():number
{
    const rand_num=Math.floor(Math.random()*101);
    return rand_num;
}

function to_num(num:string):number
{
    let inp_num2:number=parseInt(num);
    let check_n:boolean=!isNaN(inp_num2);
    while(check_n===false)
    {
        let inp_num=question('Invalid input! Enter a number:\n');
        inp_num2=parseInt(inp_num);
        if(!isNaN(inp_num2))
        {
            check_n=true;
        }
    }
    
    return inp_num2;
}
guessing_game();