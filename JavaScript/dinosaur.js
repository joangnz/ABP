
if(screen.width < 1500){
    const gameContainer = document.getElementById("game-container");
    gameContainer.remove(); 
    const mensaje = document.createElement("h1");
    const logo = document.createElement("img")
    logo.src = "../media/eventifysolotexto.png";
    mensaje.style.color = "White";
    mensaje.style.fontFamily = "Kode mono, monospace"


    mensaje.textContent = "Lo siento, la pantalla es muy pequeña para jugar.";
    document.body.style.textAlign = "center"; 
    document.body.appendChild(mensaje); 
    document.body.appendChild(logo); 
    mensaje.style.marginTop = "10%";
    logo.style.marginTop = "30%";

}

else{
const dinosaurio = document.getElementById("dinosaur");
const cactus = document.getElementById("cactus");
const startButton = document.getElementById("start-button");
const container = document.getElementById("game-container");
const puntuacion = document.getElementById("score");
let gameOver = false;
let score = 0;
let cactusSpeed = 1.5;

document.addEventListener("DOMContentLoaded", function () {
    dinosaurio.style.height = screen.height / 10 + "px";
    dinosaurio.style.width = screen.height / 10 + "px";
  
    cactus.style.height = screen.height / 20 + "px";
    cactus.style.width = screen.height / 20 + "px";
  
    startButton.style.height = screen.height / 20 + "px";
    startButton.style.width = startButton.style.height * 2;
    startButton.addEventListener("click", startGame);
});

function startGame() {
    container.style.backgroundImage = "url(../media/desierto.jpg)";
    dinosaurio.style.bottom = "0px";
    cactus.style.right = "0px";
    startButton.remove();
    document.addEventListener("keydown", saltar);
    gameLoop();
}

function saltar(tecla) {
    let jump = false;
  
    if (tecla.keyCode === 32 && !jump && !gameOver) {
      jump = true;
  
      dinosaurio.style.bottom = "200px";
      setTimeout(function () {
        dinosaurio.style.bottom = "0px";
      }, 330);
  
      if (jump) {
        document.removeEventListener("keydown", saltar);
      }
  
      setTimeout(function () {
        document.addEventListener("keydown", saltar);
      }, 590);
    }
}

function gameLoop() {
  function moveCactus() {
    if (!gameOver) {
      let currentRight = parseInt(cactus.style.right);
      let newRight = currentRight + cactusSpeed;
      cactus.style.right = newRight + "%";

      // Pa la colision
      let dinoRect = dinosaurio.getBoundingClientRect();
      let cactusRect = cactus.getBoundingClientRect();
      if (
        dinoRect.left < cactusRect.left + cactusRect.width &&
        dinoRect.left + dinoRect.width > cactusRect.left &&
        dinoRect.top < cactusRect.top + cactusRect.height &&
        dinoRect.top + dinoRect.height > cactusRect.top
      ) {
        gameOver = true;
        container.style.backgroundImage = "url(../media/desiertoEnd.jpg)";

       
        const reiniciar = document.createElement("button");
        reiniciar.innerHTML = "Jugar otra vez";

      
        document.getElementById("game-container").appendChild(reiniciar);
        reiniciar.style.position = "absolute";
        reiniciar.style.fontSize = "30px";
        reiniciar.style.fontFamily = "Kode mono, monospace";
        reiniciar.style.fontWeight= "bold";
        reiniciar.style.top = "50%";
        reiniciar.style.left = "38%";

        reiniciar.addEventListener("click", function(){
          location.reload();
        })

      }

      else if (dinoRect.left > cactusRect.left + cactusRect.width && !gameOver){
        cactus.style.transition = "0ms"
        cactus.style.right = -70 + "%";
      }

      cactusSpeed = 1;

      requestAnimationFrame(moveCactus);
    }
  }

  requestAnimationFrame(moveCactus);

  setInterval(function () {
    if (!gameOver) {
      score++;
      puntuacion.innerHTML = "Puntuación: " + score;
    }
  }, 1000);
}
}
