var sea,ship;
var seaImg,shipImg;

function preload(){
  

  seaImg = loadImage("sea.png");
  shipImg  = loadAnimation("ship-1.png","ship-2.png");

}

function setup(){
  createCanvas(600,400);
  background("0");
   sea = createSprite  (300,200,50,50);
  sea.addImage (seaImg);
  sea.scale = 0.5;
  sea.velocityX = -5;
  // Moving background sprite
  
  //Moving ship sprite
  ship = createSprite (300,200,50,50);
  ship.addAnimation ("movingShip",shipImg);
  ship.scale = 0.5;
}

function draw() {
  background(0);
//code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
  
  
  //code to reset the background
    
  drawSprites();
}