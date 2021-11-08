var player, brick1 ,brick2, edges, goal,brick3, brick4, brick6,brick5
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  goal=createSprite(560,50,50,50)
  goal.shapeColor="pink"
  player=createSprite(40,550,50,50)
  edges=createEdgeSprites()
  brick1=createSprite(80,270,150,20)
  brick1.shapeColor="red"
  brick2=createSprite(300,270,150,20)
  brick2.shapeColor="red"
  brick3=createSprite(510,270,150,20)
  brick3.shapeColor="red"
  brick4=createSprite(100,350,150,20)
  brick4.shapeColor="red"
  brick5=createSprite(320,350,150,20)
  brick5.shapeColor="red"
  brick6=createSprite(540,350,150,20)
  brick6.shapeColor="red"
}

function draw() {
  background("green");  
  drawSprites()
  player.shapeColor="white"
  player.bounceOff(edges[0])
  player.bounceOff(edges[1])
  player.bounceOff(edges[2])
  player.bounceOff(edges[3])
  if (keyDown("up")){
    player.y=-4
  }
  if(keyDown("down")){
    player.y +=4
  }
  if(keyDown("left")){
    player.x -=4
  }
  if(keyDown("right")){
    player.x +=4
  }
  if(player.isTouching(goal)){
    
    text("YOU WIN",200,200);
  }
  if(player.isTouching(brick1)){
    player.x=40;
    player.y=550;
    
  }
  if(player.isTouching(brick2)){
    player.x=40;
    player.y=550;
    
  }
  if(player.isTouching(brick3)){
    player.x=40;
    player.y=550;
    
  }
  if(player.isTouching(brick4)){
    player.x=40;
    player.y=550;
    
  }
  if(player.isTouching(brick5)){
    player.x=40;
    player.y=550;
    
  }
  if(player.isTouching(brick6)){
    player.x=40;
    player.y=550;
    
  }
}
