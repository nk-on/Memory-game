import gameBoard from './boardCreation.js';
//create 16 objects with according titles and links to images
//shuffle randomly this fruits array
let guessedSquares = 0;
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
  if (fruit1.title === fruit2.title) {
    guessedSquares++;
  } else {
    squares.forEach((square) => {
      if (square.classList.contains('rotated')) {
        square.style.backgroundImage = 'url(assets/questionMark.png)';
      }
    });
  }
}
function rotateSquare(square, index) {
  if (selectedFruits.length > 1) {
    console.log(' i work');
    compareSquares();
    squares.forEach((square) => square.classList.remove('rotated'));
    selectedFruits = [];
  }
  selectedFruits.push(fruits[index]);
  console.log(fruits[index]);
  square.style.backgroundImage = `url(${fruits[index].img})`;
  square.classList.add('rotated');
}
squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    rotateSquare(square, index);
  });
});
