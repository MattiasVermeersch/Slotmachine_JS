"use strict";

//declare global vars here
var btnRoll, btnStopRoll, btnReset;
var images;
var spanScorePerSpel, spanScoreHistoriek, spanAantalRolls;

window.addEventListener('load',Initialize);

function Initialize()
{
   //bind HTML elements
   BindHtml();
   //add eventlisteners
   
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

}

function StopSlotMachine() {

}

function ResetSlotMachine() {
   
}
