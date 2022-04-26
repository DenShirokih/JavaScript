const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListRef = document.querySelector(`#ingredients`);
const addListItems = (array, targetNode) => {
  const nodesList = array.map(element => {
    const li = document.createElement('li');
    li.textContent = element;
    return li;
  });
  targetNode.append(...nodesList);
};
addListItems(ingredients, ingredientsListRef);
