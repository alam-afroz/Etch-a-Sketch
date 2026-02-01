//selecting button and grid container
const container = document.querySelector(".container");
const gridSize = document.querySelector(".gridSize");

//function to create the grid
grid(16, 16);
function grid(a, b) {
  for (let j = 0; j < a; j++) {
    for (let i = 0; i < b; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.textContent = i;
      box.style.width = 512 / a + "px";
      box.style.height = 512 / a + "px";
      container.appendChild(box);
      box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "black";
      });
    }
  }
}
//creating new grid
let size;
function sizeOfGrid() {
  let size = prompt("enter size of grid");
  grid(size, size);
}
//getting the user value for grid size
gridSize.addEventListener("click", sizeOfGrid);
