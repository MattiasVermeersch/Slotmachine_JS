/**
 * ALL FUNCTIONS 
 */

 /**
  * binds the necessary html elements to JS
  */
function BindHtml() {
    images = document.querySelectorAll("img");
    spanScorePerSpel = document.querySelector("#scorePerSpel");
    spanScoreHistoriek = document.querySelector("#scoreHistoriek");
    spanAantalRolls = document.querySelector("#aantalRolls");
    btnRoll = document.querySelector("#btnRoll");
    btnStopRoll = document.querySelector("#btnStopRoll");
    btnReset = document.querySelector("#btnReset");
}

 /**
  * add event listeners to the buttons
  */
function AddEvents() {
    btnRoll.addEventListener('click', StartOrStop);
    btnStopRoll.addEventListener('click', StartOrStop);
    btnReset.addEventListener('click', ResetSlotMachine);
}

/**
 * build global variables
 */ 
function BuildLocalVars() {
    scoreHistory = new Array();
    imgSources = ['kers', 'druif', 'appelsien'];
}

/**
 * determines which functions must run depending on whether start or stop button was clicked
 */
function StartOrStop() {
    if(this.id == 'btnRoll') {
        if(numberOfRolls > 0 && intervalID == null){
            intervalID = setInterval(SlotMachine, 25);
        }
    }

    if(this.id == 'btnStopRoll'){
        if(numberOfRolls > 0 && intervalID != null){
            numberOfRolls --;
            clearInterval(intervalID);
            intervalID = null;
            CalculateScore();
            GettingScoreHistory();
        }
        spanAantalRolls.innerHTML = numberOfRolls;
    }
}
 
/**
 * flips the slotmachine fruit
 */
function SlotMachine() {
    for(let i = 0; i < imgSources.length; i++){
       GenerateRandomNumber();
       images[i].src = 'img/'+imgSources[randomNumber]+'.jpg';
       images[i].alt = imgSources[randomNumber];
    }
}

/**
 * Generates random number between 0 and 2
 */
function GenerateRandomNumber() {
    randomNumber = Math.floor(Math.random()*3);
}

 /**
 * calculates the score based on the active images
 */
function CalculateScore() {
    let fruitsArray = [];
    let score = 0;
 
    for(let i = 0; i < images.length; i++) {
       fruitsArray.push(images[i].alt);
    }
 
    fruitsArray.forEach(element => {
       let SearchDuplicates = p => p == element;
       let scoreArray = fruitsArray.filter(SearchDuplicates);
       
        if(scoreArray.length == 1 && score == 0)
        {
            score = 0;
        }
        else if(scoreArray.length == 2) 
        {
            score = 200;
        }
        else if(scoreArray.length == 3) 
        {
            score = 300;
        }
        spanScorePerSpel.innerHTML = score;
    });
    scoreHistory.push(score);
}

/**
 * keeps records of the scores the user scored
 */
function GettingScoreHistory() {
    let lastIndex = scoreHistory.length - 1;
    let historyText = "";
    for(let i = 0; i < scoreHistory.length; i++) {
        if(i == lastIndex)
        {
            historyText += scoreHistory[i];
        }
        else 
        {
            historyText += scoreHistory[i] + ' - ';
        }
    }
    spanScoreHistoriek.innerHTML = historyText;
}

/**
 * resets images, score, score history, number of available rolls and intervalID
 */
function ResetSlotMachine() {
    //reset the images to starting images
    for(let i = 0; i < imgSources.length; i++){
       images[i].src = 'img/'+imgSources[i]+'.jpg';
    }
    //reset the score
    spanScorePerSpel.innerHTML = "";
    //reset the score history 
    scoreHistory = [];
    spanScoreHistoriek.innerHTML = "";
    //reset number of rolls to default 3
    numberOfRolls = 3;
    spanAantalRolls.innerHTML = numberOfRolls;
    //reset intervalID
    clearInterval(intervalID);
    intervalID = null;
}