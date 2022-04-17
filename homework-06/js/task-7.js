import users from './users.js';
const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users));
