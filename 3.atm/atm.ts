import { question } from "readline-sync";
let u_arr:string[]=[];
let p_arr:string[]=[];
function atm()
{
    console.log('a.Signup\nb.Login\nx.exit')
    let choice=question('Enter choice:\n');
    
    while(choice!=='x')
    {
        switch(choice)
        {
            case 'a':
                {
                    signup();
                    break;
                }
                    

            case 'b':
                {
                    let log_check:boolean=login();
                    if(log_check===true)
                    {
                        console.log('a.deposit\nb.widraw\nx.exit')
                        let choice2:string=question('Enter choice:\n');
                        while(choice2!=='x')
                        {
                            switch(choice2)
                            {
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

                                console.log('a.deposit\nb.widraw\nx.exit')
                                let choice2:string=question('Enter choice:\n');    
                                

                            }
                        }
                    }   
                    else
                    {
                        console.log('Login failed.')
                    }
                }
            
            case 'x':
                {
                    break;
                }
            
        }   
        console.log('a.Signup\nb.Login\nx.exit')
        choice = question('Enter choice:\n');
    }
    
}

function login():boolean
{
    let q1=question('Username:\n');
    let check:boolean=false;
    let check2:boolean=false;
    let login_check:boolean=false;
    let choice:string;
    while(check===false)
    {
        for(let i=0;i<u_arr.length;i++)
        {
            if(q1===u_arr[i])
            {
                check2=true;
                let q2=question('Password:\n');
                if(q2===p_arr[i])
                {
                    login_check=true;
                    check=true;
                }
                else
                {
                    choice=question(`Invalid Password! Do u wish to try again?(y for yes)`);
                    if(choice==='y')
                    {
                        check=false;
                        check2=true;
                    }
                    else
                    check=true;
                }
            }
        
            
        }
        if(check2===false)
        {
            choice=question(`Invalid Username! Do u wish to try again?(y for yes)`);
                if(choice==='y')
                {
                    q1=question('Username:\n');
                }
                
                else
                check=true;
        }
        
    }
    return login_check;
}

function signup()
{
    u_arr.push(question('Enter username:\n'));
    p_arr.push(question('Enter password:\n'));
}

atm();