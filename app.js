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

let userInput = [];

let userGuessSplit = [];

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
    for (let i = 0; i < 25; i++) {
        gridItem[i].classList.remove("selected-grid-item");
    }
    console.log(gridItem)

    currentElement.classList.add("selected-grid-item");


    // firstGuess = userGuessSplit[0];
    // console.log(firstGuess)
})




////////////////////////////////
// Event Listeners Here

// receives user input and stores it in a variable

document.querySelector("#send").addEventListener("click", function () {
    let userGuess = document.querySelector("#guess").value;
    userInput.push(userGuess);
    userGuessSplit.push(...userGuess.split(""));
    console.log(userGuessSplit);
})

// event listener for grid
for (let i = 0; i < 25; i++) {
    gridItem[i].addEventListener("click", function () {
        let currentElement = this;
        let gridInnerText = this.innerText;
        console.log(gridInnerText);
        markCell(currentElement);
        // markLetter(gridInnerText);
    })
}

// // event listener for keypress
// const markLetter = ( () => {
    
//     firstGrid.addEventListener("keypress", function () {
//         keyPress(event.key);
//     })
    
//     const keyPress = ( (key, gridInnerText) => {
//         switch(key) {
//             case "a":
//                 gridInnerText = "a";
//                 break;
//             case "b":
//                 currentElement.innerText = "b";
//                 break;
    
//             case "c":
//                 currentElement.innerText = "c";
//                 break;
//             case "d":
//                 currentElement.innerText = "d";
//                 break;
//             case "e":
//                 currentElement.innerText = "e";
//                 break;
//             case "f":
//                 currentElement.innerText = "f";
//                 break;
//             case "g":
//                 currentElement.innerText = "g";
//                 break;
//             case "h":
//                 currentElement.innerText = "h";
//                 break;
//             case "i":
//                 currentElement.innerText = "i";
//                 break;
//             case "j":
//                 currentElement.innerText = "j";
//                 break;
//             case "k":
//                 currentElement.innerText = "k";
//                 break;
//             case "l":
//                 currentElement.innerText = "l";
//                 break;
//             case "m":
//                 currentElement.innerText = "m";
//                 break;
//             case "n":
//                 currentElement.innerText = "n";
//                 break;
//             case "o":
//                 currentElement.innerText = "o";
//                 break;
//             case "p":
//                 currentElement.innerText = "p";
//                 break;
//             case "q":
//                 currentElement.innerText = "q";
//                 break;
//             case "r":
//                 currentElement.innerText = "r";
//                 break;
//             case "s":
//                 currentElement.innerText = "s";
//                 break;
//             case "t":
//                 currentElement.innerText = "t";
//                 break;
//             case "u":
//                 currentElement.innerText = "u";
//                 break;
//             case "v":
//                 currentElement.innerText = "v";
//                 break;
//             case "w":
//                 currentElement.innerText = "w";
//                 break;
//             case "x":
//                 currentElement.innerText = "x";
//                 break;
//             case "y":
//                 currentElement.innerText = "y";
//                 break;
//             case "z":
//                 currentElement.innerText = "z";
//                 break;
//             default: console.log(gridInnerText);
//         }
//     })


// })
