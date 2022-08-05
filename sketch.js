
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var barata;
var backgroundImg;



function preload() {
   backgroundImg = loadImage("./img/fundo.jpg");
  
  
  }


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() {

  background(51);
  Engine.update(engine);
  
  image(backgroundImg, 0, 0, 400, 400);

  criabatatinha()
    
    
}

function criabatatinha(){


  if (frameCount % 60 === 0) {
    brt = Math.round(random(80,120));
    


barata = new Barata (brt,-10)
barata.display()

  }



  
}


