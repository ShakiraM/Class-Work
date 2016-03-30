
var city = "Miami";
var api_key = "3d98a03bbbd6d454e1ac55898a02f4ad";
var temp;
var temp_min;
var temp_max;
var x;
var y;

function preload() {
  img1 = loadImage("miami-beach.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID="+api_key;
  loadJSON(url, receivedWeather);
}

function draw() {
  image(img1,x,y);
  noStroke();
  //fill(255,0,0);
  //ellipse(width/2,height/2,temp_max*5,temp_max*5);
  fill(0,0,255);
  ellipse(width/2,height/2,temp_min*5,temp_min*5);
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  if (temp) {
   text(temp,width/2,height/2);
  }
}

function receivedWeather(weather) {
  console.log(weather);
  temp = weather.main.temp;
  temp_min = weather.main.temp_min;
  temp_max = weather.main.temp_max;

}