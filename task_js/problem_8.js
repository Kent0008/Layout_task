// Задание 8: Перемешивание массива
const shuffleCount = 5;
const shuffleArray = [];

for (let i = 1; i <= shuffleCount; i++) {
    shuffleArray.push(i);
}

for (let i = shuffleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
}

console.log(shuffleArray);
