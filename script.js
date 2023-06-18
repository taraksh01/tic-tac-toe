const cells = document.querySelectorAll(".cell");

Gameboard = {
  gameboard: ["", "", "", "", "", "", "", "", ""],
};

function Player(name, marker) {
  return { name, marker };
}

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

let currentPlayer = player2;
initializeGame();

function initializeGame() {
  cells.forEach((cell) => {
    cell.addEventListener("click", cellClicked);
  });
}

function cellClicked() {
  const index = this.id;
  console.log(index);
  if (Gameboard.gameboard[index] !== "") {
    console.log("cell not empty");
  } else {
    updateCell(this, index);
  }
}

function updateCell(cell, index) {
  Gameboard.gameboard[index] = currentPlayer.marker;
  cell.textContent = currentPlayer.marker;
}
