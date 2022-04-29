const inputRef = document.querySelector('#validation-input');
const validInputLength = inputRef.dataset.length;
const checkInputValid = event => {
  const text = event.target.value;
  if (text.length === +validInputLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
};
inputRef.addEventListener('change', checkInputValid);
