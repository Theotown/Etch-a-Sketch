const gridContainer = document.getElementById("grid-container");
const setGridButton = document.getElementById("set-grid");
const resetGridButton = document.getElementById("reset-grid");
const toggleModeButton = document.getElementById("toggle-mode");

let gridSize = 16;
let currentMode = "random"; 

function createGrid(size) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.dataset.darkness = 0;
    square.addEventListener("mouseover", handleHover);
    gridContainer.appendChild(square);
  }
}

function handleHover(e) {
  const square = e.target;
  if (currentMode === "random") {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    square.style.filter = "brightness(1)";
    square.dataset.darkness = 0;
  } else if (currentMode === "darken") {
    let darkness = parseInt(square.dataset.darkness);
    if (darkness < 10) {
      darkness++;
      square.dataset.darkness = darkness;
      square.style.backgroundColor = "black";
      square.style.filter = `brightness(${1 - darkness * 0.1})`;
    }
  }
}

setGridButton.addEventListener("click", () => {
  let size = parseInt(prompt("Enter grid size (max 100):"));
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }
  gridSize = size;
  createGrid(gridSize);
});