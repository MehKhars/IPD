let ctx = document.getElementById('canvas').getContext('2d');
ctx.globalCompositeOperation = 'destination-over';

//For new.js==========================================
let lakeImg = new Image();
let beakerImg = new Image();
let beakerHand = new Image();
lakeImg.src = 'assets/lake.jpg';
beakerImg.src = 'assets/big_beaker.png';
beakerHand.src = 'assets/beakerHand.png';
//----------------------------------------

//For new1.js=============================================
let bottleImg = new Image();
let bgImg = new Image();
let beakerHand1 = new Image();
//beakerImg used here also
bottleImg.src = 'assets/bottle_vlab.svg';
bgImg.src = 'assets/Bg.jpg';
beakerHand1.src = 'assets/beakerHand1.png';
//----------------------------------------

//For new2.js============================================
let bottle = new Image(); //Different bottle than the one in index1
let dropper = new Image();
let dropperHand = new Image()
let drop = new Image();
let slide1 = new Image();
let slide2 = new Image();
let slideHand = new Image();
let microScope = new Image();
let bg = new Image();
bottle.src = "../assets/bottle.png";
drop.src = "../assets/drop.png";
dropper.src = "../assets/dropper.png";
dropperHand.src = "../assets/dropperHand.png"
slide1.src = "../assets/Slide.png";
slide2.src = "../assets/Slide.png";
slideHand.src = "../assets/slideHand.png";
microScope.src = "../assets/Microscope.png";
bg.src = 'assets/Bg.jpg';
//----------------------------------------

//For new3.js==================================
// Asset links are inside new3.js
let circle = new Path2D();
let microDrops = new Image();
microDrops.src = "../assets/microDrops1.png";
//----------------------------------------

//Common canvas and requestFrame data ===========================
let canvasXY = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
  ox: 0,
  oy: 0,
  xRatio: canvas.width / 472,
  yRatio: canvas.height / 368,
  clearCanvas: () => {
    ctx.clearRect(canvasXY.x, canvasXY.y, canvasXY.width, canvasXY.height);
  },
  renderLake: () => {
    ctx.drawImage(lakeImg, canvasXY.x, canvasXY.y, canvasXY.width, canvasXY.height);
  },
  renderBg: () => {
    ctx.drawImage(bgImg, canvasXY.x, canvasXY.y, canvasXY.width, canvasXY.height);
  }
}

const requestFrame = frame => {
  window.requestAnimationFrame(frame);
}

//------------------------------------------

// ANIMATION 1 DATA (beakerXY, waterXY)==========================

let beakerXY = {
  x: canvasXY.xRatio * 280,
  y: canvasXY.yRatio * 160,
  width: canvasXY.xRatio * 60,
  height: canvasXY.yRatio * 65,
  dx: canvasXY.xRatio * 0,
  dy: canvasXY.yRatio * 1,
  deg: 0.01,
  yCount: 0,
  renderBeaker: () => {
    ctx.drawImage(beakerImg, beakerXY.x, beakerXY.y, beakerXY.width, beakerXY.height);
  }
}

let waterXY = { //OG cordinates 180, 280
  x: canvasXY.xRatio * 289.7,
  y: canvasXY.yRatio * 280,
  width: canvasXY.xRatio * 40,
  height: canvasXY.yRatio * 43,
  dw: 0,
  dh: 1,
  renderWater: (x = waterXY.x, y = waterXY.y, w = waterXY.width, h = waterXY.height) => {
    ctx.fillStyle = 'rgba(72, 185, 189, 0.5)';
    ctx.fillRect(x, y, w, h);
  }
}

let beakerHandXY = {
  x: canvasXY.xRatio * 245,
  y: canvasXY.yRatio * 90,
  width: canvasXY.xRatio * 225,
  height: canvasXY.yRatio * 93,
  dx: canvasXY.xRatio * 0,
  dy: canvasXY.yRatio * 1,
  dw: 0,
  dh: 1,
  renderHand: () => {
    ctx.drawImage(beakerHand, beakerHandXY.x, beakerHandXY.y, beakerHandXY.width, beakerHandXY.height);
  }
}
//----------------------------------------

// ANIMATION 2 DATA (beakerXY1, bottleXY1, waterXY1)=======================================

