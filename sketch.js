
var fixedRect, movingRect;
var gameObject1, gameObject2;
var c

function setup() {
  createCanvas(1200,800);
 c = createSprite(200,200,90,30);
 c.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,c)){
    movingRect.shapeColor = "blue";
    c.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - b.y < b.height/2 + a.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


