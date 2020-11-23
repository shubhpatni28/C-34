
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//suspension=createSprite(290,200,600,200);
bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);
//bob6=new Bob(150,250,30);
 //fill ("brown");
  ground1 = new Ground(400,100,300,40);
  sling1= new pendulum(bob1.body,ground1.body,-50*2,0);
  sling2= new pendulum(bob2.body,ground1.body,-25*2,0);
  sling3= new pendulum(bob3.body,ground1.body,-0*2,0);
  sling4= new pendulum(bob4.body,ground1.body,25*2,0);
  sling5= new pendulum(bob5.body,ground1.body,50*2,0);
  //sling6= new Suspender(bob6.body,ground1.body,-40*2,0);
	Engine.run(engine);
  
}


function draw() {
  background(100);
//	ground.fill(48,22,8);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //bob6.display();
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  //sling6.display();

  //keyPressed();
  drawSprites ();
}


function mouseDragged(){

  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}


function mouseDragged(){

  Matter.Body.setPosition(bob2.body,{x:mouseX,y:mouseY})
}

function mouseDragged(){

  Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY})
}

function mouseDragged(){

  Matter.Body.setPosition(bob4.body,{x:mouseX,y:mouseY})
}

function mouseDragged(){

  Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})
}



