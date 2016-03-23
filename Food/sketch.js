var img1;
var name;

function preload() {
  img1 = loadImage("pizza.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  input = createInput();
  input.position(600, 400);

  button = createButton('Enter');
  button.position(750, 400);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What Is Your Favorite Food? (You Should Say Pizza)');
  greeting.position(450,300);

  textAlign(CENTER)
  textSize(50);
}

function greet() {
  name = input.value();
  greeting.html('Have some '+name+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 145, 100);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}

function mousePressed() {
 if (name == 'pizza') {
   image(img1, mouseX, mouseY, 100, 100);
  }
}
function draw() {
  
}