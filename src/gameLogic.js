import gameBoard from './boardCreation.js';
let guessedSquares = 0;
let choosenId = [];
const dialog = document.querySelector('[data-dialog]');
const gameRestart = document.querySelector('[data-restart]');
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
function removePicture() {
  squares.forEach((square) => {
    if (choosenId.includes(Number(square.id))) {
      square.style.backgroundImage = `url(/assets/questionMark.png)`;
    }
  });
}
function addGuessedClass() {
  squares.forEach((square) => {
    if (choosenId.includes(Number(square.id))) {
      square.classList.add('guessed');
    }
  });
}
function compareSquares(square) {
  if (square.classList.contains('guessed')) {
    alert('You cant choose one square twice');
    choosenId = [];
    return;
  }
  if (choosenId[0] === choosenId[1]) {
    alert('You cant choose one square twice');
    removePicture();
    choosenId = [];
    return;
  }
  const [optionOneIdx, optionTwoidx] = [choosenId[0], choosenId[1]];
  if (fruits[optionOneIdx].title === fruits[optionTwoidx].title) {
    guessedSquares++;
    addGuessedClass();
    choosenId = [];
    return;
  }
  removePicture();
  choosenId = [];
}
function checkGameOver() {
  if (guessedSquares === squares.length / 2 - 1 && choosenId.length === 2) {
    dialog.show();
  }
}
function rotateSquare(square) {
  choosenId.push(Number(square.id));
  square.style.backgroundImage = `url(${fruits[Number(square.id)].img})`;
  checkGameOver();
  if (choosenId.length > 1) {
    setTimeout(() => {
      compareSquares(square);
    }, 300);
  }
}
squares.forEach((square) => {
  square.addEventListener('click', () => {
    rotateSquare(square);
  });
});
gameRestart.addEventListener('click', () => {
  location.reload();
  dialog.close();
});
