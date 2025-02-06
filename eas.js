// eas.js : Etch-A-Sketch js file

let grid = document.querySelector(".gridContainer");
let gridDim = 16;

for(let i=0; i<gridDim; i++) {
   let gridRow = document.createElement("div");
   gridRow.style.display = "flex";
   for (let j=0; j<gridDim; j++) {
      let gridBox = document.createElement("div");
      // Create the element for a single box
      gridBox.style.height = "40px";
      gridBox.style.width = "40px";
      //gridBox.style.border = "1px solid blue";
      gridBox.id = `boxR${i}C${j}`;
      gridRow.appendChild(gridBox);
   }
   grid.appendChild(gridRow);
}

grid.addEventListener("mouseover", function(event){
   let curBox = document.getElementById(`${event.target.id}`);
   curBox.style.backgroundColor = "black";
});

