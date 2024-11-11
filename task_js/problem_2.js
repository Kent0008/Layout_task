
// Задание 2: Сравнение дробных частей чисел
const a = 13.123456789;
const b = 2.123;
const n = 5;

const fractionalA = Math.floor((a % 1) * Math.pow(10, n));
const fractionalB = Math.floor((b % 1) * Math.pow(10, n));

console.log("Дробная часть числа a:", fractionalA);
console.log("Дробная часть числа b:", fractionalB);

console.log("fractionalA > fractionalB:", fractionalA > fractionalB);
console.log("fractionalA < fractionalB:", fractionalA < fractionalB);
console.log("fractionalA >= fractionalB:", fractionalA >= fractionalB);
console.log("fractionalA <= fractionalB:", fractionalA <= fractionalB);
console.log("fractionalA === fractionalB:", fractionalA === fractionalB);
console.log("fractionalA !== fractionalB:", fractionalA !== fractionalB);
