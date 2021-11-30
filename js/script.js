window.onload = function() {

  const bg = new Background(canvas.width,canvas.height);
  const flappy = new Flappy(20,40,30,30);

  document.getElementById("start-button").onclick = function() {
    if(requestId){}
    startGame();
  };

  function startGame() {
    requestId = requestAnimationFrame(update);

  }

  function gameOver(){
    audio.pause();
    bg.gameOver();
    requestId = undefined;
  }


  function update(){
    frames ++;
    ctx.clearRect(0,0,canvas.width, canvas.height)
    bg.draw();
    flappy.draw();
    generatePipes();
    drawPipes();
    ctx.font = '50px Arial';
    ctx.fillText(`Score: ${score}`, 750, 50);
    if(flappy.y + flappy.height > canvas.height) {
      gameOver();
    }
    if(requestId){
      requestId = requestAnimationFrame(update);

    }
  }
}

function generatePipes() {
  if( !(frames % 160 === 0) ) {
    return true;
  }
  const height = Math.floor(Math.random() * (canvas.height * 0.6)) + 30 // Math.floor(Math.random() * (max - min)) + min 
    const pipe1 = new Pipe('top', canvas.width, 0, height);
    const pipe2 = new Pipe('bottom', canvas.width, height + 120, canvas.height - 120 - height);

    pipes.push(pipe1, pipe2);
  }