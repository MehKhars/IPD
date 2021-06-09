// Import ==========================================================
import { requestFrame, canvasXY, beakerXY1, beakerHandXY1, bottleXY1, waterXY1 } from "./datafileObjects.js";
// ------------------------------------------------------------------

// Main Logic Body and export =======================================
let beakerMovesYXCount = 0;
let bottleWaterY = 294 * canvasXY.yRatio;
function beakerMovesYX() {
  beakerMovesYXCount++;
  canvasXY.clearCanvas();

  //Initial Beaker Y Translation
  if (beakerMovesYXCount < 100) {
    waterXY1.y -= waterXY1.dy;
    beakerXY1.y -= beakerXY1.dy;
    beakerHandXY1.y -= beakerHandXY1.dy;
  }
  //Initial Beaker X Translation
  if (beakerMovesYXCount >= 80 && beakerMovesYXCount < 180) {
    waterXY1.x -= waterXY1.dx;
    beakerXY1.x -= beakerXY1.dx;
    beakerHandXY1.x -= beakerHandXY1.dx;
  }

  // WaterRendering before beaker rotate
  if (beakerMovesYXCount < 200) {
    waterXY1.renderWater1();
  }
  if (beakerMovesYXCount >= 240) {
    //Beaker Dropping Water
    if (beakerMovesYXCount <= 290) {
      waterXY1.renderWater1(175 * canvasXY.xRatio, 150 * canvasXY.yRatio, 14 * canvasXY.xRatio, 145 * canvasXY.yRatio);
    }
    //Bottle Water Increasing
    waterXY1.renderWater1(163 * canvasXY.xRatio, bottleWaterY, 38 * canvasXY.xRatio, (beakerMovesYXCount - 240) * canvasXY.yRatio, 'rgba(46, 223, 230, 0.5)');
    bottleWaterY -= waterXY1.dy;
  }

  // Beaker Rotation
  if (beakerMovesYXCount >= 200) {
    if (beakerMovesYXCount <= 240) {
      beakerHandXY1.rotateHand(beakerMovesYXCount - 200);
      beakerXY1.rotateBeaker(beakerMovesYXCount - 200);
    }
    // Beaker after full rotation cycle
    else {
      beakerHandXY1.rotateHand(40);
      beakerXY1.rotateBeaker(40);
    }
  }
  // Beaker rendering before rotation
  else {
    beakerHandXY1.renderHand();
    beakerXY1.renderBeaker1();
  }

  // Static Bottle Background Rendering
  bottleXY1.renderBottle1();
  canvasXY.renderBg();

  console.log("beakerMovesYX...");
  if (beakerMovesYXCount < 295) {
    requestFrame(beakerMovesYX);
  }
}

let initAnime2Count = 0;
function initAnime2() {
  initAnime2Count++;
  canvasXY.clearCanvas();
  // beakerHandXY1.renderHand();
  waterXY1.renderWater1();
  beakerXY1.renderBeaker1();
  bottleXY1.renderBottle1();
  canvasXY.renderBg();
  console.log("initAnime2...");
  if (initAnime2Count < 15) {
    requestFrame(initAnime2);
  }
}

export { initAnime2, beakerMovesYX };
// -----------------------------------------------------------------

// Extra Commented Function for checking Page=============================
// requestFrame(initAnime2);
// let btnFilter = document.querySelector('#task2');
// btnFilter.addEventListener("click", () => {
//   requestFrame(beakerMovesYX);
//   btnFilter.disabled = true;
// });
// -------------------------------------------------------------------