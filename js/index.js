// grid dimension options
const dimensions = {
    mini: { columns: 8, rows: 6, size: 112.5 },
    small: { columns: 16, rows: 12, size: 56.25 },
    medium: { columns: 32, rows: 24, size: 28.125 },
    big: { columns: 64, rows: 48, size: 14.0625 },
    large: { columns: 128, rows: 92, size: 7.01335 },
  };

// color options
const colors = {
    black: ["#C0C0C0", "#343434", "#000000"],
    ice: ["#E8F9FD", "#79DAE8", "#0AA1DD", "#2155CD"],
    sunset: ["#FFE15D", "#F49D1A", "#DC3535", "#B01E68"],
}

// select grid frame
const gridFrame = document.querySelector(".grid-frame")

// create <div>'s and append them to the parent
function createGrid(numberOfColumns, numberOfRows, size) {
    
    // clear the existing grid
    gridFrame.innerHTML = "" 

    for (let c = 0; c < numberOfColumns; c++) {
        for (let r = 0; r < numberOfRows; r++) {
            let grid = document.createElement("div");
            grid.classList.add("grid")
            grid.setAttribute("style", `width: ${size}px; height: ${size}px`)
            gridFrame.appendChild(grid)
            grid.addEventListener("mouseover", (event) => {
                let color = randColor();
                event.target.style.background = color;
            })
        }
    }
}

// select all buttons
const buttons = document.querySelectorAll(".btn")

// change grid size buttons functionality 
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const buttonId = e.target.id;
    const newGridSize = dimensions[buttonId];
    if (newGridSize) {
      const { columns, rows, size } = newGridSize;
      createGrid(columns, rows, size);
    }

    if (buttonId in colors) {
        let selectedColor = buttonId
        randColor(selectedColor)
    }

  });
});

// random colors
function randColor(color) {
    console.log(colors[color])
    const colorArray = colors[color] || colors.ice
    let randomIndex = Math.floor(Math.random() * colorArray.length)
    return colorArray[randomIndex]
}

// start grid size values
function startSize() {
    const { columns, rows, size } = dimensions["small"]
    createGrid(columns, rows, size)
}

startSize()


