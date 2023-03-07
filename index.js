let firstCard = 10
let secondCard = 4
let hasBlackJack = false
let isAlive = true
let message = ""

let sum = firstCard + secondCard 

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
console.log(message)
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

