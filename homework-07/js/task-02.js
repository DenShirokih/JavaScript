const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listForAddingItems = document.querySelector(`#ingredients`);

const newArray = [];
const addListItems = array => {
  array.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    newArray.push(li);
  });
};

addListItems(ingredients);
listForAddingItems.append(...newArray);
