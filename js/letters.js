
var letterW = 20;
var letterH = 10;
function SentenceDrawer(sentence, x, y, w, h){

  this.sentence = sentence;
  this.correctList = [];
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.fullLength = this.sentence.length * letterW;
  for(var i = 0; i < this.sentence.length; i++){
    this.correctList.push(false);
  }
}

SentenceDrawer.prototype.display = function(){
  push();
  var start = (screenWidth / 2) - (this.fullLength);
  fill(255,255,255,180);
  rect(start - 2 * letterH, this.y - 5 * letterH, 2 *( this.fullLength + 2 * letterH), 6 *letterH);
  fill(0,0,0,255);
  textSize(letterW);
  for(var i = 0; i < this.sentence.length; i++){
    if(this.sentence.charAt(i) != ' '){
      line(start,this.y, start + letterW, this.y);

      if(this.correctList[i]){
        text(this.sentence.charAt(i),start + 5, this.y - letterH);
      }

    }
    start += 2 * letterW;
 }
 pop();
  //nothing
}

SentenceDrawer.prototype.guess = function(input){
  var foundLetter = false;
  console.log("you guessed "+ input);

  for(var i = 0; i < this.sentence.length; i++){
    if(this.sentence.toLowerCase().charAt(i) == input){
      this.correctList[i] = true;
      foundLetter = true;
    }
  }

  if(foundLetter) console.log("good guess");
  else console.log("wrong guess");
  console.log(this.sentence.toLowerCase());
  return foundLetter;
}