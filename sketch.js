
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
	Roof= new roof(400,100,300,30);

	bob1 = new bob(400,700);
	bob2 = new bob(350,700);
	bob3 = new bob(450,700);
	bob4 = new bob(300,700);
	bob5 = new bob(500,700);

	
	rope1=new Rope(bob1.body,Roof.body,0);
	rope2=new Rope(bob2.body,Roof.body,-50);
	rope3=new Rope(bob3.body,Roof.body,50);
	rope4=new Rope(bob4.body,Roof.body,-100);
	rope5=new Rope(bob5.body,Roof.body,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Roof.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

}
function keyPressed (){

if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-100,y:-100});
}
}

/*function drawLine(constraint){
bobBodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position

roofBodyOffset=constraint.pointB

roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y
line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY)


}*/
