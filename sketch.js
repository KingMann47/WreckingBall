const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var tower1,tower2,tower3,tower4,tower5,tower6;
var ball,rope;
var ground;
function setup(){
createCanvas(2000,500)
engine=Engine.create();
world=engine.world;



ground=new Ground(700,400,1200,20)

tower1= new Tower(900,300,70,70)
tower2= new Tower(830,300,70,70)
tower3= new Tower(760,300,70,70)
tower4= new Tower(865,230,70,70)
tower5= new Tower(795,230,70,70)
tower6= new Tower(830,160,70,70)

ball= new Ball(350,250,80,80)

rope= new Rope(ball.body,{x:650,y:100})

}
function draw(){
background("black")
Engine.update(engine);


ground.display()
tower1.display()
tower2.display();
tower3.display();
tower4.display()
tower5.display();
tower6.display();
ball.display();
rope.display();
}

function mouseDragged(){

    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
    
}