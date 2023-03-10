let cards = [] // order-list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el") - query selector practice below, more dynamic, but need to be more specific in quotes
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let player = {
    name: "Ryan",
    chips: 145
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + " $" +  player.chips
// we then add the specific variable to the object using . //

function getRandomCard() {
let randomNumber = Math.floor(Math.random()*13) + 1
if (randomNumber > 10) {
    return 10
}
else if (randomNumber === 1) {
    return 11
}
else {
    return randomNumber
}
}

function startGame() {
    isAlive = true
    let startCard1 = getRandomCard()
    let startCard2 = getRandomCard()
    cards = [startCard1, startCard2]
    sum = startCard1 + startCard2
    renderGame()
}

function renderGame() {

cardsEl.textContent = "Cards: "
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}    

sumEl.textContent = "Sum: " + sum
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
}
// bug occuring at if logical operator, cant figure out why
// after new card/start game is pressed a number of times, new card function won't execute at all. 

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
}





// hasBlackJack variable - keep track of whether or not won blackjack (got 21)
//console.log(hasBlackJack)
// another variable to keep track of whether or not player is still alive in game - isAlive
//console.log(isAlive)

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

/* let sentence = ["Hello", "my", "name", "is", "Ryan"] 

let greetingsEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i += 1) {
    greetingsEl.textContent += sentence[i] + " "
    console.log(sentence[i])
} */

//explanation of above: we are first defining i as 0 (the first word in the array), 
//we are then saying that it needs to end once it reaches the entire length of the array.
//then, we are saying it needs to go through and check each array component one at a time.
//the text content is displaying this process onto the page by saying the text content =
//the sentence array component one at a time(i), then increments (+=) until array is complete.

// RETURNING VALUES IN FUNCTIONS
/* function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    }
    else if (player2Time < player1Time) {
        return player2Time
    }
    else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace) */

/* let player1Time = 102
let player2Time = 107

function totalRaceTime() {
    return player1Time + player2Time
}
let totalTime = totalRaceTime()
console.log(totalTime) */

// GET RANDOM NUMBERS

/* let randomNumber = Math.random()
console.log(randomNumber) */

// Multiply method - multipies the random answer after its execution //

/* let randomNumber = Math.random() * 6
console.log(randomNumber) */

// Floor method - removes the decimal //

/* let flooredNumber = Math.floor(3.453224)
console.log(flooredNumber) */

// combining both methods to make dice - sets the random * 6 as a floor(without decimal) //

/* let diceNumber = Math.floor(Math.random()*6)
console.log(diceNumber) */

// modify function to get answer between 1 and 6 //

/* let diceNumber = Math.floor(Math.random()*6) + 1
console.log(diceNumber) */

// what this is doing is the same process as previous, except adding one to the answer. //

// turn it into a function //

/* function rollDice() {
    return Math.floor(Math.random()*6) + 1
}
let dice = rollDice()
console.log(dice)
// or //
function rollDice() {
    let randomNumber = Math.floor(Math.random()*6) + 1
    return randomNumber
}
console.log(rollDice()) */

// LOGICAL OPERATORS 


/* let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true) {
    if (givesCertificate === true) {
        generateCertificate()
    }
}
// a more efficient way of doing this:

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {

    console.log("Generating Certificate...")
} */

/* let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution...")
} */

// OR operator //
// The point of this is to execute a function based on whether or not the user likes this OR that - they don't have to like both
// So, if they press execute one of the two variables, the function will execute regardless

/* let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
} */

// Create Object (data type) - multiple variables within one data type
// here, player is the object and it is defined by what is inside the curly brackets

/* let player = {
    name: "Ryan",
    chips: 145
}*/

// OBJECTS //
// Store data in-depth - known as a complex data type.
// We can use numbers, strings, booleans (primitive data types) to store data within an object
// Also known as key-value pairs !

/* let course = {
    title: "Learn CSS Grid for free", //'title' is the key, and the string is the value.
    lessons: 16,
    creator: "Ryan Cooper Engel",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]

}

console.log(course.tags) */


// Think of the dot notation like a path, as the computer scans left to right.

/* let castle = {
    title: "Live like a King in my Castle",
    guests: 4,
    bedroom: 1,
    review: ["4.95", "(1268 reviews)"],
    isSuperhost: true
}
console.log(castle.guests)
console.log(castle.review) */

// METHODS WITHIN AN OBJECT // - method is a function that is attached to an object. 
// the 'document.getElementById() is also an example of a method (function) attached to an object (document)

/* let player = {
    name: "Ryan",
    isSexy: true,
    sayHello: function() {
        console.log("Hello!") 
    }
}
player.sayHello() */

// now, whenever that specific path is called upon, the function will run


// FINAL PRACTICE //


// function and object
/* let person = {
    name: "Ryan",
    age: 25,
    country: "United States"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in the " + person.country)
}
logData() */


//if else
/* et age = 15 

if (age < 6) {
    console.log("free")
} 
else if (age < 18) {
    console.log("child discount")
}
else if (age < 27) {
    console.log("student discount")
}
else if (age < 67) {
    console.log("full price")
}
else {
    console.log("senior citizen discount")
} */

//loops and arrays

/* let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]


console.log("The top 5 largest countries in the world are: ")
for (i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
} */

//push, pop unshift, shift challenge

/* let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monacco"]

largeCountries.shift()
largeCountries.unshift("China")
largeCountries.pop()
largeCountries.push("Pakistan")


console.log(largeCountries) */

//logical operators (non-boolean variables)

/* let dayOfMonth = 13
let weekDay = "Friday"

if (dayOfMonth === 13 && weekDay === "Friday") {
    hiThere()
}

function hiThere() {
    console.log("hi")
} */

// instead of writing another funciton you could have just done

/* if (dayOfMonth === 13 && weekDay === "Friday") {
    console.log("hi")
} */


//random numbers


/* let hands = ["rock", "paper", "scissors"]

function randomGame() {
    let hand = hands[Math.floor(Math.random()*hands.length)]
    console.log(hand)
}
randomGame() */

//Instead of adding a length as we did with numbers in the actual project (13),
//we use the same length function to indicate what items within the array to consider.
//to console log this, we could have also done return hand within the function, then console logged the function outside of the function to call it. Ex.

/* function randomGame() {
    let hand = hands[Math.floor(Math.random()*hands.length)]
    return hand
}
console.log(randomGame()) */

//another way to do this is to define the return value rather than the new variable. Ex.

/* function randomGame() {
    let hand = Math.floor(Math.random()*3) 
    return hands[hand] // here we are pointing to the array, rather than above.
}
console.log(randomGame()) */


//sorting fruits

/* let fruit = ["|", "-", "|", "|", "-"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "-") {
        orangeShelf.textContent += "-"
    }
    else if (fruit[i] === "|") {
        appleShelf.textContent += "|"
    }
}
}
sortFruit() */