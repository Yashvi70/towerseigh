const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,100,50,50);
    box2 = new Box(800,150,50,50);
    box3 = new Box(800,200,50,50);
    box4 = new Box(800,250,50,50);
    box5 = new Box(800,300,50,50);
    box6 = new Box(800,350,50,50);
    box7 = new Box(800,400,50,50);
    box8 = new Box(800,450,50,50);
    box9 = new Box(850,100,50,50);
    box10 = new Box(850,150,50,50);
    box11 = new Box(850,200,50,50);
    box12 = new Box(850,250,50,50);
    box13 = new Box(850,300,50,50);
    box14 = new Box(850,350,50,50);
    box15 = new Box(850,400,50,50);
    box16 = new Box(850,450,50,50);
    box17 = new Box(850,500,50,50);
    box18 = new Box(850,550,50,50);
    box19 = new Box(900,100,50,50);
    box20 = new Box(900,150,50,50);
    box21 = new Box(900,200,50,50);
    box22= new Box(900,250,50,50);
    box23= new Box(900,300,50,50);
    box24= new Box(900,350,50,50);
    box25= new Box(900,400,50,50);
    box26= new Box(900,450,50,50);
    ground = new Ground(600,600,1200,20)
    ball1 =  new Ball(100,100,80,80,PI/2) ;

    rope = new Rope(ball1.body, { x: 650, y: 50 });
}

function draw(){
    background("skyblue");
    fill("purle")
    textSize(30)
    stroke("grey")
    strokeWeight(5)
    text("TOWER SEIGH ", 50,100)
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    
    

    
    ground.display();
    ball1.display();

    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX, y:mouseY});
}