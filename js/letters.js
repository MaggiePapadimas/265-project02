
var letterW = 20;
var letterH = 10;
var letterMul = 1.5;
function SentenceDrawer(sentence, x, y, w, h){

  this.sentence = sentence;
  this.correctList = [];
  this.guessedLetters = [];
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.lost = false;
  this.fullLength = this.sentence.length * letterW * letterMul;
  for(var i = 0; i < this.sentence.length; i++){
    if(this.sentence.charAt(i) == ' ')     this.correctList.push(true);
    else this.correctList.push(false);
  }
  for(var i = 0; i < 26; i++){
    this.guessedLetters[i] = false;
  }
}

SentenceDrawer.prototype.display = function(){
  push();
  var start = (screenWidth / 2) - (this.fullLength / 2);
  fill(255,255,255,180);
  rect(start - letterMul * letterW, this.y - 5 * letterH, this.fullLength + letterMul * letterW, 6 *letterH);
  fill(0,0,0,255);
  textSize(letterW);
  for(var i = 0; i < this.sentence.length; i++){
    if(this.sentence.charAt(i) != ' '){
      line(start,this.y, start + letterW, this.y);

      if(this.correctList[i]){
        fill(0);
        text(this.sentence.toUpperCase().charAt(i),start + 7, this.y - letterH);
      }
      else if(this.lost){
        fill(255,0,0);
        text(this.sentence.toUpperCase().charAt(i),start + 7, this.y - letterH);
      }
    }
    start += letterMul * letterW;
 }
 pop();
  //nothing
}

SentenceDrawer.prototype.guess = function(input){
  if(this.guessedLetters[input]) return 0;
  this.guessedLetters[input] = true;
  var count = 0;
  var foundLetter = false;
  for(var i = 0; i < this.sentence.length; i++){
    if(this.sentence.toLowerCase().charAt(i) == input){
      this.correctList[i] = true;
      foundLetter = true;
      count++;
    }
  }

  if(foundLetter) return count;
  else return -1;
}

SentenceDrawer.prototype.lose = function(){
  this.lost = true
  console.log("Lost!");
}

SentenceDrawer.prototype.checkWin = function(){
  for(var i = 0; i < this.sentence.length; i++){
    if(this.correctList[i] == false) return false;
  }
  return true;
}
