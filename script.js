let px;
let py;
let x1=0;
let x2=0;
let y1=0;
let y2=0;
let colorlist = ['cornflowerblue', 'crimson', 'dodgerblue', 'yellow'];
let colorlists = ['sienna','salmon','saddlebrown','yellow','palegreen', 'grey', 'black'];

function drawMyLine(x1,y1,x2,y2) {
  noStroke();
  fill(random(colorlist));

  for (let i = 0; i <= 70; i++) {
    const x = map(i, 0, 70, x1, x2);
    const y = map(i, 0, 70, y1, y2);
    ellipse(x, y, 1, 1);
  }
}



function setup() {
	createCanvas(1000, 1000);
	background(10);
}

function mousePressed() {
  px = width/2;
  py = height/2;
}

let s;
let t;

function mouseDragged() {
  
    if (mouseX >=width/2){
    s=random(100,255);
    t=0;
    
  }
  if (mouseX <width/2){
    s=0;
    t= random(100,255);
}
drawMyLine(px, py, mouseX, mouseY);
}

function draw() {
}

function keyPressed(){
  if( key === ' ') 
    background(random(colorlists));
}
