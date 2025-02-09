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
      gridBox.id = `boxR${i}C${j}`;
      gridBox.backgroundColor = "lightslategray"
      gridRow.appendChild(gridBox);
   }
   grid.appendChild(gridRow);
}

grid.addEventListener("mouseover", function(event){
   let curBox = document.getElementById(`${event.target.id}`);
   curBox.style.backgroundColor = "black";
});

let erase = document.querySelector(".btn.erase");
erase.addEventListener("click", function() {
   let frameLeftSpacer = document.querySelector(".frameLeftSpacer");
   let gridOverlay = document.querySelector(".gridOverlay");
   
   let isShakeDone = false;
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
})

