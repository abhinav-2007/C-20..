var a,b;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(500, 200, 60, 80);
  a.shapeColor="black";
  b.shapeColor="red";
}

function draw() {
  background(255,255,255);
  a.x=mouseX;
  a.y=mouseY;
 

  if(a.x-b.x<a.width/2+b.width/2
    && b.x-a.x<a.width/2+b.width/2
    && a.y-b.y<a.height/2+b.height/2
    && b.y-a.y<a.height/2+b.height/2)
    {
      a.shapeColor="yellow";
      b.shapeColor="yellow"; 
    }  
    else
     {
      a.shapeColor="black";
      b.shapeColor="red";
     }
  drawSprites();
}