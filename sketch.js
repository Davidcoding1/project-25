var ball;
var edges;

function setup(){
  ball=createSprite(200,200,20,20);
  ball.shapeColor="green";
  ball.velocityX=2;
  ball.velocityY=5;
  edges=createEdgeSprites();
 
}
function draw(){
    background("black");
    ball.bounceOff(edges);
    drawSprites();
  
}



