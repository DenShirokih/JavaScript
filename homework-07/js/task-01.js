const catAndEl = () => {
  const categories = document.querySelectorAll('.item');
  console.log(`В списке ${categories.length} категории`);

  categories.forEach(element => {
    console.log(`Категория: ${element.querySelector('h2').textContent}`);
    console.log(
      `В категории: ${element.querySelectorAll('li').length} элементов`,
    );
  });
};
catAndEl();
