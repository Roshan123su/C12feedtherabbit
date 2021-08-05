var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,leafImg,orangeLeafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg   = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  var select_sprites = Math.round(random(1,3));
  if(frameCount % 80 === 0){
    if(select_sprites == 1){
      createApples();
    } else if(select_sprites == 2){
      createLeaves();
  
    }else{
      createOrangeLeaves();
    }
  }
  

  drawSprites();
}
   
function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY = 2;
  apple.lifetime = 150;

}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.05;
  leaf.velocityY = 2;
  leaf.lifetime = 150;
}

function createOrangeLeaves(){
  orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.05;
  orangeLeaf.velocityY = 2;
  orangeLeaf.lifetime = 150;
}