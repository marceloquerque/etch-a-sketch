// create a new <div> element
for (let i = 1; i < 166; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid")
    const gridFrame = document.querySelector(".inner-frame")
    gridFrame.appendChild(grid)
}

// add a css class to the <div>

// append the <div> to the parent