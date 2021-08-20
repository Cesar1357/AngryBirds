const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5;
var Ground;
var platform;
var Pig1, Pig2;
var log1, log2, log3, log4;
var bird;
var bgimage;
var Sling;
var gameState = "start";
var bg;
var score = 0;

function preload(){
    getbackground();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    Ground = new ground(600,height,1200,20);
    platform = new ground(150,305,300,170);

    Pig1 = new pig(810,350);
    Pig2 = new pig(810,255);

    log1 = new log(810,260,300,PI/2);
    log2 = new log(810,180,300,PI/2);
    log3 = new log(740,125,150,PI/4);
    log4 = new log(880,125,150,-PI/4);

    bird = new Bird(100,50);

    Sling = new slingshot(bird.body,{x:180,y:50});

    
}

function draw(){
    if(bg)
        background(bg);

        noStroke();
        textSize(35);
        fill("white");
        text("score: " + score,width-300,50);

    Engine.update(engine);
    box1.display();
    box2.display();
    Ground.display();
    platform.display();
    Pig1.display();
    Pig1.score();
    log1.display();
    box3.display();
    box4.display();
    Pig2.display();
    Pig2.score();
    log2.display();
    log3.display();   
    log4.display();
    box5.display();
    bird.display();
    Sling.display();

    
    
}

function mouseDragged(){
    if(gameState !== "launched"){
     Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}

function mouseReleased(){
    Sling.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        //Sling.attach(bird.body);

    }
}

async function getbackground(){
    var response = await fetch("http://worldtimeapi.org/api/ip");
    var responseJSON = await response.json();
    console.log(responseJSON.datetime);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour >= 06 && hour <= 19 ){
        bgimage = "bg.png";
    }
    else {
        bgimage = "bg2.jpg";
    }
    bg = loadImage(bgimage);
}

//< >