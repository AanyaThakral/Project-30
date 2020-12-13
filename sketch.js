const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(600,580,1200,20);

  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,30,30);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  block1 = new Block(480,275,30,40);
  block2 = new Block(450,275,30,40);
  block3 = new Block(420,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(360,275,30,40);
  block6 = new Block(330,275,30,40);
  block7 = new Block(300,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  
  b1 = new Block(900,275,30,40);
  b2 = new Block(900,315,30,40);
  b3 = new Block(870,315,30,40);
  b4 = new Block(930,315,30,40);
  b5 = new Block(900,355,30,40);
  b6 = new Block(870,355,30,40);
  b7 = new Block(840,355,30,40);
  b8 = new Block(930,355,30,40);
  b9 = new Block(960,355,30,40);
  


}

function draw() {
  background("black");
  
  fill("white");
  ground.display();
  fill("pink");
  ground2.display();
  fill("#99EDC3")
  ground3.display();
  
  fill("white");
  text("Drag the hexagonal stone and Release it towards the blocks",450,50);
  text("Press Space Bar to get another chance",500,70);

  fill("pink");
  block1.display();
  fill("purple");
  block2.display();
  fill("pink");
  block3.display();
  fill("purple");
  block4.display();
  fill("pink");
  block5.display();
  fill("purple");
  block6.display();
  fill("pink");
  block7.display();
  fill("purple");
  block8.display();
  fill("pink");
  block9.display();
  fill("purple");
  block10.display();
  fill("pink");
  block11.display();
  fill("purple");
  block12.display();
  fill("pink");
  block13.display();
  fill("purple");
  block14.display();
  fill("pink");
  block15.display();
  fill("purple");
  block16.display(); 
  

  fill("#99EDC3");
  b1.display();
  fill("#9CECFF");
  b2.display();
  fill("#99EDC3");
  b3.display();
  fill("#99EDC3");
  b4.display();
  fill("#99EDC3")
  b5.display();
  fill("#9CECFF");
  b6.display();
  fill("#99EDC3");
  b7.display();
  fill("#9CECFF");
  b8.display();
  fill("#99EDC3");
  b9.display();

  polygon.display();

  launcher.display();
  drawSprites();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
}

function mouseReleased()  {
  launcher.fly();
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200});
    launcher.attach(polygon.body);

  }

}

