class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    console.log(`Наши товары : ${this.items}`);
  }

  addItem(item) {
    this.items.push(item);
    console.log(`Товар ${item} успешно добавлен`);
  }
  removeItem(item) {
    let index = this.items.indexOf(item);
    if (index != -1) {
      this.items.splice(index, 1);
    }
    console.log(`Товар ${item} успешно удален`);
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

storage.getItems();
storage.addItem("Дроид");
storage.getItems();
storage.removeItem("Нанитоиды");
storage.getItems();
