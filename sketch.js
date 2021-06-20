var spsh,spshImg;
var bg,bgImg;

var lgun1,lgun1Img;
var lgun2,lgunImg;
var bullets;
var stars,starsImg;
var stars1,stars1Img;

var score;
var life;
var gameState;
function setup() 
{
  createCanvas(windowWidth,windowHeight);
  //(880,600)
  score = 0;
  life = 100;
  bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  
  bg.addImage("bg",bgImg)
  spsh=createSprite(windowWidth/2,570,windowWidth,120);
  spsh.addImage("spsh",spshImg)
  spsh.scale = 1.5;
  
  lgun1 = createSprite(50,250);
  lgun1.addImage("lgun1",lgun1Img)
  lgun1.scale = 0.4;
  lgun2 = createSprite(windowWidth-50,250);
    lgun2.addImage("lgun2",lgun2Img)
  lgun2.scale = 0.4;
  bulletsGroup = new Group();
  bullets2Group = new Group();
  starsGroup = new Group();
  
  stars1Group = new Group();
  
  
  gameState= 0
}

function preload()
{
  lgun1Img = loadImage("gun.png");
  lgun2Img = loadImage("gun flip.png");
  spshImg = loadImage("spaceship.png");
  bgImg = loadImage("space ship2.0.PNG");
  starsImg = loadImage("dc8X7qMRi (2).png");
   stars1Img = loadImage("spaceship(1).png");
  //sound = loadSound("spooky.wav");
}










function draw() 
{ 

  background(220);
  
  text("Score: "+ score, windowWidth-100,50);
  text("Durability: "+ life,50,50);
 if(gameState == 0){    
  //spawnBullets();
  spawnStars();
  spawnStars1();
  
 
  
  if(bulletsGroup.isTouching(starsGroup))
{
     starsGroup.destroyEach();
    score = score +5;
}
   
  if (stars1Group.isTouching(spsh))
  {life = life -10}
    if (life <= 0)
      {
        gameState = 1
      }
  
  if(bulletsGroup.isTouching(stars1Group))
  {
    stars1Group.destroyEach();
    score = score +10;
  }
  
  if (keyWentDown("space"))
  {spawnBahubali();}
  
  if (keyWentDown(RIGHT_ARROW))
  {spawnBullets2();
   
  }
  if (keyWentDown(LEFT_ARROW))
  {spawnBullets();}
  

  
  drawSprites();
   
} 

if (gameState ==1 )
{
      stroke("yellow")
    fill ("orange")
    textSize (80);
    text ("#game over",230,230)
    if (keyDown ("r")){gameState = 0}
}

}
   

function spawnBullets()
{
  
  
    bullets = createSprite(150,250,30,10) 
    bullets.velocityX = 10;
   bullets.shapeColor="red";
    bullets.lifetime = 50;
  bulletsGroup.add(bullets);
  
  
  //while(mouse.x !== bullets.x&& mouseY !== bullets.y){
    //if(mouse.x < bullets.x)
    //{ bullets.x=bullets.x+5;}
    
    //else{ bullets.x=bullets.x-5
  //} 
    //if(mouse.y < bullets.y)
  //{ bullets.y=bullets.y+5;
  //}     
    //else{ bullets.y=bullets.y-5

    //}
    //}
}
  
  function spawnBullets2()
{    bullets = createSprite(windowWidth-150,250,30,10) 
    bullets.velocityX = -10;
 bullets.shapeColor="red";
    bullets.lifetime = 50;
  bulletsGroup.add(bullets);
  

}

function spawnStars()
{
  if(frameCount%50 === 0)
  {
stars = createSprite(100,-600,30,30) 
    stars.addImage("stars",starsImg)
    stars.scale = 0.03
    stars.velocityY = 10;
    //stars.lifetime = 15;
    stars.x=Math.round(random (80,800))
    
  starsGroup.add(stars)
  } 
  
}
function spawnStars1()
{
  if(frameCount%100 === 0)
  {
stars1 = createSprite(100,-600,30,30) 
     stars1.addImage("stars1",stars1Img)
    stars1.scale = 0.3
    stars1.velocityY = 10;
    //stars.lifetime = 15;
    stars1.x=Math.round(random (80,800))
  stars1Group.add(stars1)
  } 
  
}



function spawnBahubali()
{
  
    bahubali = createSprite(windowWidth/2,windowHeight-120,50,50) 
    bahubali.velocityY = -10;
    bahubali.lifetime = 50;
 bahubaliGroup.add(bahubali);
   }