//selecting button and grid container
const container = document.querySelector(".container");
const gridSize = document.querySelector(".gridSize");

//function to create the grid
let d = 0;

let size;
grid(16);
function grid(size) {
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      const box = document.createElement("div");
      box.classList.add("box");

      box.style.width = 512 / size + "px";
      box.style.height = 512 / size + "px";
      container.appendChild(box);
      box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "black";
      });
    }
  }
}
//creating new grid

function sizeOfGrid() {}

//getting the user value for grid size
gridSize.addEventListener("click", () => {
  size = Number(prompt("enter size of grid"));
  if (size < 100 && size > 0) {
    container.innerHTML = "";
    grid(size);
  } else {
    prompt("Enter a valid number within the range (1-100)");
  }
});
