import { requestFrame } from "./datafileObjects.js";
import { initAnime1, beakerTranslatesY } from "./new.js";
import { initAnime2, beakerMovesYX } from "./new1.js";
import { initAnime3, moveDropperUp, moveSlides } from "./new2.js";
import { initAnime4, expBactName } from "./new3.js";

// Query Selectors============================================================
const btnCollectWater = document.querySelector("#task1");
const btnFilter = document.querySelector('#task2');
const dropWater = document.getElementById("task3a");
const takeToMicroScope = document.getElementById("task3b");
const dispText = document.querySelector(".message ");

//Btn transitions for enabling and disabling with border====================================
let btn = [btnCollectWater, btnFilter, dropWater, takeToMicroScope];
const controlAnimeBtnArray = [false, false, false, false];
const addClass = ['border-5', 'border-dark'];

const controlAnimeBtnFunc = () => {
  for (let i = 0; i < btn.length; i++) {
    if (controlAnimeBtnArray[i] == false) {
      btn[i].disabled = true;
      for (let classes = 0; classes < addClass.length; classes++) {
        btn[i].classList.remove(addClass[classes]);
      }
    }
    else {
      for (let classes = 0; classes < addClass.length; classes++) {
        btn[i].classList.add(addClass[classes]);
      }
      btn[i].disabled = false;
    }
  }
}

const disableBtnIndex = (index, bool) => {
  controlAnimeBtnArray[index] = bool;
}

// Main pre init function call mechanism=============================================
const controlAnimationFunc = num => {
  switch (num) {
    case 0:
      requestFrame(initAnime1);
      controlAnimeBtnFunc();
      //First controlAnimeBtnFunc() is called after timeout of last statement
      break;

    case 1:
      requestFrame(initAnime2);
      // controlAnimeBtnFunc();      
      break;

    case 2:
      requestFrame(initAnime3);
      // controlAnimeBtnFunc();
      break;

    case 3:
      requestFrame(initAnime4);
      controlAnimationFunc();
      // controlAnimeBtnFunc();
      break;

    // default:
    // console.log("There is Some Error, Hailing From Switch Case!"); break;
  }
}


// Message Control=============================================================

const dispMessage = (message) => {
  dispText.innerHTML = message;
}

//Initial Messages Before First Animation
dispMessage("Welcome to <strong>Virtual Labs!</strong>");
setTimeout(() => {
  dispMessage("Let's Begin The <strong>Experiment...</strong>");
}, 3000);


setTimeout(() => {
  dispMessage("Follow The <strong>Buttons</strong> For Experiment");
}, 6000);


setTimeout(() => {
  dispMessage("Let's Collect <strong>Pond Water</strong> For Observation!");
  disableBtnIndex(0, true);
  controlAnimeBtnFunc();
}, 9000);
// -----------------------------------------------------------------------

//ALL STEPS FOR PROCESS ========================================================

controlAnimationFunc(0); ///init call func1

btnCollectWater.addEventListener("click", function () { //btn1 press

  requestFrame(beakerTranslatesY);//Request first button animation to activate
  dispMessage("Collecting Water from Pond..."); //Animation Play Message 
  btnCollectWater.disabled = true; // Sets that button to disable during animation
  disableBtnIndex(0, false); //Sets its index to false to keep it disabled during other anime
  controlAnimeBtnFunc();//All buttons are off here and border is removed

  setTimeout(() => { //Timeout for function to finish animation 

    controlAnimationFunc(1); //Call that animation in switch case
    dispMessage("It Seems That Water is Turbid...");

    setTimeout(() => {
      disableBtnIndex(1, true); //Enable next button with the rendering of next static animation
      controlAnimeBtnFunc(); //Activate the next button and add border
      dispMessage("Let's Filter Water Through A <strong>Muslin Cloth</strong>");//Instructioon for next animation
    }, 3500);

  }, 6500); //time set for 6.5s(Calculated)
});

{/* <strong></strong> */ }
btnFilter.addEventListener("click", () => { //btn2 press Animation 2
  requestFrame(beakerMovesYX);
  dispMessage("<strong>Filtering</strong> Water...");
  btnFilter.disabled = true;
  disableBtnIndex(1, false);
  controlAnimeBtnFunc();
  setTimeout(() => {
    controlAnimationFunc(2);
    dispMessage("Water is now <strong>Filtered Out</strong>. Let's Check it under <strong>Microscope!</strong>");
    setTimeout(() => {
      disableBtnIndex(2, true);
      controlAnimeBtnFunc();
      dispMessage("First Take A Drop Of Water onto the Cover Glass!");
    }, 4000)
  }, 8500);
});


dropWater.addEventListener("click", () => { //Animation 3 part 1

  requestFrame(moveDropperUp);
  dispMessage("Make Sure There are <strong>No Bubbles</strong> while covering it with Cover Glass!");
  dropWater.disabled = true;
  disableBtnIndex(2, false);
  controlAnimeBtnFunc();

  setTimeout(() => {
    dispMessage("Let's Place Cover Glass Under <strong>Compound Microscope</strong> to view!");
    setTimeout(() => {
      disableBtnIndex(3, true);
      controlAnimeBtnFunc();
      // controlAnimationFunc(2);
    }, 3000);
  }, 7500);
});

takeToMicroScope.addEventListener("click", () => { //Animation 3 part 2
  requestFrame(moveSlides);
  takeToMicroScope.disabled = true;
  disableBtnIndex(3, false);
  setTimeout(() => {
    // disableBtnIndex(3, true);
    controlAnimationFunc(3);
    controlAnimeBtnFunc();
    dispMessage("Bacteria Found: " + expBactName + "<br>Though Water Appears To be <strong>Clean To Naked Eyes</strong>");

    setTimeout(() => {
      dispMessage("Bacteria Found: " + expBactName + "<br><strong>Different Kinds Of Micro-Organisms</strong> are present In Water!");
    }, 4000);
    setTimeout(() => {
      dispMessage("Bacteria Found: " + expBactName + "<br>As We Can See Here, <strong>" + expBactName + "</strong> is present in our filtered Water!");
    }, 10000);
    setTimeout(() => {
      dispMessage("<strong>Thank You!</strong> For Viewing..<br><strong>We Hope You Have Understood The Experiment!</strong>");
    }, 16000);
    // setTimeout(()=>{
    //   dispMessage("<strong>We Hope You Have Understood The Experiment!</strong>");
    // },18000);
  }, 5000);
});

// --------------------------------------------------------------------

