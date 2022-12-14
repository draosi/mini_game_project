const cards = [
  { name: "Pikachu", img: "Pikachu.png" },
  { name: "Dracaufeu", img: "Dracaufeu.png" },
  { name: "Leviator", img: "Leviator.png" },
  { name: "Florizarre", img: "Florizarre.png" },
  { name: "Mewtwo", img: "Mewtwo.jpeg" },
  { name: "Ronflex", img: "Ronflex.png" },
  { name: "Voltali", img: "Voltali.png" },
  { name: "Dracolosse", img: "Dracolosse.png" },
  { name: "Mew", img: "Mew.png" },
  { name: "Aquali", img: "Aquali.png" },
  { name: "Pyroli", img: "Pyroli.png" },
  { name: "Lokhlass", img: "Lokhlass.png" },
  { name: "Pikachu", img: "Pikachu.png" },
  { name: "Dracaufeu", img: "Dracaufeu.png" },
  { name: "Leviator", img: "Leviator.png" },
  { name: "Florizarre", img: "Florizarre.png" },
  { name: "Mewtwo", img: "Mewtwo.jpeg" },
  { name: "Ronflex", img: "Ronflex.png" },
  { name: "Voltali", img: "Voltali.png" },
  { name: "Dracolosse", img: "Dracolosse.png" },
  { name: "Mew", img: "Mew.png" },
  { name: "Aquali", img: "Aquali.png" },
  { name: "Pyroli", img: "Pyroli.png" },
  { name: "Lokhlass", img: "Lokhlass.png" },
];

// Function mili to min-sec
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToMinutesSeconds(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.round((milliseconds % 60000) / 1000);

  return seconds === 60
    ? `${minutes + 1}:00`
    : `${minutes}:${padTo2Digits(seconds)}`;
}

//convertMsToMinutesSeconds(180000); 
const milliToSec = (milliseconds) => {
  const newSecond = Math.floor(milliseconds / 1000)
  return newSecond
}


const pokemem = new PokeMem(cards);
pokemem.shuffleCards();

const pokeBoard = document.querySelector("#poke-board");
pokeBoard.style.zIndex = -1;

/* lvlOne */

const closeLevelPopUp = document.querySelector("#closeLevel");
const lvlPopUp = document.querySelector("#lvl");
closeLevelPopUp.onclick = () => {
  lvlPopUp.style.visibility = "hidden";
  pokeBoard.style.zIndex = 1;
};




// level choose

const whichLvl = document.querySelectorAll(".lvlNumber");

/* whichLvl[0].onclick = () => console.log(whichLvl[0].textContent)
whichLvl[1].onclick = () => console.log(whichLvl[1].textContent)
whichLvl[2].onclick = () => console.log(whichLvl[2].textContent)
whichLvl[3].onclick = () => console.log(whichLvl[3].textContent) */
let testNumber = 1
whichLvl.forEach(lvl => lvl.onclick = () => {
  testNumber = Number(lvl.textContent)
  let control = 0
  lvlPopUp.style.visibility = "hidden";
  pokeBoard.style.zIndex = 1;

   // If user chose LVL 2
      if(testNumber == 1){
        
      }
      else 
      if (testNumber == 2) {
      setTimeout(gameOver, 180000)
        
      
        //let timerLvl2 = convertMsToMinutesSeconds(180000)
        if(control== 0){

          let countMili = 180000
          let count = milliToSec(countMili)
          const updateTime = ()=> {    
            if(count == 0){
              stopTimer()
            }
            count -- 
            let secToMilli = count *1000
          let timerSelector = document.querySelector('#timer')
          timerSelector.innerHTML = convertMsToMinutesSeconds(secToMilli)
          
        }
         const timer = setInterval(
          updateTime
         /*  if(timer == 0){
            clearInterval(timer)
          } */
          
         ,1000)
         
          control ++
         } }
        
  else if (testNumber == 3){
    setTimeout(gameOver, 90000);
    //let timerLvl2 = convertMsToMinutesSeconds(180000)
    if(control== 0){
      let countMili = 90000
      let count = milliToSec(countMili)
      const updateTime = ()=> {    
        count -- 
        let secToMilli = count *1000
      let timerSelector = document.querySelector('#timer')
      timerSelector.innerHTML = convertMsToMinutesSeconds(secToMilli)
    }
      setInterval(updateTime,1000)
      control ++
      }
    }
  
   else if (testNumber == 4){
    
    const pair = pokemem.pairsClicked
    console.log(pair)
      if( pair > 4){
       
        gameOver()
      }
    }
 /*    const pairsClicked = document.querySelector("#pairs-clicked");
    pairsClicked.innerHTML = pokemem.pairsClicked;
 */

})

