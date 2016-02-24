var x;
var y;
var easing;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	easing = .025;
	x = width/2;
	y = height/2;
}

function draw() {
	background(255);
	var eX = (mouseX - x) * easing;
	var eY = (mouseY - y) * easing;

	x = x + eX;
	y = y + eY;
	ellipse(x, y, 20, 20);	

}