"use strict";

//declare global vars here
var btnRoll, btnStopRoll, btnReset;
var images, imgSources;
var spanScorePerSpel, spanScoreHistoriek, spanAantalRolls;
var number;



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
   btnRoll.addEventListener('click', StartSlotMachine);
   btnStopRoll.addEventListener('click', StopSlotMachine);
   btnReset.addEventListener('click', ResetSlotMachine);
}

function StartSlotMachine() {
   imgSources = ['kers.jpg', 'druif.jpg', 'appelsien.jpg'];

   for(let i=0; i < imgSources.length; i++){
      number = Math.floor(Math.random()*3);
      images[i].src = 'img/'+imgSources[number];
   }

   var randomImage = setInterval(StartSlotMachine, 25);
}

function StopSlotMachine() {
   clearInterval(randomImage);
}

function ResetSlotMachine() {

}
