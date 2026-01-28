const container = document.querySelector(".container");

function createAndAppenddivs() {
  const k = 0;
}

function sizeOfGrid() {
  prompt("enter size of grid");
}

const gridSize = document.querySelector(".gridSize");
gridSize.addEventListener("click", sizeOfGrid);

for (let j = 0; j < 16; j++) {
  for (let i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.classList.add("one");
    box.textContent = i;
    container.appendChild(box);
    function f1() {
      box.style.backgroundColor = "black";
    }
    box.addEventListener("mouseenter", f1);
  }
}
