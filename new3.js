// Function for generators-----------------------------------------------
function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
function getRandomInt(arg) {
  return Math.floor(Math.random() * Math.floor(arg));
}
// -----------------------------------------------------------------------

// Bacteria Selector and import -------------------------------------------
const bactArr = ['bacteria.png', 'bacteria1Color.png', 'bacteria2.png', 'bacteria3.png'];
const actBactName = ['Amoeba', 'Paramecium', 'Chlamydomonas', 'Spirogyra'];
let num = getRandomInt(bactArr.length);
let bactName = bactArr[num];
const bacteria1 = new Image();

bacteria1.src = "../assets/" + bactName;
let expBactName = actBactName[num];
import { requestFrame, canvasXY, bacteriaXY } from "../datafileObjects.js";
bacteriaXY.bacteria1 = bacteria1;
// ----------------------------------------------------------------------

// Drops Selector -----------------------------------------------------------
const dropLoc = [];
for(let i=0; i<25; i++){
  dropLoc.push([getRandomArbitrary(120, 340), getRandomArbitrary(80, 260)])
}
// const dropLoc = [[100,150], [120, 80], [220, 30], [340, 80], [370, 150], [340, 260], [220, 310]];
const dropOptions = ['microDrops.png', 'microDrops1.png', 'microDrops2.png'];
const dropArr = [];
dropLoc.forEach((loc, index)=>{
  let dropImg = new Image();  
  let num = getRandomInt(dropOptions.length);
  dropImg.src = "../assets/" + dropOptions[num];
  dropArr[index] = [dropImg, loc[0], loc[1]];
  // console.log(dropArr);
})

// --------------------------------------------------------------------------

// Main Logic body---------------------------------------------------------
let initAnime4Count = 0, moveBact = true;
const
  cheight = [0, true], cwidth = [0, true],
  cX = [0, true], cY = [0, true];

if (bactName != 'bacteria.png') {
  bacteriaXY.arcColor = "white";
}

if (bactName == 'bacteria3.png') {
  moveBact = false;
  bacteriaXY.x = 138 * canvasXY.xRatio;
  bacteriaXY.y = 105 * canvasXY.yRatio;
  bacteriaXY.width = 250 * canvasXY.xRatio;
  bacteriaXY.height = 220 * canvasXY.yRatio;
}


function initAnime4() {

  initAnime4Count++;
  canvasXY.clearCanvas();

  //Logic for moving Bacteria
  function moveBactLoc() {

    //Changing Height
    cheight[0] = getRandomArbitrary(2, 6);
    if (bacteriaXY.height - cheight[0] < 85 * canvasXY.yRatio || bacteriaXY.height + cheight[0] > 118 * canvasXY.yRatio) {
      cheight[1] = !(cheight[1]);
    }
    else {
      if (cheight[1]) {
        bacteriaXY.height -= cheight[0] * 0.08 * canvasXY.yRatio;
      }
      else {
        bacteriaXY.height += cheight[0] * bacteriaXY.unity * 0.09 * canvasXY.yRatio;
      }
    }

    //Changing Width
    cwidth[0] = getRandomArbitrary(2, 6);
    if (bacteriaXY.width - cheight[0] < 100 * canvasXY.xRatio || bacteriaXY.width + cwidth[0] > 110 * canvasXY.xRatio) {
      cwidth[1] = !(cwidth[1]);
    }
    else {
      if (cwidth[1]) {
        bacteriaXY.width -= cwidth[0] * 0.08 * canvasXY.xRatio;
      }
      else {
        bacteriaXY.width += cwidth[0] * bacteriaXY.unity * 0.09 * canvasXY.xRatio;
      }
    }

    //Changing X
    cX[0] = getRandomArbitrary(2, 6);
    if (bacteriaXY.x - cX[0] < 180 * canvasXY.xRatio || bacteriaXY.x + cX[0] > 240 * canvasXY.xRatio) {
      cX[1] = !(cX[1]);
    }
    else {
      if (cX[1]) {
        bacteriaXY.x -= cX[0] * 0.08 * canvasXY.xRatio;
      }
      else {
        bacteriaXY.x += cX[0] * bacteriaXY.unity * 0.09 * canvasXY.xRatio;
      }
    }

    //Changing Y
    cY[0] = getRandomArbitrary(2, 6);
    if (bacteriaXY.y - cY[0] < 120 * canvasXY.yRatio || bacteriaXY.y + cY[0] > 230 * canvasXY.yRatio) {
      cY[1] = !(cY[1]);
    }
    else {
      if (cY[1]) {
        bacteriaXY.y -= cY[0] * 0.08 * canvasXY.yRatio;
      }
      else {
        bacteriaXY.y += cY[0] * bacteriaXY.unity * 0.09 * canvasXY.yRatio;
      }
    }
  }

  if (moveBact) moveBactLoc();
  bacteriaXY.renderBacteria();  
  // bacteriaXY.renderMicroDrops();
  dropArr.forEach((drop)=>{
    bacteriaXY.renderMicroDrops(drop[0], drop[1], drop[2])
  })
  bacteriaXY.renderArc();
  bacteriaXY.renderBlackCanvas();
  // console.log("initAnime4...");
  if (initAnime4Count < 950) {
    requestFrame(initAnime4);
  }
}

export { initAnime4, expBactName }
// Logic Body Ends--------------------------------------------------------

// requestFrame(initAnime4);