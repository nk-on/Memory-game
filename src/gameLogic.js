import gameBoard from './boardCreation.js';
let guessedSquares = 0;
let choosenId = [];
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
  const optionOne = choosenId[0];
  const optionTwo = choosenId[1];
  if (fruits[optionOne].title === fruits[optionTwo].title) {
    guessedSquares++;
  }else{
    squares.forEach((square) => {
      if (choosenId.includes(Number(square.id))) {
        square.style.backgroundImage = `url(/assets/questionMark.png)`;
      }
    });
  }
  choosenId = [];
}
function rotateSquare(square) {
  if (choosenId.length > 1) {
    compareSquares();
  }
  choosenId.push(Number(square.id));
  // selectedFruits.push(fruits[index]);
  // selectedSquares.push(square);
  square.style.backgroundImage = `url(${fruits[Number(square.id)].img})`;
}
squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    rotateSquare(square, index);
  });
});
