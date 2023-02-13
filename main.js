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

// Timer formating
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

// Function to convert millisconds to minutes
function convertMsToMinutesSeconds(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.round((milliseconds % 60000) / 1000);

  return seconds === 60
    ? `${minutes + 1}:00`
    : `${minutes}:${padTo2Digits(seconds)}`;
}

// Function to convert milliseconds to second
const milliToSec = (milliseconds) => {
  const newSecond = Math.floor(milliseconds / 1000);
  return newSecond;
};

// New object creation based on Pokemem class 
const pokemem = new PokeMem(cards);

// Cards Shuffle
pokemem.shuffleCards();

// Poke Board depth at -1 (set in the background)
const pokeBoard = document.querySelector("#poke-board");
pokeBoard.style.zIndex = -1;

//Level pop-up
const closeLevelPopUp = document.querySelector("#closeLevel");
const lvlPopUp = document.querySelector("#lvl");
closeLevelPopUp.onclick = () => {
  lvlPopUp.style.visibility = "hidden";
  pokeBoard.style.zIndex = 1;
};

// The user chooses the level by clicking on any number inside the level popup
const whichLvl = document.querySelectorAll(".lvlNumber");
let testNumber
whichLvl.forEach(
  (lvl) =>
    (lvl.onclick = () => {
      testNumber = Number(lvl.textContent);
      let control = 0;
      lvlPopUp.style.visibility = "hidden";
      pokeBoard.style.zIndex = 1;

      // Condition based on if user chooses LVL 1
      if (testNumber == 1) {
      }

      // Condition based on if user chooses LVL 2
      else if (testNumber == 2) {
        // 3 minutes condition timer to complete the game
        setTimeout(180000);
        if (control == 0) {
          let countMili = 180000;
          let count = milliToSec(countMili);
          const updateTime = () => {
            if (count == 0) {
              // If the time is elapsed, the player looses
              clearInterval(timer);
              gameOver();
            } else if (pokemem.checkIfFinished()) {
              // If all the pairs are found, the timer stops
              clearInterval(timer);
            } else {
              // If the player is playing, the timer is decreamenting every second
              count--;
              let secToMilli = count * 1000;
              let timerSelector = document.querySelector("#timer");
              timerSelector.innerHTML = convertMsToMinutesSeconds(secToMilli);
            }
          };
          // Timer update : calls updateTime every second untill pokemon.checkIfFinished() is true
          const timer = setInterval(updateTime, 1000);
          control++;
        }
      }

      // Condition based on if user chooses LVL 3
      else if (testNumber == 3) {
        // A minute an a half to complete the game
        setTimeout(90000);
        if (control == 0) {
          let countMili = 90000;
          let count = milliToSec(countMili);
          const updateTime = () => {
            if (count == 0) {
              clearInterval(timer);
              gameOver();
            } else if (pokemem.checkIfFinished()) {
              clearInterval(timer);
            } else {
              count--;
              let secToMilli = count * 1000;
              let timerSelector = document.querySelector("#timer");
              timerSelector.innerHTML = convertMsToMinutesSeconds(secToMilli);
            }
          };
          const timer = setInterval(updateTime, 1000);
          control++;
        }
      }

      // If user choose LVL 4
      else if (testNumber == 4) {
        // 30 seconds to win the game
        setTimeout(30000);
        if (control == 0) {
          let countMili = 30000;
          let count = milliToSec(countMili);
          const updateTime = () => {
            if (count == 0) {
              clearInterval(timer);
              gameOver();
            } else if (pokemem.checkIfFinished()) {
              clearInterval(timer);
            } else {
              count--;
              let secToMilli = count * 1000;
              let timerSelector = document.querySelector("#timer");
              timerSelector.innerHTML = convertMsToMinutesSeconds(secToMilli);
            }
          };
          const timer = setInterval(updateTime, 1000);
          control++;
        }
      }
    })
);


// Game over function
const gameOver = () => {
  const lost = document.querySelector("#loseState");
  lost.style.visibility = "visible";
  pokeBoard.style.zIndex = -1;

  lost.onclick = () => {
    lost.style.visibility = "hidden";
    pokeBoard.style.zIndex = 1;
    replay();
  };

  const replayButton = document.querySelector("#loseReplay");
  replayButton.onclick = () => {
    pokeBoard.style.zIndex = 1;
    replay();
  };
};

// Add the cards to the HTML page
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

  // Add the arena to the HTML
  document.querySelector("#poke-board").innerHTML = html;

  // Once you click on a card, it adds the class '.turned' to it --> allows the card to stay on the pokemon side
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (
        !card.classList.contains("blocked") &&
        pokemem.pickedCards.length < 2
      ) {
        card.classList.toggle("turned");
        pokemem.pickedCards.push(card);
      }
      // Only 2 cards can be on their pokemon side at the same time
      const checkToCard = () => {
        return pokemem.pickedCards.length == 2;
      };

      // If 2 cards are the same --> they remains visible (Pokemon side up)
      // If 2 cards aren't the same --> they turns back to their hidden state (backside of the card)
      // Add a setTimout of 1 second --> the last card appears before the popup page
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
              // The win popup appears
              const finishedPopUp = document.querySelector("#winState");
              finishedPopUp.style.visibility = "visible";

              const replayButton = document.querySelector(".replay");
              replayButton.onclick = () => {
                replay();
              };
              /* Closing popup */
              const finishedPopUpButton = document.getElementById("closeWin");

              finishedPopUpButton.onclick = () => {
                finishedPopUp.style.visibility = "hidden";
                pokeBoard.style.zIndex = 1;
              };
            }
          }, 1000);
          const pairsClicked = document.querySelector("#pairs-clicked");
          pairsClicked.innerHTML = pokemem.pairsClicked;
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
// Replay function 
const replay = () => location.reload();
const start = document.querySelector("#start");
start.onclick = () => {
  replay();
};
