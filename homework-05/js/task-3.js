class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
    console.log(`Товар ${item} успешно добавлен`);
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    console.log(`Товар ${item} успешно удален`);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

console.log(storage.getItems());
storage.addItem('Дроид');
console.log(storage.getItems());
storage.removeItem('Нанитоиды');
console.log(storage.getItems());
