let board = [];
let rows = 16;
let columns = 16;


const minesCount = 10; //от 0 до 40
const minesLocation = []; // 2-8

const gameOver = false;

window.onload = () => startGame();

function setMines() {
  minesLocation.push("0-0")
}

function startGame() {
  document.querySelector('#count').innerHTML = minesCount;
  setMines()

  for (let i = 0; i < rows; i++) {
    let row = []
    for (let k = 0; k < columns; k++) {
      const tile = document.createElement("div")
      tile.id = `${i.toString()}-${k.toString()}`;
      tile.addEventListener('click', clickTile)
      document.querySelector("#board").append(tile)
      row.push(tile)
    }
    board.push(row)
  }
  console.log(board);
}

function clickTile() {
  if (minesLocation.includes(this.id)) {
    document.querySelector('.main__smile').innerHTML = "GAME OVER";
    gameOver = true;
    return;
  }
}

