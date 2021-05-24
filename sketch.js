var fixRect,movingRect,rect1,rect2,o1,o2,r1,r2,r3,r4

function setup() {
  createCanvas(800,400);
  fixRect=createSprite(200,200,50,50)
  movingRect=createSprite(100,100,50,80)
  fixRect.shapeColor="red"
  movingRect.shapeColor="red"
  rect1=createSprite(400,0,50,80)
  rect2=createSprite(400,600,80,30)
  rect1.shapeColor="orange"
  rect2.shapeColor="white"
  
  rect1.velocityY=+5;
  rect2.velocityY=-5;

  r1=createSprite(100,100,50,50);
  r2=createSprite(200,100,50,50);
  r3=createSprite(300,100,50,50)
  r4=createSprite(400,100,50,50)
  
  r1.shapeColor="teal"
  r2.shapeColor="teal"
  r3.shapeColor="teal"
  r4.shapeColor="teal"
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  //x axis touching
 
  bounceOff()

  console.log(movingRect.x);

  //(250-200===50)

if(isTouching(movingRect,r4)){
  r4.shapeColor="aqua"
  movingRect.shapeColor="aqua"
}
else{
  r4.shapeColor="red"
  movingRect.shapeColor="red"
}
  
  
  drawSprites();
}

