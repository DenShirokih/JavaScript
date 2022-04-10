// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let transaction = {
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
    };

    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(newTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return "снятие такой суммы не возможно, недостаточно средств.";
    }
    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(newTransaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

// [{"id":1649587598214,"type":"deposit","amount":500},{"id":1649587598214,"type":"deposit","amount":700},{"id":1649587598214,"type":"withdraw","amount":222}]
// {"id":1649587598214,"type":"deposit","amount":500}
account.deposit(500);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account.getBalance()); // 0
// account.deposit(1000);
// account.deposit(4444);
// console.log(account.getBalance()); // 5444
// account.withdraw(333);
// console.log(account.getBalance()); // 5111
// account.withdraw(33333); // Ты бомж
// account.deposit(100);
// account.deposit(100);
// account.deposit(100);
// account.withdraw(100);
// account.withdraw(100);
// account.withdraw(100);
// console.log(account.getTransactionDetails(2)); // объект второй транзакции (депозит 4444)
// console.log(account.getTransactionDetails(4)); // объект второй транзакции (депозит 100)
// console.log(account.getTransactionTotal(Transaction.WITHDRAW)); // 633
