var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1400,400);
  car  = createSprite(50, 200, 50, 50);
  car.shapeColor="blue";
  

  wall = createSprite(1300,200,60,200);
  wall.shapeColor=rgb(80,80,80);
  

  speed = random(55,90);
  weight = random(400,1500);


  

  
}

function draw() {
  background(0);  
  
  car.velocityX = speed;

  dotx = wall.x - car.x;
  doth = car.width/2 + wall.width/2;

   

  if(dotx<doth){
    car.velocityX=0;
    car.x=1250;
        
    deformation=(0.5*weight*speed*speed)/22500;

    if(deformation<100){
      car.shapeColor = rgb(0,255,0);
    }
    else if (deformation>99 && deformation<181){
      car.shapeColor=rgb(230,230,0);
    }

    else if(deformation>180){
      car.shapeColor=rgb(255,0,0);
    }

  }

  drawSprites();
}