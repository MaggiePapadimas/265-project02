// hangman parts
function Hangman () {
  this.head;
  this.lLeg;
  this.rLeg;
  this.lArm;
  this.rArm;
  this.chest;
  this.parts = [];
  this.reset();

}
//preloads the images
Hangman.prototype.load = function () {
  this.head = loadImage("assets/images/face2.png");
  this.lLeg = loadImage("assets/images/llegalladin.png");
  this.rLeg = loadImage("assets/images/rlegalladin.png");
  this.lArm = loadImage("assets/images/larmspider.png");
  this.rArm = loadImage("assets/images/rarmspider.png");
  this.chest = loadImage("assets/images/jchest.png");
}
//loads the images into the game
Hangman.prototype.display = function(){
//   if(this.parts[0]) image(this.head,398,135,this.head.width*0.8,this.head.height*0.8);
//   if(this.parts[2]) image(this.lLeg,341,285,this.lLeg.width*0.8,this.lLeg.height*0.8);
//   if(this.parts[3]) image(this.rLeg,383,292,this.rLeg.width*0.8,this.rLeg.height*0.8);
//   if(this.parts[4]) image(this.lArm,325,210,this.lArm.width*0.8,this.lArm.height*0.8);
//   if(this.parts[5]) image(this.rArm,414,210,this.rArm.width*0.8,this.rArm.height*0.8);
//   if(this.parts[1]) image(this.chest,385,205,this.chest.width*0.8,this.chest.height*0.8);
// }
// elsa joker spiderman and alladin Hangman.prototype.display = function(){
if(this.parts[4])image(this.lArm,370,210,this.lArm.width*0.8,this.lArm.height*0.8);
if(this.parts[5])image(this.rArm,454,211,this.rArm.width*0.8,this.rArm.height*0.8);
if(this.parts[1])image(this.chest,390,212,this.chest.width*0.8,this.chest.height*0.8);
if(this.parts[2])image(this.lLeg,406,298,this.lLeg.width*0.8,this.lLeg.height*0.8);
if(this.parts[3])image(this.rLeg,434,297.5,this.rLeg.width*0.8,this.rLeg.height*0.8);
if(this.parts[0])image(this.head,395,137,this.head.width*0.8,this.head.height*0.8);
}

Hangman.prototype.reset = function(){
  this.parts = [];
  for(var i = 0; i < 6; i ++){
    this.parts.push(false);
  }
}
Hangman.prototype.badGuess = function(){
  for(var i = 0; i < 6; i ++){
    if(!this.parts[i]){
      this.parts[i] = true;
      break;
    }
  }
}
Hangman.prototype.kill = function(){
  for(var i = 0; i < 6; i ++){
      this.parts[i] = true;
    }
}
