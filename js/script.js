// Magdalene Papadimas
//
// This is a hangman game. Most words are taken from the article https://medium.com/@jamesbridle/something-is-wrong-on-the-internet-c39c471271d2
//
// The game will generate a random sting of words that look similar to the eye catching titles on videos from youtube. The idea behind it is to show how companies and content creators are exploiting kids with mindless video. Things that never really help with the mental development.

// these are the words used. They are in an array so that they can be randomly selected for the game
var game;
var screenWidth = 1080;
var screenHeight = 700;
var hangman;
//preloads images
function preload () {
  game = new Game(10, 100, 550, 800, 200);
  game.newGame();
  hangman = new Hangman();
  hangman.load();
}

function setup () {
   createCanvas(screenWidth, screenHeight);
   listener();
}

function draw () {
  background(198, 236, 233);
  game.display();
  hangman.display();
}
//for when keys are pressed
function keyPressed() {
  game.handleInput(keyCode);
}
