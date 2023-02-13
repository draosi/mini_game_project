class PokeMem {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // Function to shuffle all the cards and to give --> each game, they will have a random position
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

  // Function to check if to cards are the same. If true --> 'this.pairsGuessed' is incremented of one
  checkIfPair(card1, card2) {
   this.pairsClicked += 1
   if (card1 === card2){
    this.pairsGuessed +=1 
    return true
   } else {
    return false
   }
  }

  // Function to check if all the pairs have been found
  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2){
      return true 
    } else {
      return false
    };
  }
}
  