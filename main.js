const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    deaws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    console.log(this)
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 3px blue"
}

hands.forEach(hand => hand.addEventListener('click', handSelection))