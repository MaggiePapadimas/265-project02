// Magdalene Papadimas
//
// This is a hangman game. Most words are taken from the article https://medium.com/@jamesbridle/something-is-wrong-on-the-internet-c39c471271d2
//
// the game has the titles used in the article. the body is parts of different characters in reference to the "wrong head" video in the article
var game;
var screenWidth = 1080;
var screenHeight = 700;
var gameStart = false;
//preloads images
function preload () {
  game = new Game(7, 100, 550, 800, 200);
}

function setup () {
  //canvs size
   createCanvas(screenWidth, screenHeight);
   if (annyang) {
     // inputs for alphabet
     var commands = {
         'a': function(){
           game.prepareInput("a");
         },
         'b': function(){
           game.prepareInput("b");
         },
         'c': function(){
           game.prepareInput("c");
         },
         'd': function(){
           game.prepareInput("d");
         },
         'e': function(){
           game.prepareInput("e");
         },
         'f': function(){
           game.prepareInput("f");
         },
         'g': function(){
           game.prepareInput("g");
         },
         'h': function(){
           game.prepareInput("h");
         },
         'i': function(){
           game.prepareInput("i");
         },
         'j': function(){
           game.prepareInput("j");
         },
         'k': function(){
           game.prepareInput("k");
         },
         'l': function(){
           game.prepareInput("l");
         },
         'm': function(){
           game.prepareInput("m");
         },
         'n': function(){
           game.prepareInput("n");
         },
         'o': function(){
           game.prepareInput("o");
         },
         'p': function(){
           game.prepareInput("p");
         },
         'q': function(){
           game.prepareInput("q");
         },
         'r': function(){
           game.prepareInput("r");
         },
         's': function(){
           game.prepareInput("s");
         },
         't': function(){
           game.prepareInput("t");
         },
         'u': function(){
           game.prepareInput("u");
         },
         'v': function(){
           game.prepareInput("v");
         },
         'w': function(){
           game.prepareInput("w");
         },
         'x': function(){
           game.prepareInput("x");
         },
         'y': function(){
           game.prepareInput("y");
         },
         'z': function(){
           game.prepareInput("z");
         },
         //yes for when annyang heard right
         'yes':function(){
           game.sendInput();
         },
         //no for if annyang heard wrong
         'no':function(){
           game.clearInput();
         },
         //starts new game
         'new game':function(){
           game.newGame();
         },
         //gives up a.k.a game over
         'give up':function(){
           game.giveUp();
         },
         //start game command
         'Start Game':function(){
           startGame();
         }
     };
   }
     // Add our commands to annyang
     annyang.addCommands(commands);
     annyang.start();
}

function draw () {
  background(198, 236, 233);
  if(gameStart) game.display();
  else{
    menu();
  }
}
//starts game
function startGame(){
  if(!gameStart){
    gameStart = true;
    game.newGame();
  }
}
// main menu
function menu(){
  textSize(50);
  text("CLICKBAIT HANGMAN", 220, 200);

  textSize(30);
  text("Use voice commands and keyboard to choose letters!", 235, 300);
  textSize(25);
  text("Say 'Start game' to start", 235, 400);
}
