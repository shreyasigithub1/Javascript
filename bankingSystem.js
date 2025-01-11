function main() {
  //create your class here with the name Account with all the private properties and getter and setter

  class Account {
    #accountNumber;
    #balance = 0;
    constructor(accountNumber) {
        this.#accountNumber=accountNumber;
    }

    get getbalance() {
      return this.#balance;
    }

    set setbalance(newBalance) {
        if (newBalance < 0) {
          console.log("Please enter a positive value for the balance");
        } else {
          this.#balance = newBalance;
        }
      }

    deposit(dnumber) {
        this.#balance=this.#balance+dnumber;
    }
    withdraw(wnumber){
      if(wnumber>this.#balance){
        console.log("Insufficient balance");
      }else{
        this.#balance=this.#balance-wnumber;
      }
    }
  }

  const myAccount = new Account("1234567890");
  myAccount.deposit(500);
  myAccount.withdraw(200);
  console.log(myAccount.getbalance); // output: 300
  //Do not modify the return statement
  return Account;
}
main();
