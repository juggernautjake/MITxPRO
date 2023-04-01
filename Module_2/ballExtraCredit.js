//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var red = 255;
var green = 255;
var blue = 255;
var color = ''; 
var colorRedVelocity = 5;
var colorGreenVelocity = 10;
var colorBlueVelocity = 10;
var velocity = 5;
var positionX = 0;
var positionY = 0;
var reverseX = false;
var reverseY = false;
var reverseRed = false;
var reverseGreen = false;
var reverseBlue = false;
//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 600;
  var Ymin = 0;
  var Ymax = 400;
  
  if(positionX > Xmax){
    reverseX = true;
  } else if(positionX === Xmin){
    reverseX = false;
  }

  if(reverseX === false){
    positionX = positionX + velocity;
  } else{
    positionX = positionX - velocity;
  }
  ball.style.left = positionX + 'px';

  if(positionY > Ymax){
    reverseY = true;
  } else if(positionY === Ymin){
    reverseY = false;
  }

  if(reverseY === false){
    positionY = positionY + velocity;
  } else{
    positionY = positionY - velocity;
  }
  ball.style.top = positionY + 'px';
}


function ballColor() {
  var REDmin = 0;
  var REDmax = 255;
  var GREENmin = 0;
  var GREENmax = 255;
  var BLUEmin = 0;
  var BLUEmax = 255;

  if(red <= REDmin){
    reverseRed = false;
  } else if(red >= REDmax){
    reverseRed = true;
  }

  if(reverseRed === false){
    red = red + colorRedVelocity;
  } else{
    red = red - colorRedVelocity;
  }

  if(green <= GREENmin){
    reverseGreen = false;
  } else if(green >= GREENmax){
    reverseGreen >= true;
  }

  if(reverseGreen === false){
    green = green + colorGreenVelocity;
  } else{
    green = green - colorGreenVelocity;
  }

  if(blue <= BLUEmin){
    reverseBlue = false;
  } else if(blue >= BLUEmax){
    reverseBlue = true;
  }

  if(reverseBlue === false){
    blue = blue + colorBlueVelocity;
  } else{
    blue = blue - colorBlueVelocity;
  }

  ball.style.background = "#"+(red).toString(16)+(green).toString(16)+(blue).toString(16);

}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
setInterval(ballColor, 15);