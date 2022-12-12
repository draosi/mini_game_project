// This file wil contain function

class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const card1 = new Pokemon("Pikachu", "electrique");
const card2 = new Pokemon("Dracaufeu", "feu");
const card3 = new Pokemon("Tortank", "eau");
const card4 = new Pokemon("Bulbizarre", "plante");
const card5 = new Pokemon("Mewtwo", "psy");
const card6 = new Pokemon("Miaouss", "normal");
const card7 = new Pokemon("Ectoplasma", "spectre");
const card8 = new Pokemon("Dracolosse", "dragon");
const card9 = new Pokemon("Onyx", "roche");
const card10 = new Pokemon("");

const positionRandom = () => Math.floor(Math.random() * 16);

const type = ["", ""];

//  electrique feu eau plante psy roche sol normal spectre dragon
// electrique fort contre eau et vol / faible contre roche et
//
