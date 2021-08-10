var ship , shipImg ;
var sea , seaImg ;

function preload(){
shipImg = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.3;

  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip" , shipImg );
  ship.scale = 0.25 ;

  
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/8 ;
  }
 drawSprites();
}