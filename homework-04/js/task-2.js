const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter((item) => item !== itemName);
  },
};
const invokeInventoryAction = function (itemName, action) {
  action(itemName);
};
invokeInventoryAction("Medkit", inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction("Gas mask", inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
