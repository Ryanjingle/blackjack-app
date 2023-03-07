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
    cards.push(card)
    console.log(cards)
}



// hasBlackJack variable - keep track of whether or not won blackjack (got 21)
console.log(hasBlackJack)
// another variable to keep track of whether or not player is still alive in game - isAlive
console.log(isAlive) */


// BOOLEAN CONDITONS
//Basically just means true or false value (0,1)



//IF ELSE CONDITIONALS

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

// ARRAYS - ordered lists

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

// PUSH ARRAY

/* let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
messages.pop()
console.log(messages) */

// FOR LOOPS

/* for ( let count = 10; //starting point
    count < 21; //finishing point
    count += 1 //increment 
) {
console.log(count)
} */

//A common varibale in place of count, when doing loops is 'i', but count works as well

/* for (let i = 10; i < 101; i += 10) {
}
// The great thing about the i variable is that javascript won't remember it if you write another loop with i as the variable
// as long as the call is within the loop function 
for (let i = 5; i < 50; i += 10) {
    console.log(i)
} */


/* let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Hi, how are you"
]
//to log this out on seperate lines, you'll need to
console.log(messages[0])
console.log(messages[1])
console.log(messages[2])
console.log(messages[3])
//but this is more code than needed, never write more than needed (redundencies)
//this is where for loop comes in 
for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
} */

/* let cards = [7, 3, 9] 
for (let i = 0; i < cards.length; i += 1) {
    console.log(cards[i])
} */
// another syntax option we have instead of doing +=, is to use ++. Will do same thing.

let sentence = ["Hello", "my", "name", "is", "Ryan"] 

let greetingsEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i += 1) {
    greetingsEl.textContent += sentence[i] + " "
    console.log(sentence[i])
}

//explanation of above: we are first defining i as 0 (the first word in the array), 
//we are then saying that it needs to end once it reaches the entire length of the array.
//then, we are saying it needs to go through and check each array component one at a time.
//the text content is displaying this process onto the page by saying the text content =
//the sentence array component one at a time(i), then increments (+=) until array is complete.