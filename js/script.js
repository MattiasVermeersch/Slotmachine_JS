"use strict";

//declare global vars here
var btnRoll, btnStopRoll, btnReset;
var images, imgSources;
var spanScorePerSpel, spanScoreHistoriek, spanAantalRolls;
var randomNumber, intervalID;
var scoreHistory;
var numberOfRolls;



window.addEventListener('load',Initialize);

function Initialize()
{
   //bind HTML elements
   BindHtml();
   //add eventlisteners
   AddEvents();
   //global functions
   BuildLocalVars();
   ResetSlotMachine();
}

/**FUNCTIONS here or in separate functions file */
function BindHtml() {
   images = document.querySelectorAll("img");
   spanScorePerSpel = document.querySelector("#scorePerSpel");
   spanScoreHistoriek = document.querySelector("#scoreHistoriek");
   spanAantalRolls = document.querySelector("#aantalRolls");
   btnRoll = document.querySelector("#btnRoll");
   btnStopRoll = document.querySelector("#btnStopRoll");
   btnReset = document.querySelector("#btnReset");
}

function AddEvents() {
   btnRoll.addEventListener('click', StartOrStop);
   btnStopRoll.addEventListener('click', StartOrStop);
   btnReset.addEventListener('click', ResetSlotMachine);
}

function BuildLocalVars() {
   scoreHistory = new Array();
   numberOfRolls = 3;
   imgSources = ['kers', 'druif', 'appelsien'];
}

function StartOrStop() {
   if(this.id == 'btnRoll') {
      intervalID = setInterval(SlotMachine, 25);
   }

   if(this.id == 'btnStopRoll'){
      clearInterval(intervalID);
      CalculateScore();
      GettingScoreHistory();
   }
}

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
   spanAantalRolls.innerHTML = 3;
   numberOfRolls = 3;
}
