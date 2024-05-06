import gameBoard from './boardCreation.js';
let guessedSquares = 0;
let selectedFruits = [];
let selectedSquares = [];
const fruits = [
  {
    title: 'Apple',
    img: '/assets/apple.png',
  },
  {
    title: 'Banana',
    img: '/assets/banana.png',
  },
  {
    title: 'Watermelon',
    img: '/assets/watermelon.png',
  },
  {
    title: 'Strawberry',
    img: '/assets/strawberry.png',
  },
  {
    title: 'Apple',
    img: '/assets/apple.png',
  },
  {
    title: 'Banana',
    img: '/assets/banana.png',
  },
  {
    title: 'Watermelon',
    img: '/assets/watermelon.png',
  },
  {
    title: 'Strawberry',
    img: '/assets/strawberry.png',
  },
  {
    title: 'Apple',
    img: '/assets/apple.png',
  },
  {
    title: 'Banana',
    img: '/assets/banana.png',
  },
  {
    title: 'Watermelon',
    img: '/assets/watermelon.png',
  },
  {
    title: 'Strawberry',
    img: '/assets/strawberry.png',
  },
  {
    title: 'Apple',
    img: '/assets/apple.png',
  },
  {
    title: 'Banana',
    img: '/assets/banana.png',
  },
  {
    title: 'Watermelon',
    img: '/assets/watermelon.png',
  },
  {
    title: 'Strawberry',
    img: '/assets/strawberry.png',
  },
];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(fruits);
const squares = Array.from(gameBoard.children);
function compareSquares() {
  const fruit1 = selectedFruits[0];
  const fruit2 = selectedFruits[1];
  if (fruit1.title === fruit2.title) {
    guessedSquares++;
    return;
  }
  selectedSquares.forEach((square) => square.style.backgroundImage = `url(/assets/questionMark.png)`);
}
function rotateSquare(square, index) {
  if (selectedFruits.length > 1) {
    compareSquares(square);
    selectedFruits = [];
    selectedSquares = [];
  }
  selectedFruits.push(fruits[index]);
  selectedSquares.push(square);
  square.style.backgroundImage = `url(${fruits[index].img})`;
}
squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    rotateSquare(square, index);
  });
});
