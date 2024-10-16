let xSpeed= 12;
let ySpeed= 5;

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
  createCanvas(1500,930 );
  frameRate(300);
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
  
if(speed!=0){
  speed=speed-0.01;
   }
  if(xSpeed<0){
     xSpeed=-1*(sqrt((speed*speed)/anteilX));
     }
  else {
    xSpeed=sqrt((speed*speed)/anteilX);
       }
  console.log(xSpeed)
  
  
  
    if(ySpeed<0){
     ySpeed=-1*(sqrt((speed*speed)/anteilY));
     }
  else {
    ySpeed=sqrt((speed*speed)/anteilY);
       }
  console.log(ySpeed)
  

  
  
  
  
  
  if((ySpeed<-0.6 && ySpeed<0.6 )|| y < height-radius/2-2){
    if(ySpeed>0){
      ySpeed=ySpeed+0.3; 
     }
    
    else{
      ySpeed=ySpeed+0.3;
    }
  }
 
  if(ySpeed>-0.0001 && ySpeed<0.0001 && y > height-radius/2){
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