const beakerXY1 = {
  x: canvasXY.xRatio * 300,
  y: canvasXY.yRatio * 200,
  width: canvasXY.xRatio * 90,
  height: canvasXY.yRatio * 95,
  dx: canvasXY.xRatio * 1,
  dy: canvasXY.yRatio * 1,
  rotateValX: canvasXY.xRatio * 220,
  rotateValY: canvasXY.yRatio * 150,
  renderBeaker1: () => {
    ctx.drawImage(beakerImg, beakerXY1.x, beakerXY1.y, beakerXY1.width, beakerXY1.height);
  },
  rotateBeaker: (arg) => {
    ctx.save();
    ctx.translate(beakerXY1.rotateValX, beakerXY1.rotateValY);
    ctx.rotate(-((arg) * Math.PI / (2 * 40)));
    ctx.translate(-beakerXY1.rotateValX, -beakerXY1.rotateValY);
    beakerXY1.renderBeaker1();
    ctx.save();
    ctx.restore();
    ctx.restore();
  }
}

let beakerHandXY1 = {
  x: canvasXY.xRatio * 360,
  y: canvasXY.yRatio * 190,
  width: canvasXY.xRatio * 100,
  height: canvasXY.yRatio * 285,
  dx: canvasXY.xRatio * 1,
  dy: canvasXY.yRatio * 1,
  rotateValX: canvasXY.xRatio * 220,
  rotateValY: canvasXY.yRatio * 150,
  renderHand: () => {
    ctx.drawImage(beakerHand1, beakerHandXY1.x, beakerHandXY1.y, beakerHandXY1.width, beakerHandXY1.height);
  },
  rotateHand: (arg) => {
    ctx.save();
    ctx.translate(beakerHandXY1.rotateValX, beakerHandXY1.rotateValY);
    ctx.rotate(-((arg) * Math.PI / (2 * 40)));
    ctx.translate(-beakerHandXY1.rotateValX, -beakerHandXY1.rotateValY);
    beakerHandXY1.renderHand();
    ctx.save();
    ctx.restore();
    ctx.restore();
  }
}

let bottleXY1 = {
  x: canvasXY.xRatio * 0, //(150, 200, 50, 95)
  y: canvasXY.yRatio * 70,
  width: canvasXY.xRatio * 350,
  height: canvasXY.yRatio * 335,
  renderBottle1: () => {
    ctx.drawImage(bottleImg, bottleXY1.x, bottleXY1.y, bottleXY1.width, bottleXY1.height);
  }
}

let waterXY1 = {
  x: canvasXY.xRatio * 312,
  y: canvasXY.yRatio * 255,
  width: canvasXY.xRatio * 62,
  height: canvasXY.yRatio * 37,
  dx: canvasXY.xRatio * 1,
  dy: canvasXY.yRatio * 1,
  color: 'rgba(72, 185, 189, 0.3)',
  renderWater1: (x = waterXY1.x, y = waterXY1.y, w = waterXY1.width, h = waterXY1.height, color = waterXY1.color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }
}

// ---------------------------------------

// ANIMATION 3 DATA (bottleXY, dropperXY, slide1XY, slide2XY, microScopeXY, water2XY)===========

let bottleXY = {
  x: canvasXY.width / 4,
  y: canvasXY.height / (1.9),
  width: canvasXY.xRatio * (50),
  height: canvasXY.yRatio * (95),
  renderBottle: () => {
    ctx.drawImage(bottle, bottleXY.x, bottleXY.y, bottleXY.width, bottleXY.height);
  }
}

let dropperXY = {
  x: canvasXY.xRatio * (138),
  y: canvasXY.yRatio * (172),
  width: canvasXY.xRatio * 10,
  height: canvasXY.yRatio * 55,
  dx: 1,
  dy: 1,
  renderDropper: () => {
    ctx.drawImage(dropper, dropperXY.x, dropperXY.y, dropperXY.width, dropperXY.height);
  }
}

let dropperHandXY = {
  x: canvasXY.xRatio * (78),
  y: canvasXY.yRatio * (110),
  width: canvasXY.xRatio * 100,
  height: canvasXY.yRatio * 95,
  dx: 1,
  dy: 1,
  renderHand: () => {
    ctx.drawImage(dropperHand, dropperHandXY.x, dropperHandXY.y, dropperHandXY.width, dropperHandXY.height);
  }
}

