
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,690,1200,20);

	paper = new Paper(200,320,70,70);

	dustbin1= new Dustbin(380,650,100,20);
	dustbin2= new Dustbin(330,610,20,100);
	dustbin3= new Dustbin(430,610,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();

  function keyPressed() {
	  if(keyCode===UP_ARROW) {

		Matter.Body.applyForce(paperObject.body.position,{x:85,y:-85});
	  }
  }
 
}



