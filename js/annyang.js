//letters for annyang
var inputs = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var correctLetter;

function listener(){
  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        'hello': function () {
          fill(555,450,30);
          ellipse(50,50,75,75);
          noFill();
          console.log('hello');
        },
        'i think there is a *X': function (X) {
          if (X === correctLetter){
            console.log('i think there is a *X');


          }
        },
        'goodbye': function (){
          fill(25,82,93);
          ellipse(50,50,75,75);
          noFill();
          console.log('goodbye');
        }

    };
  }
    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}

function correct () {
  // if (correctLetter === ){}
}
