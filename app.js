// Global Variables Here

const letterSet = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "d", "d", "d", "d", 
"e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h", "h", "i", "i", 
"i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", 
"o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", 
"t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v", "w", "w", "x", "y", "y", "z"];


let startingLetters = [];

let lettersInPlay = document.querySelector(".letters-in-play");

let gridItem = document.querySelectorAll(".grid-item");

let userInput = [];

let userGuessSplit = [];




////////////////////////////////
// Functions For Game Logic Here

// selects 7 letters from the letterSet to start the game
const randomLetters = () => {
    for(let i = 0; i < 25; i++) {
        let randomLetter = letterSet[Math.floor(Math.random()*letterSet.length)];
        startingLetters.push(randomLetter);
    }
    return startingLetters
}

// renders letters on the page
const renderLetters = ( () => {
    let lettersRendered = randomLetters();
    lettersInPlay.innerText = `${lettersRendered}`;    
})

renderLetters()

const markCell = ( (currentElement, userGuessSplit) => {
    currentElement.innerText = `f`;
    firstGuess = userGuessSplit[0];
    console.log(firstGuess)
})


////////////////////////////////
// Event Listeners Here

// receives user input and stores it in a variable

document.querySelector("#send").addEventListener("click", function () {
    let userGuess = document.querySelector("#guess").value;
    userInput.push(userGuess);
    userGuessSplit.push(userGuess.split(""));
    console.log(userGuessSplit);
})

for (let i = 0; i < 25; i++) {
    gridItem[i].addEventListener("click", function () {
        let currentElement = this;
        markCell(currentElement)
    })
}

// playNow.addEventListener("click", randomLetters )