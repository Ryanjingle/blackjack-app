/* let firstCard = 2
let secondCard = 4
let cards = [firstCard, secondCard] // order-list of items
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el") - query selector practice below, more dynamic, but need to be more specific in quotes
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
if (sum <= 20) {
    message = "Do you want to draw a new card?"
}
else if (sum === 21) {
    hasBlackJack = true
    message = "Congratulations"
}
else {
    isAlive = false
    message = "You're out of the game"
}
messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1]
}

function newCard(){
    let card = 8
    sum += card
    renderGame()
    console.log("Drawing a new card from the deck!")
}



// hasBlackJack variable - keep track of whether or not won blackjack (got 21)
console.log(hasBlackJack)
// another variable to keep track of whether or not player is still alive in game - isAlive
console.log(isAlive)
 */

// boolean conditions



//if else conditionals 

//if (sum < 21) {
    //console.log("Do you want to draw a new card?")
//}
//else if (sum === 21) {
   // console.log("Congratulations!")
//}
//else {
    //console.log("Better luck next time")
//}

//let age = 145

//if (age < 100) {
    //console.log("Not eligible!")
//}
//else if (age === 100) {
    //console.log("Here is your birthday card from the King!")
//}
//else {
    //console.log("Not eligible, you have already gotten one!")
//}

// Arrays - ordered list of items

/* let featuredPosts = [
    "Check out my Netflix clone", 
    "Here's code for my project", 
    "I've just relaunched my portfolio"
]

let sportSkills = [
    "Baseball - Advanced",
    "Football - Advanced",
    "Basketball - Proficient",
    "Tennis - Basic"
]

console.log(sportSkills[2])

// string, number, and boolean primitive data types

let me = [
    "Ryan",
    25,
    true
]
console.log(me[2]) */

// push array

let cards = [7, 4]
cards.push(6)
console.log(cards)