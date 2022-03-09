// Global Variables Here

const letterSet = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "d", "d", "d", "d", 
"e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h", "h", "i", "i", 
"i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", 
"o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", 
"t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v", "w", "w", "x", "y", "y", "z"];

let flag = [false, false, false, false, false, false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, false, false, false, false, false]


let startingLetters = [];

let lettersInPlay = document.querySelector(".letters-in-play");

let gridItem = document.querySelectorAll(".grid-item");

let gameBoard = document.querySelector(".game-board");

let firstGrid = document.querySelector("#first");




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

    flag = [false, false, false, false, false, false, false, false, false, false, false, false, false, 
        false, false, false, false, false, false, false, false, false, false, false, false]
})



////////////////////////////////
// Event Listeners Here

// event listener for grid
for (let i = 0; i < 25; i++) {
    gridItem[i].addEventListener("click", function () {
        let currentElement = this;
        console.log(currentElement);

        resetHTML();
        markCell(currentElement);
        flag[i] = true
        // console.log(gridItem)
    })
}

// event listener for key press
document.addEventListener("keypress", function (e) {
        // console.log('keypress function')
        for(x of gridItem){
            if(x.classList.value.includes('selected-grid-item')){
                // console.log('if passed')
                // console.log(x)
                x.innerText = e.key

            }
                
        }
        // console.log(e.key)

    })




    
const keyPress = ( (key) => {
        switch(key) {
            case "a":
                currentElement.innerText = "a";
                break;
            case "b":
                currentElement.innerText = "b";
                break;
    
            case "c":
                currentElement.innerText = "c";
                break;
            case "d":
                currentElement.innerText = "d";
                break;
            case "e":
                currentElement.innerText = "e";
                break;
            case "f":
                currentElement.innerText = "f";
                break;
            case "g":
                currentElement.innerText = "g";
                break;
            case "h":
                currentElement.innerText = "h";
                break;
            case "i":
                currentElement.innerText = "i";
                break;
            case "j":
                currentElement.innerText = "j";
                break;
            case "k":
                currentElement.innerText = "k";
                break;
            case "l":
                currentElement.innerText = "l";
                break;
            case "m":
                currentElement.innerText = "m";
                break;
            case "n":
                currentElement.innerText = "n";
                break;
            case "o":
                currentElement.innerText = "o";
                break;
            case "p":
                currentElement.innerText = "p";
                break;
            case "q":
                currentElement.innerText = "q";
                break;
            case "r":
                currentElement.innerText = "r";
                break;
            case "s":
                currentElement.innerText = "s";
                break;
            case "t":
                currentElement.innerText = "t";
                break;
            case "u":
                currentElement.innerText = "u";
                break;
            case "v":
                currentElement.innerText = "v";
                break;
            case "w":
                currentElement.innerText = "w";
                break;
            case "x":
                currentElement.innerText = "x";
                break;
            case "y":
                currentElement.innerText = "y";
                break;
            case "z":
                currentElement.innerText = "z";
                break;
            default: console.log('keypressdefault');
        }
})
