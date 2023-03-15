// this is for your game/web toy


var ball;
var bricks = [];
var pong;
var COLUMS = 10
var rows = 5



function setup() {
createCanvas(800, 600);

ball = new Ball(width / 2, 320, 20);

 pad = new Paddle(width / 2, 450, 100, 10);

for (var i = 0; i < COLUMNS; i++) {
    for (var j = 0; j < ROWS; j++) {

      
      bricks.push(new Brick(75 + (i * 50), 50 + (j * 50), 30, 20));
    }
  }
}




function draw()  
 
background(255);
pong.move();
if (ball.isThrown)
ball.move();
ball.checkHitEdges();
ball.checkHit(pong);
for (var i = 0; i < bricks.length; i++) 
    if (brick[i].isAlive)
      ball.checkHit(bricks[i]);
    

    brick[i].display();




    function keyTyped() {
        if (key == ' ') {
          ball.isThrown = true;
        }
      }


    



