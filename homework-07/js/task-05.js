const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const changeName = event => {
  outputRef.textContent =
    inputRef.value === '' ? 'незнакомец' : event.target.value;
};

inputRef.addEventListener('input', changeName);
