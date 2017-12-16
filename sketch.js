var house = [0]; //list of rooms
var txt; //text area
var input; //input box
var pos; //position of the player
var game; //story written to the screen
var gap = "\n\n"; //blank line

function setup() {
  game = "";
  noCanvas();
  txt = document.getElementById('txt');
  input = createInput();
  input.elt.focus();
  input.changed(parseText);
  input.attribute("align", "center");
  pos = 0;

  //*****************************
  //Start coding your house below
  //*****************************



  updateGame();
}

function draw() {
  txt.scrollTop = txt.scrollHeight;
  txt.value = game;
}
