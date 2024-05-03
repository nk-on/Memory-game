import gameBoard from './boardCreation.js';
//create 16 objects with according titles and links to images
//shuffle randomly this fruits array
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
