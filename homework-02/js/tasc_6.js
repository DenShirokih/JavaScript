let input;
let total = 0;
while (true) {
input = prompt('Вводим аккуратно число');
if (isNaN(Number(input))) {
    alert('я же сказал,аккуратно,это не число');
    continue;
}
if (input === null) {
    break;
}
input = Number(input);
total += input;
}
console.log(`вот твоя  сумма ${total}`);