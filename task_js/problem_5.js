// Задание 5: Форматирование имени и фамилии
const userName = "jOhN";
const userSurname = "doE";

const formattedName = userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
const formattedSurname = userSurname.charAt(0).toUpperCase() + userSurname.substring(1).toLowerCase();

console.log("Имя:", formattedName);
console.log("Фамилия:", formattedSurname);

console.log(userName === formattedName ? "Имя осталось без изменений" : "Имя было преобразовано");
console.log(userSurname === formattedSurname ? "Фамилия осталась без изменений" : "Фамилия была преобразована");
