var a;
var b;
var x;
var y;
var stars1 = [];
var stars2 = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < windowWidth; i++) {
    stars1.push(random(width));
    stars2.push(random(height));
  }
  easing = .025;
	x = width/2;
	y = height/2;
}

function movestars(i) {
  if (mouseX < width/2) {
    stars1[i] = stars1[i] - (mouseX*0.01);
  }
  if (mouseX > width/2) {
    stars1[i] = stars1[i] - (mouseX*0.01);
  }
  if (mouseX < height/2) {
    stars1[i] = stars1[i] - (mouseX*0.01);
  }
  if (mouseX > height/2) {
    stars2[i] = stars2[i] - (mouseX*0.01);
  }
}

function draw() {
  console.log("X: " + mouseX, "Y:" + mouseY);
  var a = random(windowWidth);
  var b = random(0,windowHeight);

  fill(0,0,0,10);
  rect(0,0,windowWidth,windowHeight);
  
  
  fill(255);
  ellipse(a,b,5,5);
  
  fill(255);
  
  for (var i = 0; i < 500; i++) {
    
    ellipse(stars1[i],stars2[i],5,5);
    movestars(i);
  } 

}

