import users from './users.js';
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);
console.table(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.table(getUserWithEmail(users, 'elmahead@omatom.com'));
