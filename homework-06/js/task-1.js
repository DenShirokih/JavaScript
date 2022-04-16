import users from './users.js';
const getUsersNames = users.map(function (user) {
  return user.name;
});
console.log(getUsersNames);
