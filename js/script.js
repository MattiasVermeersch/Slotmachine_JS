"use strict";

//declare global vars here
var btnRoll, btnStopRoll, btnReset;
var images, imgSources;
var spanScorePerSpel, spanScoreHistoriek, spanAantalRolls;
var randomNumber, intervalID;



window.addEventListener('load',Initialize);

function Initialize()
{
   //bind HTML elements
   BindHtml();
   //add eventlisteners
   AddEvents();


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

function StartOrStop() {
   if(this.id == 'btnRoll') {
      intervalID = setInterval(SlotMachine, 100);
   }

   if(this.id == 'btnStopRoll'){
      clearInterval(intervalID);
   }
}

function SlotMachine() {
   imgSources = ['kers.jpg', 'druif.jpg', 'appelsien.jpg'];

   for(let i = 0; i < imgSources.length; i++){
      GenerateRandomNumber();
      images[i].src = 'img/'+imgSources[randomNumber];
   }
}

/**
 * Generates random number between 0 and 2
 */
function GenerateRandomNumber() {
   randomNumber = Math.floor(Math.random()*3);
}

function ResetSlotMachine() {

}
