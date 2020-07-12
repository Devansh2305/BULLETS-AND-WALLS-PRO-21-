var bullet,speed,weight;
var wall,thickness;

var deformation;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,30,20);
  bullet.shapeColor="black";
  wall=createSprite(500,200,thickness,height/2);
  wall.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  speed=random(10,12);
  weight=random(30,32);
  thickness=random(20,22);
 
//if(bullet.collide(wall)){
//deformation=  0.5*bulletweight*bulletspeed*bulletspeed/thicknessofwall*thicknessofwall*thicknessofwall;

if(bullet.collide(wall)){
  deformation=0.5*weight*speed*speed/thickness*thickness*thickness
}

if(deformation>3 ){
bullet.shapeColor="red";
text("THE WALL IS NOT EFFECTIVE AGAINST BULLET",110,200);
}




  bullet.velocityX=speed/5;
  drawSprites();
}
