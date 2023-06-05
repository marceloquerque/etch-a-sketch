let numberOfColumns = 16;
let numberOfRows = 12;
let gridSize = 56.25;

function createGrid() {
    let grid = document.createElement("div");
    grid.classList.add("grid")
    const gridFrame = document.querySelector(".grid-frame")
    return gridFrame.appendChild(grid)
}

for (let c = 0; c < numberOfColumns; c++){
    createGrid()
    for (let r = 1; r < numberOfRows; r++){
        createGrid()
    }
}

const grids = document.querySelectorAll(".grid");

Array.from(grids).forEach(grid => {
    grid.addEventListener("mouseover", (event) => {
        event.target.style.background = "purple"
    })
})
