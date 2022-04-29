let counterValue = 0;
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const resetBtnRef = document.querySelector('.reset');
const spanRef = document.querySelector('span');

const increment = () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
};
const reset = () => {
  counterValue = 0;
  spanRef.textContent = counterValue;
};

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);
resetBtnRef.addEventListener('click', reset);
