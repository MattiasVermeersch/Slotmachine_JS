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
