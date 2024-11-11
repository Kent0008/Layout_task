// Задание 7: Генерация массива случайных чисел
const n2 = 0;
const m2 = 100;
const count = 10;

const min2 = Math.min(n2, m2);
const max2 = Math.max(n2, m2);
const array = [];

for (let i = 0; i < count; i++) {
    array.push(Math.floor(Math.random() * (max2 - min2 + 1)) + min2);
}

console.log(array);
