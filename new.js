function main() {
  class ExpenseTracker {
    #expenses;
    #income;
    constructor(income) {
      this.#income = income;
      this.#expenses = [];
    }
    #calculateTotalExpenses() {
      const total = this.#expenses.reduce((total, num) => {
        return total + num.amount;
      }, 0);
      return total;
    }
    addExpense(name, amount, date) {
      this.#expenses.push({ name, amount, date });
    }
    calculateBalance() {
      const totalExpense = this.#calculateTotalExpenses();
      const balance = this.#income - totalExpense;
      return balance;
    }
  }

  const tracker = new ExpenseTracker(5000);
  tracker.addExpense("Rent", 1000, "2021-10-01");
  tracker.addExpense("Groceries", 500, "2021-10-02");
  console.log(tracker.calculateBalance()); // should output 3500
  return ExpenseTracker;
}
