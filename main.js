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
  { name: "Lokhlass", img: "Lokhlass.png" }
  ];

const pokemem = new PokeMem(cards);
pokemem.shuffleCards();
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

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (
        !card.classList.contains("blocked") &&
        pokemem.pickedCards.length < 2
      ) {
        card.classList.toggle("turned");
        pokemem.pickedCards.push(card);
      }

      const checkToCard = () => {
        return pokemem.pickedCards.length == 2;
      };

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
              window.alert("Victory");
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
