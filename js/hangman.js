// hangman parts
function Hangman () {
  this.head;
  this.lLeg;
  this.rLeg;
  this.lArm;
  this.rArm;
  this.chest;
}
//preloads the images
Hangman.prototype.load = function () {
  this.head = loadImage("assets/images/HEAD.png");
  this.lLeg = loadImage("assets/images/left-leg.png");
  this.rLeg = loadImage("assets/images/right-leg.png");
  this.lArm = loadImage("assets/images/left-arm.png");
  this.rArm = loadImage("assets/images/right-arm.png");
  this.chest = loadImage("assets/images/chest.png");
}
//loads the images into the game
Hangman.prototype.display = function(){
  image(this.head,398,135,this.head.width*0.8,this.head.height*0.8);
  image(this.lLeg,341,285,this.lLeg.width*0.8,this.lLeg.height*0.8);
  image(this.rLeg,383,292,this.rLeg.width*0.8,this.rLeg.height*0.8);
  image(this.lArm,325,210,this.lArm.width*0.8,this.lArm.height*0.8);
  image(this.rArm,414,210,this.rArm.width*0.8,this.rArm.height*0.8);
  image(this.chest,385,205,this.chest.width*0.8,this.chest.height*0.8);
}
