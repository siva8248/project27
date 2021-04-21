
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var b1,b2,b3,b4,b5;
var obj1,g,sling1,sling2,sling3,sling4,sling5;

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  g = new Ground(400,490,900,10);
  obj1 = new obj2(330,150,550,20);
  b1 = new ball(120,250,50);
  b2 = new ball(220,250,50);
  b3 = new ball(320,250,50);
  b4 = new ball(420,250,50);
  b5 = new ball(520,250,50);  
  sling1 = new SlingShot(b1.body,{x:120,y:150});
  sling2 = new SlingShot(b2.body,{x:220,y:150});
  sling3 = new SlingShot(b3.body,{x:320,y:150});
  sling4 = new SlingShot(b4.body,{x:420,y:150});
  sling5 = new SlingShot(b5.body,{x:520,y:150});
}

function draw() {
  background(255);
  Engine.update(engine);
  g.display();  
  obj1.display();
  b1.display();  
  b2.display();  
  b3.display();  
  b4.display();  
  b5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();   
  drawSprites(); 
}
function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-486,y:467});
	}
}




