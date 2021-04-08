// Import =====================================================
import { canvasXY, beakerXY, waterXY, requestFrame } from "../datafileObjects.js";
// ------------------------------------------------------------

// Main Logic Body and export==========================================
let beakerTranslatesYCount = 0;
function beakerTranslatesY() {
  canvasXY.clearCanvas();

  if (beakerTranslatesYCount < 100) {
    beakerXY.y += beakerXY.dy;
    console.log("beakerTranslatesYDown...");
  }//Beaker translates down

  if (beakerTranslatesYCount >= 100 && beakerTranslatesYCount < 145) {
    waterXY.renderWater(waterXY.x, waterXY.y + waterXY.height - canvasXY.yRatio * (beakerTranslatesYCount - 100), waterXY.width, canvasXY.yRatio * (beakerTranslatesYCount - 100));
    console.log("FillingWater...");
  }//Water adds in Beaker

  if (beakerTranslatesYCount >= 145) {
    beakerXY.y -= (beakerXY.dy);
    waterXY.y = (beakerXY.y + 20 * canvasXY.yRatio);
    waterXY.renderWater();
    console.log("beakerTranslatesYUp...");
  }//Beaker translates Up

  beakerXY.renderBeaker();
  canvasXY.renderLake();

  beakerTranslatesYCount++;

  if (beakerTranslatesYCount < 245) {
    requestFrame(beakerTranslatesY);
  }
  if (beakerTranslatesYCount == 245) {
    return 1;
  }
}


let initAnime1Count = 0;
function initAnime1() {
  canvasXY.clearCanvas();
  beakerXY.renderBeaker();
  canvasXY.renderLake();
  initAnime1Count++;
  console.log("initAnime1...");
  if (initAnime1Count < 35) {
    requestFrame(initAnime1);
  }
}

export { initAnime1, beakerTranslatesY };
// --------------------------------------------------------------------

// Extra Commented Function for checking Page=============================
// requestFrame(initAnime1);
// let btn1 = document.querySelector("#task1");
// btn1.addEventListener("click", function () {
//   requestFrame(beakerTranslatesY);
//   btn1.disabled = true;
// });
// ------------------------------------------------------------------------