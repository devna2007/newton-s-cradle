const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var ground;
var pendulum;


function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MOuseConstraint.create(engine, options);
  World.add(World, mConstraint);

 pendulum = new Pendulum(500, 50);
  
}

function draw() {
  background(180);
  Engine.update(engine);
  pendulum.display();
}


function mouseDragged() {
  Matter.Body.setPosition(pendulum.body, { x: mouseX, y: mouseY });
}


