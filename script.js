const cells = document.querySelectorAll(".cell");

Gameboard = {
  gameboard: ["", "", "", "", "", "", "", "", ""],
  winningCondition: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
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
