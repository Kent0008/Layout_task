
// Задание 11: e-mail адресов которых нету в черном списке
function filter(whiteList, blackList) {
  return whiteList.filter(email => !blackList.includes(email));
}

const whiteList = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
  "user4@example.com"
];
const blackList = [
  "user2@example.com",
  "user4@example.com"
];

let res = filter(whiteList, blackList);
console.log(res);
