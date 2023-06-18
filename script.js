const cells = document.querySelectorAll(".cell");
const start = document.querySelector(".start");
const status = document.querySelector(".game-status");
let gameStarted = false;

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

function initializeGame() {
  cells.forEach((cell) => {
    cell.addEventListener("click", cellClicked);
  });
  gameStarted = true;
  status.textContent = `${currentPlayer.name}'s turn`;
}

function cellClicked() {
  const index = this.id;
  console.log(index);
  if (Gameboard.gameboard[index] !== "") {
    status.textContent = "Cell is not empty choose another cell";
  } else if (!gameStarted) {
    return;
  } else {
    updateCell(this, index);
  }
  checkWinner();
}

function updateCell(cell, index) {
  Gameboard.gameboard[index] = currentPlayer.marker;
  cell.textContent = currentPlayer.marker;
}

function checkWinner() {
  let gameWon = false;
  for (let i = 0; i < 8; i++) {
    const condition = Gameboard.winningCondition[i];
    if (
      Gameboard.gameboard[condition[0]] === "" ||
      Gameboard.gameboard[condition[1]] === "" ||
      Gameboard.gameboard[condition[2]] === ""
    ) {
      continue;
    }
    if (
      Gameboard.gameboard[condition[0]] === Gameboard.gameboard[condition[1]] &&
      Gameboard.gameboard[condition[1]] === Gameboard.gameboard[condition[2]]
    ) {
      gameWon = true;
      break;
    }
  }

  if (gameWon) {
    status.textContent = `${currentPlayer.name} Won the game!!!!`;
    gameStarted = false;
  } else if (!Gameboard.gameboard.includes("")) {
    status.textContent = "It's a draw";
  } else {
    changePlayer();
  }
}

function changePlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  status.textContent = `${currentPlayer.name}'s turn`;
}

start.addEventListener("click", () => {
  status.textContent = `Your marker is ${player1.marker}`;
  initializeGame();
});
