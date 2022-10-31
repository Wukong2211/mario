var background,backgroundImg;
var ground;
var mario,mario_Running;

function preload (){

    mario_Running=loadAnimation("mario1.png","mario2.png");
    backgroundImg= loadImage("background.png")
}

function setup(){


    createCanvas(1500,700);

    ground = createSprite(100,630,1500,20);
    ground.x=width/2;
    ground.visible=false;

    mario=createSprite(100,630,20,30);
    mario.addAnimation("running",mario_Running)


}

function draw(){

    background(backgroundImg);

    ground.velocityX=-4;

    if (ground.x < 0){
        ground.x = ground.width/2;
    }  

    drawSprites();
}




















