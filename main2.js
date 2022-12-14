class PokeMem {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  /* Fonction permettant de "mélanger" les cartes. Donnant une position aléatoire aux cartes
   sur le plateau à chaque partie */
  shuffleCards()  {
    if (this.cards){
    for (let i = this.cards.length - 1; i > 0; i--){
      let shuffle = Math.floor(Math.random() * i)
      let x = this.cards[i]
      this.cards[i] = this.cards[shuffle]
      this.cards[shuffle] = x
    }
  } else {
    return undefined
  }
  }

  /* Fonction verifiant si 2 cartes sont similaire, si oui, this.pairsGuessed est incrémenté de 1 */
  checkIfPair(card1, card2) {
   this.pairsClicked += 1
   if (card1 === card2){
    this.pairsGuessed +=1 
    return true
   } else {
    return false
   }
  }

/* Fonction permettant de verifier si toute les paires ont été trouvées. */
  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2){
      return true 
    } else {
      return false
    };


  }
}
  