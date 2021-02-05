var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50,200,70,20);
  bullet.velocityX=speed;
 
  wall=createSprite(1400,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  


}

function draw() {
  background(0,0,0); 
  console.log(isTouching(bullet,wall))
    if (isTouching(bullet,wall)){
bullet.velocityX=0
var Damage= 0.5 * weight * speed * speed /(thickness * thickness * thickness);
console.log(Damage);

  if (Damage > 10){
    wall.shapeColor=color(255,0,0);
  }

  if (Damage < 10){
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}
function isTouching(obj1,obj2){
  if ( obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
      return true
}
else {
  return false
}
}