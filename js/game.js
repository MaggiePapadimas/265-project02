//game file
var sentences= [
  
  "i love applesauce",
  "i think i put ten lives",
  "deffinetly find out how long can b",

];
var backgroundImage;

var letters = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function Game(lives, x, y, w, h){

  this.sentence;
  this.maxLives = lives;
  this.lives;
  this.points
  this.sentenceDrawer;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.availibleLetters = [];

  backgroundImage = loadImage("assets/images/hangman-with-boxes-and-buttons.png");
}

Game.prototype.newGame = function(){
  var val = int(random() *( sentences.length ));
  console.log(val)
  this.sentence = sentences[val];
  this.lives = this.maxLives;
  this.points = 0;
  this.sentenceDrawer = new SentenceDrawer(this.sentence, this.x, this.y, this.w, this.h );
  this.availibleLetters = [];
  for(var i = 0; i < 26;++i){
    this.availibleLetters.push(true);
  }
}
// display for the phone
Game.prototype.display = function() {
  push();

  image(backgroundImage, 0, 0, 1080,700);

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
  pop();
}
// this handles the input
Game.prototype.handleInput = function (input) {
  if(input >= 65 && input <= 90){
    var letter = letters[input - 65];
    this.availibleLetters[input - 65] = false;
    var goodGuess = this.sentenceDrawer.guess(letter);
    if(!goodGuess){
      this.lives--;
      if(this.lives == 0) {
        console.log("you lose");
        this.newGame(this.sentence);
      }
    }
  }
}
