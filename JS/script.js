let cross = true;
let score = 0;

// Audio 👈

const bacMusic = new Audio("/Audio/bacMusic.mp3");
const lostAudio = new Audio("/Audio/tRexRoar.mp3");
setTimeout(() => {
  bacMusic.play();
}, 1000);

// Dino 👈
document.onkeydown = function (e) {
  // console.log("Key Code is: ", e.keyCode);
  const dino = document.querySelector(".dino");
  if (e.keyCode == 38) {
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
  if (e.keyCode == 39) {
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

// Dragon 👈

// const dragEl = document.querySelector(".dragon");

// setTimeout(() => {
//   dragEl.classList.add("animateDragon");
// }, 1000);

// Game Over 👈

setTimeout(() => {//Mistake 1;
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".instruction");
  dragon = document.querySelector(".dragon");
  scoreEl = document.querySelector(".score");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));
  oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"));

  // console.log(dx, dy, ox, oy);

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);

  console.log(offsetX);
  console.log(offsetY);

  if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML = "Game Overr - Reload to play Again ";
    dragEl.classList.remove("animateDragon");
    lostAudio.play();
    setTimeout(() => {
      bacMusic.pause();
      lostAudio.pause();
    }, 1000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    scoreEl.innerHTML = "Your Score: " + score;
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      const aniDur = parseInt(
        window.getComputedStyle(dragon, null)
      ).getPropertyValue("animateDragon");
      const newDur = aniDur - 0.1;
      dragon.style.animationDuration = newDur + "s";
      console.log("New animation Duration ", newDur);
    }, 500);
  }
}, 10);

// function audioTrig() {}
