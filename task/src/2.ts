{
  //
  class BankAccount1 {
    holder: string; // Property of the object
    balance: number; // Property of the object

    constructor(holder: string, initialBalance: number) {
      // Parameters used only during object creation
      this.holder = holder; // assigning to object property
      this.balance = initialBalance; // assigning to object property
    }
  }
  //
  class BankAccount {
    holder: string;
    balance: number;
    constructor(holder: string, initialBalance: number) {
      this.holder = holder;
      this.balance = initialBalance;
    }
    deposit(amount: number): void {
      this.balance += amount;
    }
    getBalance(): string {
      return `This is Mr${this.holder} is balance $${this.balance}`;
    }
  }
  const res = new BankAccount("ARif", 500);
  res.deposit(200);
  console.log(res.balance);
  //
}
