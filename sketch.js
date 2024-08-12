var sea, seaImagen;
var ship, shipAnimation;


function preload(){
 seaImagen=loadImage("sea-1.png");
 shipAnimation=LoadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprites(200, 200)
  sea=addImage("sea", seaImagen);
  sea.x = sea.width /2
  ship=createSprites(200,200)
  ship=addAnimation("ship", shipAnimation);
  
}

function draw() {
  background("blue");
 if(sea < 0){
  sea.x=sea.width /2
 }
  drawSprites()
}