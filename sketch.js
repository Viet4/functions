var fixedRect, movingRect;

var o1, o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1 = createSprite(600, 400,80,30);
  o1.shapeColor = "green";
  o1.debug = true;

  o2 = createSprite(200, 400,80,30);
  o2.shapeColor = "green";
  o2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  o1.velocityX = -5;
  o2.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(o1,o2);
  bounceOff(movingRect,fixedRect);

  if (isTouching(o1,o2)) {
    o1.shapeColor = "red";
    o2.shapeColor = "red";
  }
  else {
    o1.shapeColor = "green";
    o2.shapeColor = "green";
  }


  if (isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}
