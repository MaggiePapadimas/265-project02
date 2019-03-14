// Magdalene Papadimas
//
// This is a hangman game. Most words are taken from the article https://medium.com/@jamesbridle/something-is-wrong-on-the-internet-c39c471271d2
//
// The game will generate a random sting of words that look similar to the eye catching titles on videos from youtube. The idea behind it is to show how companies and content creators are exploiting kids with mindless video. Things that never really help with the mental development.

// these are the words used. They are in an array so that they can be randomly selected for the game
var game;
var screenWidth = 1080;
var screenHeight = 700;
var gameStart = false;
var music;
var menuDisplay

//preloads images
function preload () {
  menuDisplay = loadImage("assets/images/menubackground.png");
  game = new Game(7, 100, 550, 800, 200);
  music = new Audio("assets/sounds/backgroundsound.mp4");
}

function setup () {
   createCanvas(screenWidth, screenHeight);
   if (annyang) {
     // Let's define our first command. First the text we expect, and then the function it should call
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
         'yes':function(){
           game.sendInput();
         },
         'no':function(){
           game.clearInput();
         },
         'new game':function(){
           game.newGame();
         },
         'give up':function(){
           game.giveUp();
         },
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
  music.play();
  music.volume = 0.2;
  // music.loop() = true;
  if(gameStart) game.display();
  else{
    menu();
  }
}

function startGame(){
  if(!gameStart){
    gameStart = true;
    game.newGame();
  }
}

function menu(){
  textSize(50);
  text("CLICKBAIT HANGMAN", 220, 200);

  textSize(30);
  text("Use voice commands and the keyboard to choose letters", 235, 300);
  textSize(25);
  text("Say 'Start Game' to start", 235, 400);
  image(menuDisplay, 0, 0, 1080,700);

}
