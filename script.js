

const container = document.querySelector("#container");

for (let i=0; i<16; i++) {

    const divVertical = document.createElement("div");
    divVertical.classList.add("vertical");
   
    for (let j=0; j<16; j++) {

        const divHorizontal = document.createElement("div");
        divHorizontal.classList.add("horizontal");
        divVertical.appendChild(divHorizontal);

        divHorizontal.addEventListener("mouseover", () => {
            divHorizontal.style.backgroundColor = "black"; 
        })

    }

    container.appendChild(divVertical);
}

