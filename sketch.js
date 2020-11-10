var fixedRect, movingRect, R3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  R3 = createSprite(300,100,50,50);
  R3.shapeColor = "green";
  R3.debug = true;
  movingRect.velocityY = -2;
  fixedRect.velocityY = 2;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  //if(isTouching(movingRect, R3)){
    //movingRect.shapeColor = "red";
    //R3.shapeColor = "red";
  //}
  //else{
 //movingRect.shapeColor = "blue";
 //R3.shapeColor = "blue";
  //}
  bounceOff(movingRect, fixedRect)
  drawSprites();
}
