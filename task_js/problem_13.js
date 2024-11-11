// Задание 13: кто старше в массиве
function getOlderUserArray(users) {
  return users.reduce((oldest, user) => {
      return user.age > oldest.age ? user : oldest;
  }).name;
}

let allUsers = [
  { name: 'Валя', age: 11 },
  { name: 'Таня', age: 24 },
  { name: 'Рома', age: 21 },
  { name: 'Надя', age: 34 },
  { name: 'Антон', age: 7 }
];


let res = getOlderUserArray(allUsers);
console.log(res);
