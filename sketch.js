function setup() {
  leinwand = createCanvas(windowWidth, windowHeight);
  leinwand.position(0,0)
  leinwand.style("z-index","-1");

  fill(0,0,100,100);
  background(220);
  frameRate(2);
  noStroke();
}

function draw() {
  
  circle(mouseX,mouseY,50);
  
}