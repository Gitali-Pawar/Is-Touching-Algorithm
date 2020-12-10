var ball;
var movingRect;



function setup() {
  createCanvas(800,400);

 ball=  createSprite(500, 200,100,100);
  ball.shapeColor = "red"
 ball.debug = true;

  movingRect=  createSprite(100, 200, 100,100);
  movingRect.shapeColor = "red"
  movingRect.debug = true;
}

function draw() {
  background(250,180,180);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //console.log(fixedRect.x - movingRect.x)

if(isTouching(ball,movingRect)){
console.log("movingRect is toching the ball");
movingRect.shapeColor = "blue";
ball.shapeColor = "yellow";
}
  else {
    console.log("ball is red");
    ball.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  


  drawSprites();
}

function isTouching(object1,object2){

  if(object1.x - object2.x < object1.width/2 + object2.width/2   &&
    object2.x - object1.x < object1.width/2 + object2.width/2  && 
    object1.y - object2.y < object1.height/2 + object2.height/2  &&
     object2.y -object1.y < object1.height/2 + object2.height/2  ){

  return true;
 }

 else{
return false ;
  
 }





}