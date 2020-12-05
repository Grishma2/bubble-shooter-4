const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var pinkImg, blueImg, purpleImg, orangeImg, greenImg, backgroundImg, pandaImg, arrowImg;
var pink, blue, purple, orange, green, background, panda, arrow;
var pinkGroup, blueGroup, purpleGroup, orangeGroup, greenGroup

function preload(){
    pinkImg = loadImage("pink bubble.png");
    blueImg = loadImage("blue bubble.png");
    purpleImg = loadImage("purple bubble.png");
    orangeImg = loadImage("orange bubble.png");
    greenImg = loadImage("green bubble.png");
    backgroundImg = loadImage("background.jpg");
    pandaImg = loadImage("panda.png");
    arrowImg = loadImage("arrow.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    panda = createSprite(600,700,10,10);
    panda.addImage(pandaImg);
    panda.scale = 0.5;

    pinkGroup = createGroup();
    blueGroup = createGroup();
    purpleGroup = createGroup();
    greenGroup = createGroup();
    orangeGroup = createGroup();
}

function draw(){
    background(backgroundImg);

    spawnPink();
    spawnBlue();
    spawnPurple();
    spawnOrange();
    spawnGreen();
   
    if(keyDown(LEFT_ARROW)){
        panda.x = panda.x-4;
    }

    if(keyDown(RIGHT_ARROW)){
        panda.x = panda.x+4;
    }

    if(keyWentDown("space")){
        spawnArrow();
    }

    Engine.update(engine);

    drawSprites();
}

function spawnArrow(){
    arrow = createSprite(500,740,10,10);
    arrow.addImage(arrowImg);
    arrow.scale = 0.2;
    arrow.x = panda.x;
    arrow.velocityY = -5;

    if(arrow.isTouching(pinkGroup)){
        pinkGroup.destroy();
        arrow.destroy();
    }

    if(arrow.isTouching(blueGroup)){
        blueGroup.destroy();
        arrow.destroy();
    }

    if(arrow.isTouching(purpleGroup)){
        purpleGroup.destroy();
        arrow.destroy();
    }

    if(arrow.isTouching(greenGroup)){
        greenGroup.destroy();
        arrow.destroy();
    }

    if(arrow.isTouching(orangeGroup)){
        orangeGroup.destroy();
        arrow.destroy();
    }
}

function spawnPink(){
    if(frameCount%100 === 0){
        pink = createSprite(200,200,10,10);
        pink.addImage(pinkImg);
        pink.x = Math.round(random(0,400));
        pink.y = Math.round(random(20,400));
        pink.scale = 0.05;
        pink.velocityX = 3;
        pink.lifetime = 600;
    }
    pinkGroup.add(pink);
}

function spawnBlue(){
    if(frameCount%60 === 0){
        blue = createSprite(400,200,10,10);
        blue.addImage(blueImg);
        blue.x = Math.round(random(0,400));
        blue.y = Math.round(random(30,400));
        blue.scale = 0.05;
        blue.velocityX = 5;
        blue.lifetime = 240;
    }
    blueGroup.add(blue);
}

function spawnPurple(){
    if(frameCount%80 === 0){
        purple = createSprite(600,200,10,10);
        purple.addImage(purpleImg);
        purple.x = Math.round(random(0,400));
        purple.y = Math.round(random(40,400));
        purple.scale = 0.2;
        purple.velocityX = 4;
        purple.lifetime = 300;
    }
    purpleGroup.add(purple);
}

function spawnOrange(){
    if(frameCount%120 === 0){
        orange = createSprite(800,200,10,10);
        orange.addImage(orangeImg);
        orange.x = Math.round(random(0,400));
        orange.y = Math.round(random(60,400));
        orange.scale = 0.1;
        orange.velocityX = 4;
        orange.lifetime = 300;
    }
    orangeGroup.add(orange);
}

function spawnGreen(){
    if(frameCount%200 === 0){
        green = createSprite(1000,200,10,10);
        green.addImage(greenImg);
        green.x = Math.round(random(0,400));
        green.y = Math.round(random(20,300));
        green.scale = 0.2;
        green.velocityX = 6;
        green.lifetime = 200;
    }
    greenGroup.add(green);
}