var ball = {
  x:40,
  y:80,
  r:20,
  xspeed:1,
  yspeed:0,
  color:["Red","Black"]
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill (ball.color[0])
  ball.xspeed
  ball.x=ball.x+ball.xspeed
}












