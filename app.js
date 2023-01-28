let row = 16;
let col = 16;
let grid = row*col;
let color = "black";
let mode = 'color';

let container = document.querySelector(".container");

//color picker
let colorpicker = document.getElementById("colorpicker");
colorpicker.addEventListener("input", () => {
    let picked = colorpicker.value;
        mode = 'color';
        color = picked;
})

let display = document.getElementById("gridDisplay");
let rangeSelect = 16;
let range = document.getElementById("gridrange");
range.addEventListener('input', () => {
    rangeSelect = range.value;
    display.innerText = rangeSelect;
    gridSize = rangeSelect;
    row = +gridSize;
    col = +gridSize;
    grid = row*col;
    clearCurrentGrid();
    create();
}) 

// clear the current grid
function clearCurrentGrid () {
    container.innerHTML = '';
}

// make a loop for creating the grid
function create () {
    container.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${col}, 1fr)`;
    let mouseDown = false;    
    for(let i = 0; i < grid; i++) {
        let div = document.createElement("div"); 
        container.appendChild(div);

        // add event listeners to change colors 
        if(container.offsetWidth > 300) {
            div.addEventListener("mousedown", () => {
                changeColor(div);
                mouseDown = true;
            })
            div.addEventListener("mouseup", () => {
                mouseDown = false;
            })
            div.addEventListener("mouseenter", () => {
                if(mouseDown) {
                    changeColor(div);
                }
            })
        }
        else {
            div.addEventListener("touchstart", () => {
                changeColor(div);
                mouseDown = true;
            });
            div.addEventListener("touchend", () => {
                mouseDown = false;
            });
            div.addEventListener("touchmove", () => {
                if(mouseDown) {
                    changeColor(div);
                }
            })
        }
    }
}

//rainbow button
let rainbow = document.getElementById("rainbow").
    addEventListener("click", () => { mode = 'rainbow';})   
    
//delete the color, eraser
let eraser = document.getElementById("eraser").
    addEventListener("click", () => { mode = 'eraser'; })

function changeColor(div) {
    if(mode === 'color') {
        div.style.backgroundColor = color;
    }
    else if(mode === 'rainbow') {
        let red = Math.random() * 255;
        let green = Math.random() * 255;
        let blue = Math.random() * 255;
        div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    else if(mode === 'eraser') {
        div.style.backgroundColor = 'white';
    }
}



let reload = document.querySelector("#reset").
    addEventListener("click", () => {
        location.reload();
})

create();