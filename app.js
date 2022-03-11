let row = 16;
let col = 16;
let grid = row*col;
let color = "black";

let container = document.querySelector(".container");

//change colors to selected from dropdown
let colorSelected = document.querySelectorAll(".color");
colorSelected.forEach(colors => {
    colors.addEventListener("click", (e) => {
        color = e.target.innerHTML;
    });
});

//selecting the grid
let gridSelect = document.getElementById("gridSelect").
    addEventListener("click", () => {
        let gridSize;
        //prompt the user for the grid size
        do {
            gridSize = prompt("What size would you like the grid to be?", "16");
        }
        while (gridSize > 100);
        row = +gridSize;
        col = +gridSize;
        grid = row*col;
        clearCurrentGrid();
        create();
})

// clear the current grid
function clearCurrentGrid () {
    container.innerHTML = ''
}

// make a loop for creating the grid
function create () {
    container.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${col}, 1fr)`;
    let mouseDown = false;    
    for(let i = 0; i < grid; i++) {
        let div = document.createElement("div"); 

        // div.innerHTML = "a";
        container.appendChild(div);

        // add event listeners to change colors  
        div.addEventListener("mousedown", () => {
            div.style.backgroundColor = color;
            mouseDown = true;
        })
        div.addEventListener("mouseup", () => {
            mouseDown = false;
        })
        div.addEventListener("mousemove", () => {
            if(mouseDown) {
                div.style.backgroundColor = color;
            }
        })
    }
}

//rainbow button
let rainbow = document.getElementById("rainbow").
    addEventListener("click", () => {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    color = `rgb(${randomR}, ${randomG}, ${randomB})`
    })

//delete the color, eraser
let eraser = document.getElementById("eraser").
    addEventListener("click", () => {
       color = "white"; 
})


//dropdown button effects
function drop() {
    document.getElementById("dropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

let reload = document.querySelector("#reset").
    addEventListener("click", () => {
        location.reload();
})

create();