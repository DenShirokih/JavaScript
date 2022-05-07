import users from './users.js';
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);

console.table(getUsersWithGender(users, 'male'));
