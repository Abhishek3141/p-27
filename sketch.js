
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bob1 = new bob(150, 600,200)
	bob2 = new bob(250, 600,200)
	bob3 = new bob(350, 600,200)
	bob4 = new bob(450, 600,200)
	bob5 = new bob(550, 600,200)
	Roof = new roof(400, 150, 600, 100)
	rope1 = new rope(bob1.body, Roof.body, -bobDiameter*2, 0 );
	rope2 = new rope(bob2.body, Roof.body, -bobDiameter*2, 0 );
	rope3 = new rope(bob3.body, Roof.body, -bobDiameter*2, 0 );
	rope4 = new rope(bob4.body, Roof.body, -bobDiameter*2, 0 );
	rope5 = new rope(bob5.body, Roof.body, -bobDiameter*2, 0 );

}




function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  Roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:--200} );
	}
}

