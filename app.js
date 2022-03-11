// Global Variables Here

const letterSet = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "d", "d", "d", "d", 
"e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h", "h", "i", "i", 
"i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", 
"o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", 
"t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v", "w", "w", "x", "y", "y", "z"];

const wordBank = ["about","above","abuse","actor","acute","admit","adopt","adult","after","again","agent",
"agree","ahead","alarm","album","alert","alike","alive","allow","alone","along","alter","among","anger",
"angle","angry","apart","apple","apply","arena","argue","arise","array","aside","asset","audio","audit",
"avoid","award","aware","badly","baker","bases","basic","basis","beach","began","begin","begun","being",
"below","bench","billy","birth","black","blame","bland","blind","block","blood","board","boost","booth","bound",
"brain","brand","bread","break","breed","brief","bring","broad","broke","brown","build","built","buyer",
"cable","calif","carry","catch","cause","chain","chair","chart","chase","cheap","check","chest","chief",
"child","china","chose","civil","claim","class","clean","clear","click","clock","close","coach","coast",
"could","count","court","cover","crack","craft","crash","crazy","cream","crime","cross","crowd","crown","crude","curve","cycle",
"daily","dance","dated","dealt","death","debut","delay","depth","doing","doubt","dozen","draft","drama",
"drawn","dream","dress","drill","drink","drive","drove","dying","eager","early","earth","eight","elite",
"empty","enemy","enjoy","enter","entry","equal","error","event","every","exact","exist","extra","faith",
"false","fault","fazed","fiber","field","fifth","fifty","fight","final","first","fixed","flash","fleet","floor",
"fluid","focus","force","forth","forty","forum","found","frame","frank","fraud","fresh","front","frost","fruit",
"fully","funny","giant","given","glass","globe","going","grace","grade","grand","grant","grate","grass","great",
"green","grime","gross","group","grown","guard","guess","guest","guide","guilt","happy","harry","heart","heavy","hence",
"henry","horse","hotel","house","human","ideal","image","index","inner","input","issue","japan","jimmy",
"joint","jones","judge","known","label","large","laser","later","laugh","layer","learn","lease","least",
"leave","legal","level","lewis","light","limit","links","lives","local","logic","loose","lower","lucky",
"lunch","lying","magic","major","maker","march","maria","match","maxed","maybe","mayor","meant","media","metal",
"might","miner","mined","minor","minus","mixed","model","money","month","moral","motor","mount","mouse","mouth","movie","mover",
"music","needs","never","newly","night","noise","north","noted","novel","nurse","occur","ocean","offer",
"often","order","other","ought","paint","panel","paper","party","peace","peter","phase","phone","photo",
"picky","piece","pilot","pitch","place","plain","plane","plant","plate","point","pound","power","press","price",
"prick","pride","prime","print","prior","prize","proof","proud","prove","prune","queen","queer","quick","quiet","quite","radio",
"raise","range","rapid","ratio","reach","ready","refer","right","rival","river","robin","roger","roman",
"rough","round","route","royal","rural","scale","scene","scope","score","sense","serve","seven","shall",
"shame","shape","share","sharp","sheet","shelf","shell","shift","shirt","shock","shoot","short","shown","sight",
"since","sixth","sixty","sized","skill","sleep","slide","slime","small","smart","smash","smile","smith","smoke","solid",
"solve","sorry","sound","south","space","spare","speak","speed","spend","spent","split","spoke","sport",
"staff","stage","stake","stand","start","state","steam","steel","stick","still","stock","stone","stood",
"store","storm","story","strip","stuck","study","stuff","style","sugar","suite","super","surge","sweet","swear","table",
"taken","taste","taxes","teach","teeth","terry","thank","theft","their","theme","there","these",
"thick","thing","think","third","those","three","threw","throw","tight","times","tired","title","today",
"topic","total","touch","tough","tower","track","trade","train","treat","trend","trial","tribe","trick","tried","tries",
"truck","truly","trust","truth","twice","under","undue","union","unity","until","upper","upset","urban",
"usage","usual","valid","value","video","virus","visit","vital","voice","waste","watch","water","wheel",
"where","which","while","white","whole","whose","woman","women","world","worry","worse","worst","worth",
"would","wound","write","wrong","wrote","yield","young","youth"]

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
    let lettersRendered = randomLetters().join(" ");
    lettersInPlay.innerText = `${lettersRendered}`;    
})


// selects 25 letters from the letterSet to start the game
const randomLetters = () => {
    // return ['m','o','u','n','t']                             // for testing purposes
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
        // console.log("first")                                 // for testing purposes
        return alert("Word not found in Word Bank.")
    }
    if(!wordBank.includes(secondRow) && secondRow !== ""){
        // console.log("second")                                // for testing purposes
        return alert("Word not found in Word Bank.")
    }
    if(!wordBank.includes(thirdRow) && thirdRow !== ""){
        // console.log("third")                                 // for testing purposes
        return alert("Word not found in Word Bank.")
    }
    if(!wordBank.includes(fourthRow) && fourthRow !== ""){
        // console.log("fourth")                                // for testing purposes
        return alert("Word not found in Word Bank.")
    }
    if(!wordBank.includes(fifthRow) && fifthRow !== ""){
        // console.log("fifth")                                 // for testing purposes
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
