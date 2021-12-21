function preload(){
    bg= loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,500);
  
}

function draw() {
  background(bg);  
  snowfall();
  drawSprites();
}

function snowfall(){
  if(frameCount % 4 === 0){
    var snow= createSprite(600, 0, 40, 10);
    snow.x = Math.round(random(0,800)) 
    snow.addImage(snowImg);
    snow.scale = 0.2;
    snow.velocityY = 3;
  }
}