
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  trash = new Ball(200,200);

	Engine.run(engine);
  
    ground = new Ground(350,320,900,30,);
    dustbin1 = new Dustbin(450,250,10,100);
    dustbin2 = new Dustbin(550,250,10,100);
    dustbin3 = new Dustbin(500,300,100,10);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  trash.display();
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    
    Matter.Body.applyForce(trash.body,trash.body.position,{x:55,y:-55});
  }
}



