class PokeMem {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

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

  checkIfPair(card1, card2) {
   this.pairsClicked += 1
   if (card1 === card2){
    this.pairsGuessed +=1 
    return true
   } else {
    return false
   }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2){
      return true 
    } else {
      return false
    };


  }
}
  