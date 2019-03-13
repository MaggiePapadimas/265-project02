//game file
var words = [
  "Abuse",
  "Abhorrent",
  "Abominable",
  "Animal",
  "Appalling",
  "Atrocious",
  "Awful",
  "Baby",
  "Bathtub",
  "Bed",
  "Channel",
  "Children",
  "Chilling",
  "Circus",
  "Clown",
  "Collection",
  "Creepy",
  "Cup",
  "Daunting",
  "Demand",
  "Demoralizing",
  "Difficult",
  "Disconcerting",
  "Discouraging",
  "Dismaying",
  "Disquieting",
  "Distressing",
  "Disturbing",
  "Drink",
  "Ears",
  "Eerie",
  "Excruciating",
  "Eyes",
  "Family",
  "Finger",
  "Frighten",
  "Game",
  "Girl",
  "Grisly",
  "Gruesome",
  "Hideous",
  "Horrid",
  "Huge",
  "Inappropriate",
  "Influences",
  "Kids",
  "Monster",
  "Network",
  "Nightmarish",
  "Official",
  "Pants",
  "Perturbing",
  "Play",
  "Prejudice",
  "Production",
  "Rope",
  "Skeleton",
  "Sounds",
  "Subscribe",
  "Symbiotic",
  "Startling",
  "Threatening",
  "Troubling",
  "Trying",
  "Unnerving",
  "Traumatize",
  "Videos",
  "Weapon",
  "Wild",,
  "Weird",
  "Atrocious",
  "Barbarous",
  "Brackish",
  "Contemptible",
  "Despicable",
  "Evil",
  "Exceptionable",
  "Foul",
  "Frightful",
  "Fulsome",
  "Ghastly",
  "Grim",
  "Gruesome",
  "Hard",
  "Hateful",
  "Heinous",
  "Hideous",
  "Horrendous",
  "Horrifically",
  "Horribly",
  "Loathsome",
  "Lousy",
  "Lurid",
  "Miserable",
  "Nauseating",
  "Nightmarish",
  "Noxious",
  "Objectionable",
  "Obnoxious",
  "Obscene",
  "Odious",
  "Offensive",
  "Rancid",
  "Repellent",
  "Repugnant",
  "Repulsive",
  "Revolting",
  "Scandalous",
  "Shocking",
  "Sick",
  "Sickening",
  "Sickish",
  "Terrible",
  "Ugly",
  "Uncivilized",
  "Undesirable",
  "Ungodly",
  "Unhealthy",
  "Unholy",
  "Unpleasant",
  "Unsavory",
  "Unspeakable",
  "Unwanted",
  "Unwelcome",
  "Unwholesome",
  "Upsetting",
  "Vile",
  "Afflict",
  "Aggravate",
  "Agonize",
  "Anguish",
  "Assail",
  "Attack",
  "Curse",
  "Distress",
  "Crush",
  "Decompose",
  "Discomfort",
  "Discompose",
  "Disquiet",
  "Exasperate",
  "Excruciate",
  "Fluster",
  "Grieve",
  "Hagride",
  "Harrow",
  "Hurt",
  "Molest",
  "Nettle",
  "Oppress",
  "Overpower",
  "Overwhelm",
  "Pain",
  "Peeve",
  "Persecute",
  "Perturb",
  "Pester",
  "Pique",
  "Plague",
  "Rack",
  "Rasp",
  "Riled",
  "Smite",
  "Strain",
  "Stress",
  "Strike",
  "Torment",
  "Torture",
  "Trouble",
  "Tyrannize",
  "Upset",
  "Vexed",
  "Victim",
  "Worry",
  "to",
  "Watch",
  "You",
  "Won’t",
  "Believe",
  "This",
  "Like",
  "OMG!",
  "Next",
  "Dead"
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

Game.prototype.newGame = function( sentence ){
  this.sentence = sentence;
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
