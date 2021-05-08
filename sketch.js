const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 


var backgroundimg;
var snowimg;

var snows = [];



function preload(){
  backgroundimg = loadImage("snow3.jpg");
  
};
function setup() {
  createCanvas(800,400);
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
 // back = createSprite(600,400);
 // back.addImage(backgroundimg);


}


function draw() {
  background(backgroundimg);
  Engine.update(engine); 
 // drawSprites();
  if(frameCount%5 === 0){
    snows.push(new snow(random(10, width-10),  10,50)); 
   } 
   for (var k = 0; k < snows.length; k++) {
    snows[k].display();
  } 
};