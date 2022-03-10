// Global Variables Here

const letterSet = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "d", "d", "d", "d", 
"e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h", "h", "i", "i", 
"i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", 
"o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", 
"t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v", "w", "w", "x", "y", "y", "z"];

let startingLetters = [];

let lettersInPlay = document.querySelector(".letters-in-play");

let gridItem = document.querySelectorAll(".grid-item");

let gameBoard = document.querySelector(".game-board");

let submit = document.getElementById("submit");

let replay = document.getElementById("replay");

////////////////////////////////
// Functions For Game Logic Here

// renders letters on the page
const renderLetters = ( () => {
    let lettersRendered = randomLetters();
    lettersInPlay.innerText = `${lettersRendered}`;    
})



// selects 25 letters from the letterSet to start the game
const randomLetters = () => {
    for(let i = 0; i < 25; i++) {
        let randomLetter = letterSet[Math.floor(Math.random()*letterSet.length)];
        startingLetters.push(randomLetter);
    }
    return startingLetters
}


renderLetters()

// marks selected grid-item
const markCell = ( (currentElement) => {
    currentElement.classList.add("selected-grid-item");
})


const resetHTML = ( () => {
    for (let i = 0; i < 25; i++) {
        gridItem[i].classList.remove("selected-grid-item");
    }
})


const pullGridLetters = () => {
    let inputLetters = [];

    for (let i = 0; i < 25; i++) {
        if(gridItem[i].innerText !== ""){
            inputLetters.push(gridItem[i].innerText);
            }
    }
    return inputLetters
}


const compareUserToStart = (gridLetters) => {

    let cloneStartingLetters = [...startingLetters];

    for (let i = 0; i < gridLetters.length; i++) {
        if(cloneStartingLetters.includes(gridLetters[i])) {
            let index = cloneStartingLetters.indexOf(gridLetters[i]);
            cloneStartingLetters.splice(index, 1);
        }
        else{
            return alert("You used a letter that does not exist in the letter bank.")
        }
    }

    document.getElementById("score").innerText = (25 - cloneStartingLetters.length);

}

const playAgain = () => {

    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].innerText = "";
    }

    document.getElementById("score").innerText = 0;

    startingLetters = [];
    
    lettersInPlay.innerText = "";
    
    renderLetters()
}


////////////////////////////////
// Event Listeners Here

// event listener for grid
for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener("click", function () {
        let currentElement = this;

        resetHTML();
        markCell(currentElement);
        
    })
}


// event listener for key press
document.addEventListener("keypress", function (e) {
    for(x of gridItem){
        if(x.classList.value.includes('selected-grid-item')){
            x.innerText = e.key;

        }
                
    }

})


// event listener for submit button
submit.addEventListener("click", function () {
    let gridLetters = pullGridLetters();
    compareUserToStart(gridLetters);
})

// event listener for replay button
replay.addEventListener("click", playAgain);