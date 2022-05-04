const textElementRef = document.getElementById('text');
const inputElementRef = document.getElementById('font-size-control');
const fontSizeRef = document.getElementById('font-size-value');
textElementRef.style.fontSize = inputElementRef.value + 'px';

fontSizeRef.textContent = `Размер Кедавры ${inputElementRef.value}px`;
const changeFontSize = event => {
  textElementRef.style.fontSize = event.currentTarget.value + 'px';
  fontSizeRef.textContent = `Размер Кедавры ${event.currentTarget.value}px`;
};

inputElementRef.addEventListener('input', changeFontSize);
// console.dir(inputElementRef);
// console.log(inputElementRef.valueAsNumber);
