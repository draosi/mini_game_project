// Home page control

// Music control

//Sound control
// const soundButtonLanding = document.querySelector("#soundControl");
// const soundHidden = document.querySelector("#landingSound");
// soundButtonLanding.addEventListener("click", () => {});

const audioImg = document.querySelector('.button-instruction')
const audio = document.querySelector('audio')

audio.autoplay()

audioImg.onclick= () => {
    audio.play()
}

// Closing pop-up control

const instructionPopUp = document.querySelector('#div-instructions');
const instructionButton = document.querySelector('#button-instructions')

//instructionButton.addEventListener("click", function(){  
  
    //instructionButton.classList.remove('visible')
   //})


//instructionButton.onclick() ={


    //if(instructionPopUp.style.visibility === "hidden")
   // {
       // instructionPopUp.style.visibility = "visible";
      //}
    //});
    