let slide1XY = {
  x: canvasXY.xRatio * (178), //178
  y: canvasXY.yRatio * (273), //273
  width: canvasXY.xRatio * 50,
  height: canvasXY.yRatio * 12,
  dx: 1,
  dy: 1,
  renderSlide1: () => {
    ctx.drawImage(slide1, slide1XY.x, slide1XY.y, slide1XY.width, slide1XY.height);
  }
}
//New Co-ordinates: 220,271

let slide2XY = {
  x: canvasXY.xRatio * (218), //218
  y: canvasXY.yRatio * (273), //273
  width: canvasXY.xRatio * 50,
  height: canvasXY.yRatio * 12,
  dx: 1,
  dy: 1,
  renderSlide2: () => {
    ctx.drawImage(slide2, slide2XY.x, slide2XY.y, slide2XY.width, slide2XY.height);
  }
}
//New Co-ordinates: 328,223

let slideHandXY = {
  x: canvasXY.xRatio * (138), //218
  y: canvasXY.yRatio * (213), //273
  width: canvasXY.xRatio * 130,
  height: canvasXY.yRatio * 72,
  dx: 1,
  dy: 1,
  renderHand: () => {
    ctx.drawImage(slideHand, slideHandXY.x, slideHandXY.y, slideHandXY.width, slideHandXY.height);
  }
}

let microScopeXY = {
  x: canvasXY.xRatio * 290,
  y: canvasXY.yRatio * (100),
  width: canvasXY.xRatio * 180,
  height: canvasXY.yRatio * 200,
  renderMicroscope: () => {
    ctx.drawImage(microScope, microScopeXY.x, microScopeXY.y, microScopeXY.width, microScopeXY.height);
  }
}

let water2XY = {
  x: canvasXY.xRatio * (118),
  y: canvasXY.yRatio * (228),
  width: canvasXY.xRatio * (49.5),
  height: canvasXY.yRatio * (59.1),
  color: 'rgba(72, 185, 189, 0.8)',
  dropX: canvasXY.xRatio * (247),
  dropY: canvasXY.yRatio * (237),
  renderWater: () => {
    ctx.fillStyle = water2XY.color;
    ctx.fillRect(water2XY.x, water2XY.y, water2XY.width, water2XY.height);
  },
  renderDrop: () => {
    ctx.drawImage(drop, water2XY.dropX, water2XY.dropY, 5 * canvasXY.xRatio, 10 * canvasXY.yRatio);
  }
}
// ---------------------------------------

// Animation 4 Data (bacteriaXY)=======================================================

const bacteriaXY = {
  x: canvasXY.width / 2,
  y: canvasXY.height / 2,
  radius: canvasXY.height / 2 - 15 * canvasXY.yRatio,
  width: 92 * canvasXY.xRatio,
  height: 88 * canvasXY.yRatio,
  unity: 1,
  arcColor: 'rgba(225, 246, 247, 1)',
  bacteria1: '',
  renderArc: () => {
    circle.arc(canvasXY.width / 2, canvasXY.height / 2, bacteriaXY.radius, 0, Math.PI * 2);
    ctx.fillStyle = bacteriaXY.arcColor;
    ctx.fill(circle);
  },
  renderBacteria: () => {
    ctx.drawImage(bacteriaXY.bacteria1, bacteriaXY.x - 30 * canvasXY.xRatio, bacteriaXY.y - 30 * canvasXY.yRatio, bacteriaXY.width, bacteriaXY.height);
  },
  renderMicroDrops: (img = microDrops, x = 100, y = 100, width = 20, height = 20)=>{
    ctx.drawImage(img, x * canvasXY.xRatio, y * canvasXY.yRatio, width * canvasXY.xRatio, height * canvasXY.yRatio)
  },
  renderBlackCanvas: () => {
    ctx.beginPath();
    ctx.rect(canvasXY.x, canvasXY.y, canvasXY.width, canvasXY.height);
    ctx.fillStyle = "rgba(45, 46, 45, 0.92)";
    ctx.fill();
  }
}
// ----------------------------------------------------------------------------

// Export ===============================================================================
export { requestFrame, canvasXY, beakerXY, waterXY, beakerHandXY, beakerXY1, beakerHandXY1, bottleXY1, waterXY1, bottleXY, dropperXY, dropperHandXY, slide1XY, slide2XY, slideHandXY, microScopeXY, water2XY, bacteriaXY };
// -------------------------------------------------------------------------------------
