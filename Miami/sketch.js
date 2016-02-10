var x;
var y;
var xDirection;
var yDirection;
var img1;
var img2;

function preload() {
  img1 = loadImage("img.png");
  img2 = loadImage("palm.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  image(img2);
  xDirection = random(-5,5);
  yDirection = random(-5,5);
  x = width/2;
  y = height/2;
}

function draw() {
 image(img1,x,y);
 x = x + xDirection;
 y = y + yDirection;
 if(x < 0 || x > width - img1.width) {
   xDirection = xDirection * -1;
   r = random(0,255);
 }
 if(y < 0 || y > height - img1.height) {
   yDirection = yDirection * -1;
   b = random(0,255);
 }
}