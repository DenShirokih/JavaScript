const allcategories = document.querySelectorAll('.item');
console.log(`В списке ${allcategories.length} категории.`);

const array = [...allcategories]
  .map(
    categories => `Категория- ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`,
  )
  .join('\n');
console.log(array);
