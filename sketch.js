var smoke1 = [];
var smoke2 = [];
var smoke3 = [];
var smoke4 = [];

var balls = [];
var outline1;
var outline2;
var outline3;
var outline4;
var five1, five1IMG;
var five2, five2IMG;
var two1, two1IMG;
var two2, two2IMG;
var one, oneIMG;
var score = 0;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;

var plates = [];


function preload(){
  fiveIMG = loadImage("500.png");
  twoIMG = loadImage("200.png");
  oneIMG = loadImage("100.png");
}
function setup(){
    var canvas = createCanvas(600,650);
    engine = Engine.create();
    world = engine.world;

    five1 = createSprite(70,430,20,20);
    five1.addImage(fiveIMG);
    five1.scale = 0.1;

    five2 = createSprite(540,430,20,20);
    five2.addImage(fiveIMG);
    five2.scale = 0.1;

    two1 = createSprite(185,430,20,20);
    two1.addImage(twoIMG);
    two1.scale = 0.125;

    two2 = createSprite(425,430,20,20);
    two2.addImage(twoIMG);
    two2.scale = 0.125;

    one = createSprite(300,433,20,20);
    one.addImage(oneIMG);
    one.scale = 0.155;


    outline1 = new Outline(300,645,760,10);
    
    outline2 = new Outline(300,5,760,10);
   
    outline3 = new Outline(5,645,10,1400);
   
    outline4 = new Outline(595,645,10,1400);
    
    
    for (var i = 125; i<=width; i=i+120){
      plates.push(new Plate(i,520,10,250));
    }

    for (var i = 20; i<=width; i=i+70){
      smoke1.push(new Smoke(i,70,10,10));
    }

    for (var i = 70; i<=width; i=i+80){
      smoke2.push(new Smoke(i,130,10,10));
    }

    for (var i = 20; i<=width; i=i+70){
      smoke3.push(new Smoke(i,190,10,10));
    }

    for (var i = 70; i<=width; i=i+80){
      smoke4.push(new Smoke(i,260,10,10));
    }
    

    var render = Render.create({
      element:document.body,
      engine:engine,
      options:{
        width:600,
        height:650,
        wireframes:false
      }
    })
    
    Render.run(render)
  }

function draw(){
    background("purple");
    Engine.update(engine);
    five1.display();
    five2.display();
    two1.display();
    two2.display();
    one.display();
    outline1.display();
    outline2.display();
    outline3.display();
    outline4.display();

    

    for(var k=0;k<smoke1.length;k++){
      smoke1[k].display();
    }

    for(var l=0;l<plates.length;l++){
      plates[l].display();
    }

    for(var k=0;k<smoke2.length;k++){
      smoke2[k].display();
    }

    for(var k=0;k<smoke3.length;k++){
      smoke3[k].display();
    }

    for(var k=0;k<smoke4.length;k++){
      smoke4[k].display();
    }

   if(frameCount%5===0){
    ball = new Ball(random(10,640),20,10);
    balls.push(ball);
   }

   for(var k=0;k<balls.length;k++){
    balls[k].display();
  }
}