const stopTimer = () => {
  clearInterval(timer)
}





/* const whichLvlClicked = whichLvl.onclick = () => {
  console.log(whichLvl.textContent)
}
 */

/* 
whichLvlClicked.forEach((element) => {
  element.onclick = (event) => {
    event.target.value;
  };
}); */
/* ∞ */

/* , 3, 4; */
/* LVL 2 */

const gameOver = () => {
  const lost = document.querySelector("#loseState")
  lost.style.visibility = 'visible'
  pokeBoard.style.zIndex = -1;

  lost.onclick = () =>{
    lost.style.visibility = 'hidden'
    pokeBoard.style.zIndex = 1;
    replay()
  }

  const replayButton = document.querySelector("#loseReplay");
  replayButton.onclick = () => {
    pokeBoard.style.zIndex = 1;
    replay();
  };
}













window.addEventListener("load", (event) => {
  let html = "";
  pokemem.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat; background-size : cover";></div>
      </div>
    `;
  });

  document.querySelector("#poke-board").innerHTML = html;
  /* Cette fonction fait en sorte que lorsque l'on clique sur une seule carte, cette dernière
   obtient la class "turned" qui permet à une carte de resté tourné coté visible */
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (
        !card.classList.contains("blocked") &&
        pokemem.pickedCards.length < 2
      ) {
        card.classList.toggle("turned");
        pokemem.pickedCards.push(card);
      }
      /* Ici nous limitons à 2 le nombre de carte pouvant être retourné simultanément */
      const checkToCard = () => {
        return pokemem.pickedCards.length == 2;
      };

      /* Ici nous ajoutons la fonction qui permettra de "bloquer" les paires de cartes coté visible 
   lorsqu'elles sont similaire, ou de les retrouner si elles ne le sont pas. Et nous faisons apparaitre 
   une fenetre lorsque le joueur trouve toutes les paires en ajoutant un setTimeout d'une seconde 
   permettant a la derniere carte d'apparaitre avant. */
      if (checkToCard()) {
        let card1 = pokemem.pickedCards[0].dataset.cardName;
        let card2 = pokemem.pickedCards[1].dataset.cardName;

        if (pokemem.checkIfPair(card1, card2)) {
          let blockedCard = document.querySelectorAll(".turned");
          blockedCard.forEach((element) => {
            element.classList.add("blocked");
          });
          const pairsGuessed = document.querySelector("#pairs-guessed");
          pairsGuessed.innerHTML = pokemem.pairsGuessed;
          pokemem.pickedCards = [];
          setTimeout(() => {
            if (pokemem.checkIfFinished()) {
              pokeBoard.style.zIndex = -1;

              const finishedPopUp = document.querySelector("#winState");
              finishedPopUp.style.visibility = "visible";
              /* replay  */
              const replayButton = document.querySelector(".replay");
              replayButton.onclick = () => {
                replay();
              };
              /* Closing popup */
              const finishedPopUpButton = document.getElementById("closeWin");
              /* const pokeBoard = document.querySelector("#poke-board"); */

              finishedPopUpButton.onclick = () => {
                finishedPopUp.style.visibility = "hidden";
                pokeBoard.style.zIndex = 1;
              };
            }
          }, 1000);
        } else {
          const returnCards = () => {
            setTimeout(() => {
              let turn = document.querySelectorAll(".turned:not(.blocked)");
              turn.forEach((card) => {
                card.classList.toggle("turned");
              });
              pokemem.pairsClicked.textContent = pokemem.pairsClicked;
              pokemem.pickedCards = [];
            }, 1000);
          };
          const pairsClicked = document.querySelector("#pairs-clicked");
          pairsClicked.innerHTML = pokemem.pairsClicked;
          returnCards();
        }
      }
    });
  });
});
const replay = () => location.reload();
const start = document.querySelector("#start");
start.onclick = () => {
  replay();
};

/* LEVEL */
/* const levelArray = [1,2,3,4,5] */

/* Page reload function to restart the game */
/* */

/* Credits when the player qui the game */
