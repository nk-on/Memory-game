const gameBoard = document.querySelector('[data-board]');
function createBoard() {
  for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    gameBoard.appendChild(square);
  }
};
createBoard();
export default gameBoard
