const container = document.querySelector('#container');
let cell = document.createElement('div');
let target;

//makes a row of cell divs
function makeRow(numCells) {
    for (var c = 0; c < numCells; c++) {
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

function makeGrid(sideLength) {
    for (let r = 0; r < sideLength; r++) {
        makeRow(sideLength);

    }
}

cell.addEventListener('mouseover', function (e) {
    this.style.backgroundColor = 'black';
})


function changeColor(target) {
    target.style.backgroundColor = "black";
}