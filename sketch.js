
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5,roof,r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(715,100,750,30);
	b1 = new Bob(515,200,90,90);
	b2 = new Bob(615,200,90,90);
	b3 = new Bob(715,200,90,90);
	b4 = new Bob(815,200,90,90);
	b5 = new Bob(915,200,90,90);
	r1 = new Rope(b1.body,roof.body,-250,0);
	r2 = new Rope(b2.body,roof.body,-150,0);
	r3 = new Rope(b3.body,roof.body,-50,0);
	r4 = new Rope(b4.body,roof.body,50,0);
	r5 = new Rope(b5.body,roof.body,150,0);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("black");

  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  drawSprites();
 
}

function keyPressed()
{
if(keyCode === UP_ARROW)
{
	Matter.Body.applyForce(b1.body,b1.body.position,{x:-200,y:-50});
}
}



