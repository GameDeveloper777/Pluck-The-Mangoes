
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,700,1000,40);
	boy = new Boy(200,600,200,300);
	tree = new Tree(800,400,400,500);
	mango1 = new Mango(800,250,50,50);
	mango2 = new Mango(760,250,50,50);
	mango3 = new Mango(950,300,50,50);
	mango4 = new Mango(810,330,50,50);
	mango5 = new Mango(750,370,50,50);
	mango6 = new Mango(920,350,50,50);
	stone1 = new Stone(150,550,50,50);

	string = new String(stone1.body,{x:150, y:525});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  ground.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  
  if(string.chain.bodyA!==null){
    string.display();
  }
  drawSprites();
 
}

function mouseDragged(){
	stone1.body.position.x = mouseX;
	stone1.body.position.y = mouseY;
 }
 
 function mouseReleased(){
	string.chain.bodyA=null;
 
 }

 function dectollision(lstone,lmango){
	 mangoBodyPosition=	lmango.body.position
	 stoneBodyPosition=	lstone.body.position

	 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	 if(distance<-lmango.r+lstone.r)
	 {
		 Matter.Body.setStatic(lmango.body,false);
	 }
 }

 function keyPressed(){
	 if(keyCode===32){
		 Matter.Body.setPosition(stone1.body,{x:235,y:420})
		 launcherObject.attach(stone1.body);
	 }
 }