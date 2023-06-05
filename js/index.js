let numberOfColumns = 16;
let numberOfRows = 12;
let gridSize = 56.25;

const colors = {
    black: "#000",
    ice: ["#E8F9FD", "#79DAE8", "#0AA1DD", "#2155CD"],
    sunset: ["#FFE15D", "#F49D1A", "#DC3535", "#B01E68"],
}

function randColor() {
    let rand = colors.ice[Math.floor(Math.random() * colors.ice.length)]
    console.log(rand)
}

randColor()

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