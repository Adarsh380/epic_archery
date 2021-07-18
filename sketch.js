const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player_base, player, computer_base, computer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   player_base = new PlayerBase(300, random(450, height-300), 180, 150);
   player = new Player(285, player_base.body.position.y-153, 50, 180);
   computer_base = new ComputerBase(windowWidth-300, random(450, height-300), 180, 150);
   computer = new ComputerPlayer(windowWidth-315, computer_base.body.position.y-153, 50, 180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  player_base.display();
  player.display();
  computer_base.display();
  computer.display();
}
