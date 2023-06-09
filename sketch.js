const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
let button1

var bg_img;
var food;
var rabbitImg, rabbit

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbitImg = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  rabbit = createSprite(240, 600, 10, 10)
  rabbit.addImage (rabbitImg)
  rabbit. scale = 0.25
  fruit_con = new Link(rope,fruit);
button1 = createImg("cut_button.png")
button1.size(50,50)
button1.position(220,40)
button1.mouseClicked(drop)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{

  background(51);

  image(bg_img,width/2,height/2,490,690);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

 drawSprites()
   
}

function drop(){
  rope.break()
  fruit_con.detatch()
  fruit_con = null

}