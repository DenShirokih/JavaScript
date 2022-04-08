const calculateEngravingPrice = function(message, pricePerWord) {
    let words=message.split(' ');
    return words.length * pricePerWord;
};
console.log(calculateEngravingPrice('Какая дорогая гравировка',10));