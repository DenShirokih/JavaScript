const inputRef = document.querySelector('[type="number"]');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

const btnCreateBoxes = () => {
  boxes.innerHTML = '';
  const num = inputRef.value;
  const dives = [];
  for (let i = 1; i <= num; i += 1) {
    const createDiv = document.createElement('div');
    const firstSize = 30;
    const newSize = firstSize + i * 10;
    createDiv.style.cssText = `width: ${newSize}px; height: ${newSize}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    console.log(createDiv.style.cssText);
    dives.push(createDiv);
    console.dir(createDiv);
  }
  boxes.append(...dives);
};
const btnRemoveBoxes = () => {
  boxes.innerHTML = '';
};

function random() {
  return Math.floor(Math.random() * 256);
}

renderBtnRef.addEventListener('click', btnCreateBoxes);
destroyBtnRef.addEventListener('click', btnRemoveBoxes);
