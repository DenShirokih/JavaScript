const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProducts, productName) {
    let totalPrice = 0;
    for (const item of allProducts) {
        let name = item.name;
        if (name === productName) { 
            totalPrice += item.price * item.quantity;
        }
            
    }
    return totalPrice
        
};
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800