interface IBankAccount
{
    Debit(d:number):string;
    Credit(d:number):string;
}

class BankAccount implements IBankAccount
{
    public AccountBalance:number=0;
    constructor()
    {
        this.AccountBalance=100;
    }
    
    public Debit(amount: number): string 
    {
        let Statement='Sorry, you have insufficient balance!';
        if(amount>0)
        {
            Statement='The amount you entered is wrong!';
            if(this.AccountBalance>amount)
            {
                this.AccountBalance=this.AccountBalance-amount;
                Statement=`Transaction successful! New account balance is ${this.AccountBalance}`;
            }
            else
            {
                Statement='You dont have enough money to do this transaction';
            }
        }
        return Statement;
    }

    public Credit(amount: number): string 
    {
        let statement:string="Transaction failed!";
        if(amount>0)
        {
            this.AccountBalance=this.AccountBalance+amount;

            if(amount>100)
            {
                this.AccountBalance=this.AccountBalance-1;
            }

            statement='Your account has been credited successfully!';
        }
        return statement;
    }

}

class customer
{
    constructor()
    {
        this.bankAccount=new BankAccount();
    }
    public Firstname:string='';
    public Lastname:string='';
    public Age:number=0;
    public Gender:string='';
    public MobileNumber:string="";
    public bankAccount:BankAccount;

    public CustomerInfo()
    {
        console.log(`Name: ${this.Firstname} ${this.Lastname} Age: ${this.Age} Gender: ${this.Gender} Mobile: ${this.MobileNumber} Account Balance: ${this.bankAccount.AccountBalance}`);
    }

}

function main()
{
    const cust1=new customer();
    
                
    console.log(cust1.bankAccount.Credit(90));
    cust1.CustomerInfo()
}

main();