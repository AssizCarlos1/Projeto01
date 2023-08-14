
// criado Por: Carlos Eduardo de Assiz 1ºC
// copie o codigo e cole no site https://p5js.org/ para rodar o jogo
// copy the code and paste it on https://p5js.org/ to run the game
let game_state = true

// bird
let birdX = 100
let birdY = 100
let birdWidth = 50
let birdHeight = 50
let birdVY = 3

// first obstacle
let obstacleX = 100
let obstacleY = random(250, 300)
let obstacleW = 50
let obstacleH = 200
let obstacleSpeed = 5

let score = 0
let scoreSave = score

function random(num, num2){ 
}

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background("lightblue");
  
  if (game_state){
  // draw bird  
  fill("yellow")
  rect(birdX, birdY, birdWidth, birdHeight);
  
  // bird with gravity
  birdY = birdY + 1
  
  if (keyIsDown(UP_ARROW)){
   birdY = birdY - birdVY * 2
  }
  
  // draw obstacle
  
  fill("lightgreen")
  rect(obstacleX,obstacleY, obstacleW, obstacleH)
  
  // move obstacle
  
  obstacleX = obstacleX - obstacleSpeed
  
  if (obstacleX < 0){
    obstacleX = 650
    obstacleY = random(100, 250)
  }
  }
  // score
  
  if(obstacleX < birdX ){
    score = score + 10
  }
  fill("white")
  textSize(30)
  text(score, 10, 50 )
  
  // collision with obstacle

  if(birdX + birdWidth > obstacleX  &&
      birdX < obstacleX + obstacleW &&
      birdY + birdHeight > obstacleY &&
      birdY < obstacleY + obstacleH) {
        score = 0
        game_state = false
        text(" Perdeu ", 250, 150)   
  }
  	
  
}
