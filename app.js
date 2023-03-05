let board = [];
let rows = 16;
let columns = 16;


const minesCount = 10; //от 0 до 40
const minesLocation = []; // 2-8

const gameOver = false;

function startGame() {
  document.querySelector('#count').innerHTML = minesCount;
}

startGame()