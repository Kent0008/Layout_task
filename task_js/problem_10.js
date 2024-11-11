
// Задание 10: вывод возраста
function getAge(birthYear) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return currentYear - birthYear;
}

console.log(getAge(1998));
console.log(getAge(1991));
console.log(getAge(2007));
