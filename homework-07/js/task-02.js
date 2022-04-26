const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListRef = document.querySelector(`#ingredients`);
const addListItems = (array, list) => {
  const nodesList = array.map(element => {
    const li = document.createElement('li');
    li.textContent = element;
    return li;
  });
  list.append(...nodesList);
};
addListItems(ingredients, ingredientsListRef);
