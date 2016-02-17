var selectedBall;
var ballSizes;
var colors = [];

function preload() {
  img = loadImage("ariel.jpg");
  mySound = loadSound('underthesea.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight); 
	image(img);
	mySound.setVolume(0.3);
	mySound.play();
	selectedBall = 0;
	ballSizes = [15,25,22,20,10];
	colors[0] = color(255,0,0);
	colors[1] = color(0,255,0);
	colors[2] = color(0,0,255);
	colors[3] = color(50,10,70);
	colors[4] = color(255,255,200);
	pickcolor = ["Red","Green","Blue","Black","Yellow"];
}

function draw() {
  stroke(0,0,0);
	fill(255,255,255);
	rect(610, 250, 340, 90);
	textSize(20);
	textAlign(RIGHT);
	stroke(127,0,127);
	strokeWeight(2);
	text("COLOR SELECTED: " + pickcolor[selectedBall], 900, 300);
	fill(colors[selectedBall]);
	noStroke();
	//ellipse(mouseX, mouseY, ballSizes[selectedBall], ballSizes[selectedBall]);
}

function mousePressed() {
	selectedBall++;

	if (selectedBall >= ballSizes.length) {
		selectedBall = 0;
	}
}
function mouseDragged() {
  ellipse(mouseX, mouseY, ballSizes[selectedBall], ballSizes[selectedBall]);
}