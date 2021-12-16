var box;
function setup() {
  createCanvas(400, 400);
  box = createSprite(40, 40, 40, 40);
  box.shapeColor = "white"; 

  //For teacher activity 1 , velocityX will be set to 0.5:
  box.velocityX=0.5;//horizontal
  
  //For student activity 1 , velocityY will be set to 0.5:
  box.velocityY=0.5;//vertical
}
function draw() {
  background("orange");
  drawSprites();
} 