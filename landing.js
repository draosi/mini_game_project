// Home page control
const test = document.getElementById("testbutton");
// Music control


// Opening pop-up control

const instructionPopUp = document.querySelector("#navigation");
const instructionButton = document.getElementById("button-instructions");
instructionButton.onclick = () => {
  instructionPopUp.style.visibility='visible';
};



// Closing pop-up control

const closingInstructionsButton = document.querySelector('#close-instructions')
closingInstructionsButton.onclick = () => {
    instructionPopUp.style.visibility='hidden';
  };
  



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
