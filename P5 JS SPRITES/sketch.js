var box;
function setup() {
  createCanvas(400, 400);
  box = createSprite(40, 40, 40, 40);
  box.shapeColor = "white";
  //horizontal
  box.setVelocity(0.5,0);
  //vertical
  //box.setVelocity(0,0.5);
}
function draw() {
  background("orange");
  drawSprites();
}




  