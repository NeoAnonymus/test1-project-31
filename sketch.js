const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var manImg


function preload() {
    backgroundImg = loadImage("nightBg.jpg");
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    rainfall = new Drops(0,0,5)


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    rainfall.display();
    
}

