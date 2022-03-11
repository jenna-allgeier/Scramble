// API Domain/Key

const API_KEY = 'd7ecbae8083665f552ced8220974a6c4'
const BASE_URL = 'https://od-api.oxforddictionaries.com/api/v2'
const APP_ID = '504320ab'


// Global Variables Here

const letterSet = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "d", "d", "d", "d", 
"e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h", "h", "i", "i", 
"i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", 
"o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", 
"t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v", "w", "w", "x", "y", "y", "z"];

const wordBank = ["fiend", "brand", "swarm", "trout", "brain", "hazy", "queen", "exits", "mouse", "arise", 
"horse", "point", "alone", "empty", "slate", "place", "light", "mount", "doubt", "query", "found", "chalk",
"state", "sound", "water", "joint", "mined", "tango", "gloat", "brine", "prize", "loser", "liver", "timer",
"proud", "wreck", "tinge", "giver", "scorn", "haven", "teeth", "worth", "wrath", "great", "grate", "wrong",
"timed", "taped", "today", "paved", "prove", "voter", "hoped", "guess", "tacky", "slime", "hatch", "brick", 
"rower", "miner", "waxed", "maxed", "tired", "valve", "those", "cuter", "round", "stick", "knick", "snack",
"grace"]

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
    // return ['m','o','u','n','t']         // for testing purposes
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
        if(gridItem[i].innerText !== ''){
            inputLetters.push(gridItem[i].innerText);
            }
    }
    
    return inputLetters
}


const compareUserToStart = (gridLetters) => {

    let cloneStartingLetters = [...startingLetters];
    // let cloneStartingLetters = ['m','o','u','n','t']         // for testing purposes

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


const compareUserToWordBank = (gridLetters) => {
    
    let firstRow = ( (gridItem[0].innerText) + (gridItem[1].innerText) + (gridItem[2].innerText) + (gridItem[3].innerText) + (gridItem[4].innerText));
    let secondRow = ( (gridItem[5].innerText) + (gridItem[6].innerText) + (gridItem[7].innerText) + (gridItem[8].innerText) + (gridItem[9].innerText));
    let thirdRow = ( (gridItem[10].innerText) + (gridItem[11].innerText) + (gridItem[12].innerText) + (gridItem[13].innerText) + (gridItem[14].innerText));
    let fourthRow = ( (gridItem[15].innerText) + (gridItem[16].innerText) + (gridItem[17].innerText) + (gridItem[18].innerText) + (gridItem[19].innerText));
    let fifthRow = ( (gridItem[20].innerText) + (gridItem[21].innerText) + (gridItem[22].innerText) + (gridItem[23].innerText) + (gridItem[24].innerText));


    if(!wordBank.includes(firstRow) && firstRow !== ""){
        // console.log("first")         // for testing purposes
        return alert("Word not found in Word Bank.")
    }
    if(!wordBank.includes(secondRow) && secondRow !== ""){
        // console.log("second")         // for testing purposes
        return alert("Word not found in Word Bank.")
    }
    if(!wordBank.includes(thirdRow) && thirdRow !== ""){
        // console.log("third")         // for testing purposes
        return alert("Word not found in Word Bank.")
    }
    if(!wordBank.includes(fourthRow) && fourthRow !== ""){
        // console.log("fourth")         // for testing purposes
        return alert("Word not found in Word Bank.")
    }
    if(!wordBank.includes(fifthRow) && fifthRow !== ""){
        // console.log("fifth")         // for testing purposes
        return alert("Word not found in Word Bank.")
    }
    else{
        compareUserToStart(gridLetters);
    }
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
    
    compareUserToWordBank(gridLetters);
})

// event listener for replay button
replay.addEventListener("click", playAgain);













  // let firstColumn = ((gridLetters[0]) + (gridLetters[5]) + (gridLetters[10]) + (gridLetters[15]) + (gridLetters)[20]);
    // let secondColumn = ((gridLetters[1]) + (gridLetters[6]) + (gridLetters[11]) + (gridLetters[16]) + (gridLetters)[21]);
    // let thirdColumn = ((gridLetters[2]) + (gridLetters[7]) + (gridLetters[12]) + (gridLetters[17]) + (gridLetters)[22]);
    // let fourthColumn = ((gridLetters[3]) + (gridLetters[8]) + (gridLetters[13]) + (gridLetters[18]) + (gridLetters)[23]);
    // let fifthColumn = ((gridLetters[4]) + (gridLetters[9]) + (gridLetters[14]) + (gridLetters[19]) + (gridLetters)[24]);

    // console.log(firstColumn)
    // console.log(thirdColumn)
    // console.log(fifthColumn)