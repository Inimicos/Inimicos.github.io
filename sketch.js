let xSpeed= 2;
let ySpeed= 1;

let radius = 50;
let x=radius/2+1;
let y=radius/2+1;

let speed;
let anteilX;
let anteilY;

let xMinTime=0;
let xMaxTime=0;
let yMinTime=0;
let yMaxTime=0;






function setup() {
  createCanvas(600,600 );
  frameRate(300);
  
xSpeed= floor(random(2,22));
ySpeed= floor(random(0,32));

radius = 50;
x=radius/2+1;
y=radius/2+1;

xMinTime=0;
xMaxTime=0;
yMinTime=0;
yMaxTime=0;
  
}

function draw() {

  
  background(220);
  fill(0,0,100);
  circle(x,y,radius);

  
  
  xMinTime = xMinTime + 1;
  xMaxTime = xMaxTime + 1;
  yMinTime = yMinTime + 1;
  yMaxTime = yMaxTime + 1;
  
  
  
  x=x+xSpeed;
  y=y+ySpeed;

  
  anteilX = (xSpeed*xSpeed+ySpeed*ySpeed)/(xSpeed*xSpeed);
  anteilY = (xSpeed*xSpeed+ySpeed*ySpeed)/(ySpeed*ySpeed);
  
  speed=sqrt(ySpeed*ySpeed+xSpeed*xSpeed);
  
if(speed >= 0.01){
  speed=speed*0.998;
   }
  else{
    speed=0;
    setup();
  }
  
  if(xSpeed<0){
     xSpeed=-1*(sqrt((speed*speed)/anteilX));
     }
  else {
    xSpeed=sqrt((speed*speed)/anteilX);
       }
  
  
  
    if(ySpeed<0){
     ySpeed=-1*(sqrt((speed*speed)/anteilY));
     }
  else {
    ySpeed=sqrt((speed*speed)/anteilY);
       }
  console.log(ySpeed)
  

  
  
  
  
  
  if((ySpeed<-0.6 && ySpeed<0.6 )|| y < height-radius/2-2){
    if(ySpeed>0){
      ySpeed=ySpeed+0.2; 
     }
    
    else{
      ySpeed=ySpeed+0.2;
    }
  }
 
  if(ySpeed>-0.01 && ySpeed<0.01 && y > height-radius/2-1){
    ySpeed=0;
  }


  
  
  
  if(x>=width-radius/2 && xMaxTime > 2){
    xSpeed=xSpeed*-1;  
    
    xMaxTime=0;
   }
  
  if(x<=radius/2 && xMinTime > 2){
    xSpeed=xSpeed*-1
    
    xMinTime=0;
   }
  
  if(y>=height-radius/2 && xMaxTime > 4){
    ySpeed=ySpeed*-1
    
    yMaxTime=0;
   }
  
if(y<=radius/2 && xMinTime > 2){
    ySpeed=ySpeed*-1
  
    yMinTime=0;
   } 
}

/* function keyPressed() {
  pressedKeys[key] = true;
}

function keyReleased(){
  delete pressedKeys[key];
}
