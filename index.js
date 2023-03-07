let firstCard = 9
let secondCard = 14
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el") - query selector practice below, more dynamic, but need to be more specific in quotes
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
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
cardsEl.textContent = "Cards: " + firstCard + " - " + secondCard
}

function newCard(){

}


// hasBlackJack variable - keep track of whether or not won blackjack (got 21)
console.log(hasBlackJack)
// another variable to keep track of whether or not player is still alive in game - isAlive
console.log(isAlive)


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

