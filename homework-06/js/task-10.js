import users from './users.js';
const getSortedUniqueSkills = users =>
  users
    .map(user => user.skills)
    .reduce((allSkills, user) => [...allSkills, ...user], [])
    .filter((elem, index, array) => array.indexOf(elem) === index)
    .sort((b, a) => b.localeCompare(a, 'en'));

console.log(getSortedUniqueSkills(users));
