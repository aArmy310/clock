var hr, mn,sc;
var bg;

function preload(){
  bg = loadImage("bg.jpg");
}
function setup() {
  createCanvas(600,600);
}

function draw() {
 // image.resize(600,600);
  background(bg,600,600);  
 
  // calculating time
  hr = hour();
  mn = minute();
  sc = second();

  fill("brown");
  text("12", 280, 200);
  text("3", 400, 305);
  text("6", 280, 400);
  text("9", 180, 305);

  translate(300,300);
  rotate(-90);
 angleMode(DEGREES);
  strokeWeight(7);
  stroke(252, 230, 189);
  noFill();
  var sc = map(sc,0 , 60, 0, 360);
  arc(0,0, 300, 300, 0, sc);
 
  stroke(253, 207, 179);
  var mn = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mn);

  stroke(206,202,228);
  var hr = map(hr % 12, 0, 12, -0, 360);
  arc(0, 0, 260, 260, 0, hr);
 

 
 //to create clock hands
  push();
  rotate(sc);
  stroke(252, 230, 189);
  strokeWeight(3);
  line(0,0,80,0);
  pop();

  push();
  rotate(mn);
  strokeWeight(5);
  stroke(206,202,228);
  line(0, 0, 100, 0); 
  pop();

  push();
  rotate(hr);
  stroke(253, 207, 179);
  strokeWeight(7);
  line(0, 0, 60, 0);
  pop();

  stroke(255);
  point (0,0);
  
  //drawSprites();

}