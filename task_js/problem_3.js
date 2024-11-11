
// Задание 3: Генерация случайных чисел и их сравнение
const n1 = 0;
const m1 = 100;
const min1 = Math.min(n1, m1);
const max1 = Math.max(n1, m1);

const random1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
const random2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;

console.log("Случайное число 1:", random1);
console.log("Случайное число 2:", random2);

console.log("random1 > random2:", random1 > random2);
console.log("random1 < random2:", random1 < random2);
console.log("random1 >= random2:", random1 >= random2);
console.log("random1 <= random2:", random1 <= random2);
console.log("random1 === random2:", random1 === random2);
console.log("random1 !== random2:", random1 !== random2);
