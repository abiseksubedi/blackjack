

msg = ['do you want to pick more cards?',
    " woah!! you won the game !",
    "you're out of the game."
]

let hasBlackJack = false;
let isAlive = false;

let messageEl = document.querySelector('#display-El')
let cardEl = document.querySelector('#cardsel')
let sumEl = document.querySelector('#sum-el')

let newbtn = document.querySelector('#newCard')


randomNum = () => {

    let randomN = Math.floor(Math.random() * 13) + 1;

    if (randomN === 1) {
        return 11;
    }
    else if (randomN > 10) {
        return 10;
    }
    else {
        return randomN;
    }
}


renderGame = () => {

    cardsel.innerText = " ";
    for (i = 0; i < cards.length; i++) {
        cardEl.innerText +=  cards[i] + " , " ;

    }

    sumEl.innerText = sum;

    if (sum <= 20) {
        message = msg[0];
    }
    else if (sum === 21) {
        message = msg[1]
        hasBlackJack = true;
    }
    else {
        message = msg[2]
        isAlive = false;
    }
    messageEl.innerText = message;
    console.log("isAlive: " + isAlive)
    console.log("hasBlackJackh: " + hasBlackJack)
}

    startGame = () => {
        newbtn.style.visibility = 'visible';
        isAlive = true;
        firstCard = randomNum();
        secondCard = randomNum();
        cards = [firstCard, secondCard]
        sum = cards[0] + cards[1];
        renderGame()
    }



    newCard = () => {

        if (isAlive === true && hasBlackJack === false){
        let thirdCard = randomNum();
        sum += thirdCard;
        cards.push(thirdCard);
        console.log(cards);
        renderGame()}
    }
