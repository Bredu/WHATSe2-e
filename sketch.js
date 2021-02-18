var a, b, c, d

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(400,200,40,40);
  c = createSprite(100,200,40,40);
  d = createSprite(300,200,40,40);
  d.velocityX = -2;
  c.shapeColor = "red";
  b.shapeColor = "red";
  a.shapeColor = "red";
}

function draw() {
  background(255,255,255);  

b.x = World.mouseX;
b.y = World.mouseY;

if(isTouching(a, b)){
  a.shapeColor = "green";
  b.shapeColor = "green";
}else{
  a.shapeColor = "red";
  b.shapeColor = "red";}

if(isTouching(c, b)){
  c.shapeColor = "green";
  b.shapeColor = "green";
}else{
  c.shapeColor = "red";
  b.shapeColor = "red";}

  bounceOff(c,d);
  bounceOff(a,d);
  drawSprites();
}

