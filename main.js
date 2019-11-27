const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    //console.log(this)
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 3px blue"
}

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, ai) {
    if (player === ai) {
        //console.log("remis")
        return 'draw'
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        //console.log("wygrałeś")
        return 'win'
    } else {
        //console.log("przegrałeś")
        return 'losse'
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-sumary="your-choice"]').textContent = player;
    document.querySelector('[data-sumary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers

    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins
        document.querySelector('[data-sumary="who-win"]').textContent = "Wygrałeś"
        document.querySelector('[data-sumary="who-win"]').style.color = "#ffd700"
    } else if (result === "losse") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses
        document.querySelector('[data-sumary="who-win"]').textContent = "Przegrałeś"
        document.querySelector('[data-sumary="who-win"]').style.color = "red"
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws
        document.querySelector('[data-sumary="who-win"]').textContent = "Remis"
        document.querySelector('[data-sumary="who-win"]').style.color = "black"
    }
}

function startGame() {
    if (!game.playerHand) return alert("Wybierz głoń!");
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    //console.log(gameResult)
    publishResult(game.playerHand, game.aiHand, gameResult)
}

hands.forEach(hand => hand.addEventListener('click', handSelection))
document.querySelector('.start').addEventListener('click', startGame)