const gridContainer = document.querySelector(".grid");
const changeSizeButton = document.querySelector("#resetButton");
const normalButton = document.querySelector("#normalButton");
const rainbowButton = document.querySelector("#rainbowButton");

let currentSize = 24;

rainbowButton.addEventListener("click", function() {rainbowMode(currentSize)});

//when page loads in window, defaultGrid is called so the grid is created.
window.addEventListener("load", defaultGrid);

changeSizeButton.addEventListener("click", changeSize);

normalButton.addEventListener("click", function(){normalMode(currentSize)});


function defaultGrid(){
    //sets length of initial grid to create CSS grid
    setGridSize(24);

    //fills the grid with cells
    fillGrid(24);
}

function setGridSize(size) {
    
    //takes the CSS grid created in the CSS
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    /*
    * SHOULD BE SETTING 24 ROWS AND 24 COLUMNS IN GRID 
    */
}

//Creates cells in the grid
function fillGrid(size) {
    
    //refactored this so that I don't need nested loops

    let iterationNum = size * size;

    //iterates through, creating a new cell on each iteration
    for (let i = 0; i < iterationNum; i++) {
        
        //creates new cell that is a div
        const newCell = document.createElement("div");
        newCell.style.border = "2px black";

        //not completely sure how element.classList.add works--REVIEW THIS
        newCell.classList.add("cell");

        //adds event listener of mouseover to the cell. When it is moused over, the changeColor function will be called.

        newCell.addEventListener("mouseover", changeColor);
        
        //newCell in this iteration is appended to the grid container, which is a CSS grid
        gridContainer.appendChild(newCell);
    };
};

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}



function changeSize() {
    let newSize = prompt("Enter a new grid size (1 to 100)");

    if(newSize != null) {
        //parses string into int value
        newSize = parseInt(newSize);
    }

    if(newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
        alert("Please choose a number between 1 and 100.");
    }

    else{
        currentSize = newSize;
        clearGrid();
        setGridSize(newSize);
        fillGrid(newSize);
    }
}

function clearGrid(){
    let allCells = document.querySelectorAll(".cell");

    allCells.forEach(cell => {cell.style.backgroundColor = null});
}

