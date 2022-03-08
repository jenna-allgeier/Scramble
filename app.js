// Global Variables Here

const letterSet = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "d", "d", "d", "d", 
"e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h", "h", "i", "i", 
"i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", 
"o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", 
"t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v", "w", "w", "x", "y", "y", "z"];


let startingLetters = [];

let lettersInPlay = document.querySelector(".letters-in-play");

// let playNow = document.getElementByClassName("play-now");

let gridItem = document.querySelectorAll(".grid-item");




////////////////////////////////
// Functions For Game Logic Here

//selects 7 letters from the letterSet to start the game
const randomLetters = () => {
    for(let i = 0; i < 7; i++) {
        let randomLetter = letterSet[Math.floor(Math.random()*letterSet.length)];
        startingLetters.push(randomLetter);
    }
    return startingLetters
}


const renderLetters = ( () => {
    let exampleWord = randomLetters();
    lettersInPlay.innerText = `${exampleWord}`;
    
})

renderLetters()

////////////////////////////////
// Event Listeners Here
// playNow.addEventListener("click", randomLetters )