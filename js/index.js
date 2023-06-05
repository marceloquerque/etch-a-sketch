// create a new <div> element
for (let i = 1; i < 193; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid")
    const gridFrame = document.querySelector(".inner-frame")
    gridFrame.appendChild(grid)
}

const grids = document.querySelectorAll(".grid");

Array.from(grids).forEach(grid => {
    grid.addEventListener("mouseover", (event) => {
        event.target.style.background = "purple"
    })
})