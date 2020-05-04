var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(400, 200, 50, 50);
  car.shapeColour="white";
  wall=createSprite(1500, 200, 60, height/2);
  car.velocityX=speed;
  car.shapeColour="white";
  wall.shapeColour="blue";
}

function draw() {
  background(0,0,0); 
  wall.shapeColour="white";
  car.shapeColour="blue";
  car.collide(wall)
  if(wall.x-car.x<(car.width+wall.width)/2){
   car.velocityX=0;
 var deformation=0.5*weight*speed*speed/22509;
 if(deformation>180){
  car.velocityX=0;
  car.shapeColour="green";
}
if(deformation>=100 && defprmation<=180){
  car.velocityX=0;
  car.shapeColour="yellow";
}  
if(deformation<100){
  car.velocityX=0;
  car.shapeColour="red";
}

 }
  

  drawSprites();
}