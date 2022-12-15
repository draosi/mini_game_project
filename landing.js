// Home page control
const test = document.getElementById("testbutton");
// Music control

// Opening pop-up control

const instructionPopUp = document.querySelector("#navigation");
const instructionButton = document.getElementById("button-instructions");
const rulesPopUp = document.querySelector("#rules");
instructionButton.onclick = () => {
  instructionPopUp.style.visibility = "visible";
  rulesPopUp.style.visibility = "hidden";
};

// Closing pop-up control

const closingInstructionsButton = document.querySelector("#close-instructions");
closingInstructionsButton.onclick = () => {
  instructionPopUp.style.visibility = "hidden";
};

// Rules opening control
const rulesButton = document.querySelector("#button_rules");
const rulesClosingPopUp = document.querySelector("#close-instructions-rules");

rulesButton.onclick = () => {
  instructionPopUp.style.visibility = "hidden";
  rulesPopUp.style.visibility = "visible";
};
rulesClosingPopUp.onclick = () => {
  rulesPopUp.style.visibility = "hidden";
};
/* 
// Rules pop up control 
const closingInstructionsButton = document.querySelector('#close-instructions')
closingInstructionsButton.onclick = () => {
    instructionPopUp.style.visibility='hidden';
  }; */

//Sound control
// const soundButtonLanding = document.querySelector("#soundControl");
// const soundHidden = document.querySelector("#landingSound");
// soundButtonLanding.addEventListener("click", () => {});
/* 
const audioImg = document.querySelector(".button-instruction");
const audio = document.querySelector("audio");

audio.autoplay();

audioImg.onclick = () => {
  audio.play();
}; */

//instructionButton.addEventListener("click", function(){

//instructionButton.classList.remove('visible')
//})

//instructionButton.onclick() ={

//if(instructionPopUp.style.visibility === "hidden")
// {
// instructionPopUp.style.visibility = "visible";
//}
//});
