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

// selects 25 letters from the letterSet to start the game
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


// marks selected grid-item
const markCell = ( (currentElement) => {
    
    // console.log(gridItem)

    currentElement.classList.add("selected-grid-item");


    // firstGuess = userGuessSplit[0];
    // console.log(firstGuess)
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
    // console.log(inputLetters)
    return inputLetters
}

const compareUserToStart = (gridLetters) => {
    console.log(typeof(gridLetters));
    console.log(typeof(startingLetters));
    for (let i = 0; i < gridLetters.length; i++) {
        if(gridLetters[i] in startingLetters) {
            // remove gridLetters[i] from startingLetters
            console.log("startingLetters - gridLetters[i]")
        }
    }
}

////////////////////////////////
// Event Listeners Here

// event listener for grid
for (let i = 0; i < 25; i++) {
    gridItem[i].addEventListener("click", function () {
        let currentElement = this;
        console.log(currentElement);

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

