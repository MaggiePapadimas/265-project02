//game file
var sentences= [
  "blu toys surprise juegos",
  "surprise play doh eggs peppa pig",
  "stamper cars pocoyo minecraft smurfs",
  "kinder play doh sparkle brilho",
  "cars screamin banshee",
  "lightning mcqueen disney pixar",
  "Disney Baby Pop Up Pals Easter Eggs",
  "Wrong Heads Disney",
  "Learn Colors Finger Family Rhymes",
  "bad baby with tantrum crying",
  "Halloween Finger Family Songs",
  "kids halloween songs collection",
  "finger family nursery rhymes",
  "farm families and finger family",
  "safari animals finger family song",
  "wild animals for kids",
  "superheros finger family collection",
  "batman finger song villan finger",
];

var letters = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function Game(lives, x, y, w, h){

  this.sentence;
  this.maxLives = lives;
  this.lives;
  this.views = 0;
  this.sentenceDrawer;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.availibleLetters = [];
  this.hangman = new Hangman();
  this.hangman.load();
  this.backgroundImage = loadImage("assets/images/hangman-with-boxes-and-buttons.png");
  this.nextGuess = "";
  this.gameWon = false;
}

Game.prototype.newGame = function(){
  var val = int(random() *( sentences.length ));
  console.log(val)
  this.sentence = sentences[val];
  this.lives = this.maxLives;
  this.views = 0;
  this.sentenceDrawer = new SentenceDrawer(this.sentence, this.x, this.y, this.w, this.h );
  this.availibleLetters = [];
  for(var i = 0; i < 26;++i){
    this.availibleLetters.push(true);
  }
  this.hangman.reset();
  this.nextGuess = "";
  this.gameWon = false;
}
// display for the phone
Game.prototype.display = function() {
  push();

  image(this.backgroundImage, 0, 0, 1080,700);
  this.hangman.display();
  var letterH = 40;
  var letterOffset = 12;
  var boxDiff = 60;
  fill(0);
  textSize(letterH)

  for(var i = 0; i < 13; i++){
    if(this.availibleLetters[i]) text(letters[i], 154 + letterOffset + i *boxDiff, 579 + letterH);
    if(this.availibleLetters[i + 13])  text(letters[i + 13], 154 + letterOffset + i *boxDiff, 635 + letterH);
  }
  this.sentenceDrawer.display();

  text("Views: "+ this.views,500,200);

  if(this.gameWon){
    fill(100,200,100);
    text("You Win! Say 'new game' to play a new game", 130,300);
  }
  else if(this.lives > 0){
    if(this.nextGuess.length > 0){
      text("Are you guessing "+this.nextGuess + "? (yes / no)", 500,300);
    }
  }
  else{
    fill(100,100,100);
    text("Game over. Say 'new game' to play a new game", 130,300);
  }
  pop();
}
// this handles the input
Game.prototype.handleInputSpeech = function (inputStirng) {
  var input = inputStirng.toUpperCase().charCodeAt(0);
  if(this.lives > 0 && input >= 65 && input <= 90){

    var index = input - 65;
    var letter = letters[index];
    console.log("" + letter + " " + index);

    this.availibleLetters[index] = false;
    var guessResult = this.sentenceDrawer.guess(letter);
    if(guessResult > 0 ){
      this.views += 10 * guessResult;
      this.views *= 1 + int(8 * random());
      if(this.sentenceDrawer.checkWin()) this.gameWon = true;

    }
    else if(guessResult == -1){
      this.hangman.badGuess();
      this.lives--;
      if(this.lives == 0) {
        this.sentenceDrawer.lose();
      }
    }

  }
}

Game.prototype.prepareInput = function( input ){
  this.nextGuess = input;
}
Game.prototype.sendInput = function(){
  if(this.nextGuess.length == 1){
    console.log("guessing "+this.nextGuess);
    this.handleInputSpeech(this.nextGuess)
    this.nextGuess = "";
  }
}
Game.prototype.clearInput = function(){
  this.nextGuess = "";
}

Game.prototype.giveUp = function(){
  this.lives = 0;
  this.sentenceDrawer.lose();
  this.hangman.kill();
}
