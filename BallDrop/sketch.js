var x = [];
var y = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  //draw ellipses here
  background(255,182,193);
  for (var i = 0; i < y.length; i++) {
    if (dist(x[i],y[i],mouseX,mouseY)> 15){
      fill(255);
    }
    else {
      fill(random(255),random(255),random(255));
    }
    stroke(0);
    ellipse(x[i],y[i],30,30);
    y[i] = y[i] + 2;
    
  }
}  
function mousePressed() {
  //create new balls here
  x.push(mouseX);
  y.push(mouseY);
}
