var thickness,wall;

var bullet,speed, weight; 

function setup() {
  createCanvas(1600, 400);


	speed=random(223,321);
	weight=random(30,50);
   
	bullet=createSprite(50, 200, 20,30); 
	bullet=random(22,83);  
	bullet.velocityX=speed;   
	bullet.shapeColor=color(255);


  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);
 
  if(hasCollided(bullet,wall)){
	bullet.velocityX=0;
	var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
		wall.shapeColor=colour(0,255,0);
	}
	if(damage>3){
		wall.shapeColor=colour(0,255,0);
	}
    }
  hasCollided();
  drawSprites();
 
}

function hasCollided(Lbullet,Lwall){
bulletRightEdge = bullet.X +bullet.width;
wallleftEdge=wall.X;
if(bulletRightEdge>=wallleftEdge){
	return  true
}
return false;



}
