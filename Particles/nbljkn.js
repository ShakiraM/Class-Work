var Ball = function(x, y) {
	this.x = x;
	this.y = y;
	this.diameter = 10;
}

var balls = [];



function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);

  for (var i = 0; i < balls.length; i++) {
  	ellipse(balls[i].x, balls[i].y, balls[i].diameter, balls[i].diameter);
  }
}

function mousePressed() {
	balls.push( new Ball(mouseX, mouseY) );
}