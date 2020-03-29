export default function (cards = [], piles = 0) {
  const filledPiles = [];
  let currentCardPos = 0;

  for (let pile = 0; pile < piles; pile++) {
    for (let row = 0; row <= pile; row++) {
      if (!filledPiles[pile]) filledPiles[pile] = [];

      filledPiles[pile][row] = { ...cards[currentCardPos++] };
    }

    //Last card of pile needs to be facing up
    filledPiles[pile][filledPiles[pile].length - 1].facingUp = true;
  }

  return { piles: filledPiles, length: currentCardPos };
}
