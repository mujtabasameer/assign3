import { question } from "readline-sync";

function main()
{
    const num1:string=question('Enter first number :\n');
    const num2:string=question('Enter second number :\n');
    const opp:string=question('Choose operator :\n');

    const check1:boolean= check_num(num1) && check_num(num2) && check_operator(opp);

    if(check1===true)
    {
        const number1=parseInt(num1);
        const number2=parseInt(num2);
        const calc=calculation(number1,number2,opp);
        console.log(`Result is : "${calc}"!`)
    }

    else
    console.log('Inalid inputs.');

}

function check_num(num:string):boolean
{
    const number1=parseInt(num);
    const isnum:boolean=!isNaN(number1);
    return isnum;
}

function check_operator(opp:string):boolean
{
    if(opp==='+' || opp==='-' || opp==='*' || opp==='/')
    {
        return true
    }

    else 
    return false;
}

function calculation(num1:number,num2:number,operator:string)
{
    if(operator==='+')
    {
        return num1+num2;
    }

    else if(operator==='-')
    {
        return num1-num2;
    }
    
    else if(operator==='*')
    {
        return num1*num2;
    }
    
    else if(operator==='/')
    {
        return num1/num2;
    }
}

main();