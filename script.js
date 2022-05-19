function createGrid () {
    const dimension = prompt("Insert dimension of new grid (maximum 100)")
    removeOldGrid()
    for (let i=0; i<dimension; i++) {

        const divVertical = document.createElement("div");
        divVertical.classList.add("vertical");
       
        for (let j=0; j<dimension; j++) {
    
            const divHorizontal = document.createElement("div");
            divHorizontal.classList.add("horizontal");
            divVertical.appendChild(divHorizontal);
    
            divHorizontal.addEventListener("mouseover", () => {
                hover(divHorizontal) 
            })
    
        }
    
        container.appendChild(divVertical);
    }
    
}

function removeOldGrid () {

    const oldGrid = document.querySelectorAll(".vertical")
    oldGrid.forEach(vertical => { vertical.remove() });

}

function hover (element, type = a) {
    if (type == "black") {
        element.style.backgroundColor = "black";
    }

    else if (type =="rgb") {
        element.style.backgroundColor = randomColor();
    }
}

function randomColor () {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#"+color;
}

function rgbOrBlack () {
    if (a=="black") {
        a = "rgb";
        rgb.textContent = "Black";
        return;
    }

    else if (a=="rgb") {
        a = "black";
        rgb.textContent = "RGB";
        return;
    }
}

const container = document.querySelector("#container");

for (let i=0; i<16; i++) {

    const divVertical = document.createElement("div");
    divVertical.classList.add("vertical");
   
    for (let j=0; j<16; j++) {

        const divHorizontal = document.createElement("div");
        divHorizontal.classList.add("horizontal");
        divVertical.appendChild(divHorizontal);

        divHorizontal.addEventListener("mouseover", () => {
            hover(divHorizontal) 
        })

    }

    container.appendChild(divVertical);
}

let a = "black";

const gridDimension = document.querySelector("#dimension");
gridDimension.addEventListener("click", () => { createGrid() });

const rgb = document.querySelector("#color");
rgb.addEventListener("click", () => { rgbOrBlack() } );