// Задание 9: Объединение двух массивов
const arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
const arr2 = [12, 44, 23, 5];
const result = [];

const maxLength = arr1.length + arr2.length;
for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
        result.push(arr1[i]);
    } else {
        result.push(arr2[i - arr1.length]);
    }
}

console.log(result);
