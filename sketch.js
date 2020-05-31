var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 200, 50, 50);
  movingRect=createSprite(400,200,80,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(0,0,0);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.hight/2+movingRect.hight/2 &&
    fixedRect.y-movingRect.y<fixedRect.hight/2+movingRect.hight/2){
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
    }
    else{
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";  
    }  
  drawSprites();
}