const userAnswer = prompt('What is the official name of JavaScript?');
console.log(userAnswer);
if (userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase()) {
  alert('Yep!');
} else {
  alert("Don't you know? ECMAScript!");
}
