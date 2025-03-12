// eas.js : Etch-A-Sketch js file

let grid = document.querySelector(".gridContainer");
let gridSizeInput = document.querySelector(".gridSize");

buildGrid(gridSizeInput.value);

function buildGrid (gridSize) {
   let gridContainerDim = 640;
   let gridDim = gridSize;
  
   let boxDimStr = `${gridContainerDim / gridDim}px`;

   for(let i=0; i<gridDim; i++) {
      let gridRow = document.createElement("div");
      gridRow.style.display = "flex";
      for (let j=0; j<gridDim; j++) {
         let gridBox = document.createElement("div");
         gridBox.style.height = boxDimStr;
         gridBox.style.width = boxDimStr;
         gridBox.id = `boxR${i}C${j}`;
         gridBox.style.backgroundColor = "lightslategray"
         gridBox.style.opacity = 0;
         gridRow.appendChild(gridBox);
      }
      grid.appendChild(gridRow);
   }
};

grid.addEventListener("mouseover", function(event){
   let curBox = document.getElementById(`${event.target.id}`);
   let isColor = document.querySelector(".checkBox");
   let colorStr = ``;
   if (isColor.checked) {
      colorStr = `rgb(
         ${Math.floor(Math.random()*255)},
         ${Math.floor(Math.random()*255)},
         ${Math.floor(Math.random()*255)})`;
   }
   else {
      colorStr = `black`;
   }
   
   curBox.style.backgroundColor = colorStr;
   curBox.style.opacity = parseFloat(window.getComputedStyle(curBox).
      opacity) + 0.33;
});

let erase = document.querySelector(".btn.erase");
erase.addEventListener("click", eraseGrid);
   
function eraseGrid () {
   let frameLeftSpacer = document.querySelector(".frameLeftSpacer");
   let gridOverlay = document.querySelector(".gridOverlay");
   
   let count = 1;
   let numLoops = 8;
   let delay = 200;
   let opacityValue = 0;

   gridOverlay.style.opacity = `${opacityValue}`;
   gridOverlay.style.zIndex = "3";
   for(let i=0; i<numLoops; i++) {
      setTimeout(() => {
         frameLeftSpacer.style.marginRight = "-40px";
         opacityValue += 1.3/(2*numLoops)
         gridOverlay.style.opacity = `${opacityValue}`;
      }, (count)*delay);
      count++;
      setTimeout(() => {
         frameLeftSpacer.style.marginRight = "40px";
         opacityValue += 1.3/(2*numLoops)
         gridOverlay.style.opacity = `${opacityValue}`;
      }, (count)*delay);
      count++; 
   }
   setTimeout(() => {
      frameLeftSpacer.style.marginRight = "0px";
      let gridBoxes = grid.querySelectorAll("*");
      gridBoxes.forEach(box => {
         box.style.backgroundColor = "lightslategray";
      });
      gridOverlay.style.zIndex = "1";
   }, (count)*delay);
};

let reset = document.querySelector(".btn.reset");
reset.addEventListener("click", () => {
   eraseGrid();
   setTimeout(() => {
      while (grid.firstChild) {
         grid.removeChild(grid.firstChild);
         console.log("In remove function");
      }
      buildGrid(gridSizeInput.value);}, 3000);
});

