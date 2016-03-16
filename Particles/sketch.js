
var Ball = function(x, y) {
this.x = x;
this.y = y;
this.speed = random(1,5);
this.sizes = random(5,20);


}
Ball.prototype.show = function() {
ellipse(this.x, this.y, this.sizes, this.sizes);
}
Ball.prototype.fall = function() {
this.y = this.y + this.speed;
}
var balls = [];
function setup() {
createCanvas(windowWidth, windowHeight); 
}
function draw() {
background(255,182,193);
for (var i = 0; i < balls.length; i++) {
  	balls[i].show();
  	balls[i].fall();
  }
}
function mouseMoved() {
balls.push( new Ball(mouseX, mouseY) );
}

function keyPressed() {
  for (var i = 0; i < balls.length; i++) {
      fill(random(255),random(255),random(255));
    }
}