import users from './users.js';
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.table(getUsersWithEyeColor(users, 'blue'));
