import gameBoard from './boardCreation.js';
//create 16 objects with according titles and links to images
//shuffle randomly this fruits array
let [rotatedSquares, guessedSquares] = [0, 0];
let selectedFruits = [];
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
  //do titles match ? if so leave them as they are
  //if not let user to continue rotating hide with question mark again
  const fruit1 = selectedFruits[0];
  const fruit2 = selectedFruits[1];
  console.log(fruit1, fruit2);
  if (fruit1.title === fruit2.title) {
    guessedSquares++;
  } else {
    squares.forEach((square) => {
      square.style.backgroundImage = 'url(assets/questionMark.png)';
    });
  }
}
function rotateSquare(square, index) {
  if (rotatedSquares > 1) {
    compareSquares();
    selectedFruits = [];
    rotatedSquares = 0;
    return;
  }
  selectedFruits.push(fruits[index]);
  square.style.backgroundImage = `url(${fruits[index].img})`;
  rotatedSquares++;
}
squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    console.log(index)
    rotateSquare(square, index);
  });
});