const generatePairs = () => {
    const numbers = [];
    for (let i = 1; i <= 8; i++) {
        numbers.push(i, i);
    }
    return numbers;
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const numbers = shuffleArray(generatePairs());

const createCard = (number, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.number = number;
    card.dataset.index = index;
    card.innerHTML = `
        <div class="front"></div>
        <div class="back">${number}</div>
    `;
    return card;
};

const createBoard = (numbers) => {
    const board = document.getElementById('board');
    board.innerHTML = '';
    numbers.forEach((number, index) => {
        const card = createCard(number, index);
        board.appendChild(card);
    });
};

let flippedCards = [];
let matchedCards = [];

const handleCardClick = (event) => {
    const card = event.target.closest('.card');
    if (card.classList.contains('flipped') || flippedCards.length === 2) return;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        if (firstCard.dataset.number === secondCard.dataset.number) {
            matchedCards.push(firstCard, secondCard);
            flippedCards = [];
            if (matchedCards.length === numbers.length) {
                setTimeout(() => alert('Поздравляю, вы выиграли!'), 500);
            }
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                flippedCards = [];
            }, 1000);
        }
    }
};

const startGame = () => {
    numbers.length = 0;
    matchedCards.length = 0;
    flippedCards.length = 0;


    numbers.push(...shuffleArray(generatePairs()));

    createBoard(numbers);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', handleCardClick));
};

document.getElementById('resetButton').addEventListener('click', startGame);

startGame();