
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var wallr,wallb,walll;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	ground = Bodies.rectangle(400,350, 20, 10 , {isStatic:true} );
    World.add(world, ground);
	Engine.run(engine);

	ball1 = new ball(100,400,15);
	walll = new dustbin(600,550,10,120);
	wallr = new dustbin(700,550,10,120);
	wallb = new dustbin(650,605,100,10);




}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  wallr.display();
  wallb.display();
  walll.display();


  drawSprites();
 
}



