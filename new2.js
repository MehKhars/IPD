// Import =========================================================
import { requestFrame, canvasXY, bottleXY, dropperXY, dropperHandXY, slide1XY, slide2XY, slideHandXY, microScopeXY, water2XY } from "./datafileObjects.js";
// ----------------------------------------------------------------

// Main Logic Body=====================================================
let moveDropperCount = 0;
function moveDropperUp() {

  canvasXY.clearCanvas(); //Clearing canvas

  if (moveDropperCount < 60) {
    //dropper move up
    dropperXY.y -= dropperXY.dy * canvasXY.yRatio;
    dropperHandXY.y -= dropperHandXY.dy * canvasXY.yRatio;
    console.log("movingdropperUp...");
  }

  if (moveDropperCount >= 60 && moveDropperCount < 165) { // dropper move right
    dropperXY.x += dropperXY.dx * canvasXY.xRatio;
    dropperHandXY.x += dropperHandXY.dx * canvasXY.xRatio;
    console.log("movingdropperRight...");
  }

  if (moveDropperCount >= 165 && moveDropperCount < 235) {
    dropperXY.y += canvasXY.yRatio * dropperXY.dy;
    dropperHandXY.y += canvasXY.yRatio * dropperHandXY.dy;
    console.log("movedropperDown...");
  }

  if (moveDropperCount > 275 && moveDropperCount <= 322) {
    dropperXY.y -= 1.5 * canvasXY.yRatio * dropperXY.dy;
    dropperHandXY.y -= 1.5 * canvasXY.yRatio * dropperHandXY.dy;
    //moveDropperUp
  }

  if (moveDropperCount > 310 && moveDropperCount < 364) {
    dropperXY.x -= 2 * dropperXY.dx * canvasXY.xRatio;
    dropperHandXY.x -= 2 * dropperHandXY.dx * canvasXY.xRatio;
    //moveDropperLeft
  }

  if (moveDropperCount >= 360 && moveDropperCount <= 420) {
    dropperXY.y += dropperXY.dy * canvasXY.xRatio;
    dropperHandXY.y += dropperHandXY.dy * canvasXY.xRatio;
    //MoveDropperDown back into water bottle
  }

  if (moveDropperCount > 265 && moveDropperCount <= 300) { //drop movement down
    water2XY.dropY += 1 * canvasXY.yRatio;
    water2XY.renderDrop();
    console.log("dropMovesDown...");
  }

  if (moveDropperCount == 300) {
    canvasXY.clearCanvas(); //Clearing canvas on drop reaching
  }

  if (moveDropperCount >= 325 && moveDropperCount <= 327) {
    slide1XY.y -= slide1XY.dy * canvasXY.yRatio;
    console.log("slideMovesUp...");
  }

  if (moveDropperCount >= 337 && moveDropperCount >= 380) {
    slide1XY.x += slide1XY.dx * canvasXY.xRatio;
    console.log("slideMovesRight...");
  }

  bottleXY.renderBottle(); //Drawing bottle
  dropperHandXY.renderHand(); //Draw dropperHand
  dropperXY.renderDropper(); //Draw Dropper
  water2XY.renderWater(); //GetWater
  slide1XY.renderSlide1(); //Draw Slide1
  slide2XY.renderSlide2(); //Draw Slide2
  microScopeXY.renderMicroscope(); //Draw Microscope  
  canvasXY.renderBg(); //Drawing background

  moveDropperCount++;

  if (moveDropperCount < 420) {
    requestFrame(moveDropperUp);
  }
}

let moveSlideCount = 0
let moveSlideCountX = 0
let moveSlideCountY = 0
function moveSlides() {
  if (moveSlideCountX <= 115) {
    moveSlideCountX++;
    slide1XY.x += slide1XY.dx * canvasXY.xRatio;
    slide2XY.x += slide2XY.dx * canvasXY.xRatio;
    slideHandXY.x += slideHandXY.dx * canvasXY.xRatio;
  }
  if (moveSlideCountY <= 45) {
    moveSlideCountY++;
    slide1XY.y -= slide1XY.dy * canvasXY.yRatio;
    slide2XY.y -= slide2XY.dy * canvasXY.yRatio;
    slideHandXY.y -= slideHandXY.dy * canvasXY.yRatio;
  }
  canvasXY.clearCanvas();

  bottleXY.renderBottle(); //Drawing bottle
  dropperXY.renderDropper(); //Draw Dropper
  water2XY.renderWater(); //GetWater
  if(moveSlideCountX<=100) slideHandXY.renderHand();
  slide1XY.renderSlide1(); //Draw Slide1
  slide2XY.renderSlide2(); //Draw Slide2
  microScopeXY.renderMicroscope(); //Draw Microscope  
  canvasXY.renderBg(); //Drawing background

  moveSlideCount++;
  console.log("movingSlides...");
  if (moveSlideCount <= 115) {
    requestFrame(moveSlides);
  }
}

let initAnime3Count = 0;
function initAnime3() {
  canvasXY.clearCanvas(); //Clearing canvas
  bottleXY.renderBottle(); //Drawing bottle
  water2XY.renderWater(); //GetWater
  dropperHandXY.renderHand(); //Draw dropper Hand
  dropperXY.renderDropper(); //Draw Dropper
  slide1XY.renderSlide1(); //Draw Slide1
  slide2XY.renderSlide2(); //Draw Slide2
  microScopeXY.renderMicroscope(); //Draw Microscope  
  canvasXY.renderBg(); //Drawing background
  initAnime3Count++;
  console.log("initAnime3...");
  if (initAnime3Count < 15) {
    requestFrame(initAnime3)
  }
}

export { initAnime3, moveDropperUp, moveSlides };
// ---------------------------------------------------------------------


// ALL PROCESS STEP BY STEP
// requestFrame(initAnime3);
// let dropWater = document.getElementById("task3a");
// let takeToMicroScope = document.getElementById("task3b");

// dropWater.addEventListener("click", () => {
//   requestFrame(moveDropperUp);
//   dropWater.disabled = true;
// });

// takeToMicroScope.addEventListener("click", () => {
//   requestFrame(moveSlides);
//   takeToMicroScope.disabled = true;
// });