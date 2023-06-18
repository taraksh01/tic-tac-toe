const cells = document.querySelectorAll(".cell");

Gameboard = {
  gameboard: ["", "", "", "", "", "", "", "", ""],
};

function Player(name, marker) {
  return { name, marker };
}

function initializeGame() {
  cells.forEach((cell) => {
    cell.addEventListener("click", cellClicked);
  });
}
