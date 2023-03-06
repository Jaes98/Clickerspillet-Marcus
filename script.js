"use strict";
window.addEventListener("load", ready)

let point = 0;
let liv = 0;

function ready() {
console.log("Javascript ready");
buttonClick();
}
// START OG GENSTART SPIL
function startGame() {
    console.log("start");
    resetPoint();
    resetLiv();
    document.querySelector("#sound_background").play();
    startAnimation();
    tilføjKlik();
    visSpilSkærm();
    startTimer();
}
function startAnimation() {
    document.querySelector("#motorsav_container1").classList.add("travel1");
    document.querySelector("#motorsav_container2").classList.add("travel2");
    document.querySelector("#sheriff_container").classList.add("travel3");
    document.querySelector("#massakremand_container").classList.add("travel4");
    document.querySelector("#massakremand_container").addEventListener("animationiteration", massakreMandEnd)
}

function tilføjKlik() {
     document
       .querySelector("#motorsav_container1")
       .addEventListener("click", clickMS1);
     document
       .querySelector("#motorsav_container2")
       .addEventListener("click", clickMS2);
     document
       .querySelector("#sheriff_container")
       .addEventListener("click", clickSheriff);
     document
       .querySelector("#massakremand_container")
       .addEventListener("click", clickMassakremand);
}
function visSpilSkærm() {
  console.log("Spilskærm vises");
  document.querySelector("#game").classList.remove("hidden");
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}
function visStartSkærm() {
    console.log("Vis Start Skærm");
    document.querySelector("#start").classList.remove("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    stopGame();
}
function buttonClick() {
    document.querySelector("#btn_start").addEventListener("click", startGame);
    document.querySelector("#btn_go_to_start").addEventListener("click", visStartSkærm);
    document.querySelector("#btn_restart").addEventListener("click", startGame);
}
// TIMER
function startTimer() {
    document.querySelector("#time_sprite").classList.add("timershrink");
    document
      .querySelector("#time_sprite")
      .addEventListener("animationend", timerDone);
}
function timerDone() {
    console.log("Times up!")
    if (point >= 10) {
        levelComplete();
    } else {
        gameOver();
    }
}
// LIV OG POINT
function resetLiv() {
  liv = 3;
  document.querySelector("#hp1").classList.remove("broken_heart");
  document.querySelector("#hp2").classList.remove("broken_heart");
  document.querySelector("#hp3").classList.remove("broken_heart");
  document.querySelector("#hp1").classList.add("active_heart");
  document.querySelector("#hp2").classList.add("active_heart");
  document.querySelector("#hp3").classList.add("active_heart");
}
function resetPoint() {
  point = 0;
  visPoint();
}
function givPoint() {
    console.log("Du har fået et point");
    point++;
    console.log(point + " point opnået");
    visPoint();
    if (point >= 10) {
        levelComplete()
    }
}
function visPoint() {
    console.log("vis point");
    document.querySelector("#point_count").textContent = point;
}
function mistLiv() {
    console.log("mistet et liv");
    vismistLiv();
    liv--;
    if (liv <= 0) {
     gameOver();
   }
}
function mist3Liv() {
    console.log("mistet 3 liv");
    vismistLiv();
    liv=-3;
    if (liv <= 0) {
        gameOver();
    }
}
function givLiv() {
    console.log("få et liv");
    liv++;
    visgivLiv();
}
function vismistLiv() {
  console.log("liv" + liv);
  let hp = document.querySelector("#hp" + liv);
  hp.classList.remove("active_heart");
  hp.classList.add("broken_heart");
   
}
function visgivLiv() {
    let hp = document.querySelector("#hp" + liv);
    hp.classList.remove("broken_heart");
    hp.classList.add("active_heart");
     if (liv <= 0) {
       gameOver();
     }
}
// GAMEOVER OG LEVELCOMPLETE
function gameOver() {
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("fadein");
  stopGame();
  document.querySelector("#sound_gameover").play();
}
function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#level_complete").classList.add("fadein");
  stopGame();
  document.querySelector("#sound_levelcomplete").play();
}
// CLICK EVENTS
function clickMS1() {
  console.log("klik Motorsav1");
  let motorsav1 = document.querySelector("#motorsav_container1");
  motorsav1.removeEventListener("click", clickMS1);
  motorsav1.classList.add("paused");
  motorsav1.querySelector("img").classList.add("zoomaway");
  motorsav1.addEventListener("animationend", motorsav1Gone);

  document.querySelector("#sound_ms1").currentTime = 0;
  // Afspil mønt-lyd
  document.querySelector("#sound_ms1").play();

  givPoint();
}
function motorsav1Gone() {
console.log("motorsav1gone")
let motorsav1 = document.querySelector("#motorsav_container1");
  motorsav1.removeEventListener("animationend", motorsav1Gone);
  motorsav1.querySelector("img").classList.remove("zoomaway");
  motorsav1.classList.remove("paused");

  motorsav1.classList.remove("travel1");
  motorsav1.offsetWidth;
  motorsav1.classList.add("travel1");

  motorsav1.addEventListener("click", clickMS1);
}
function clickMS2() {
  console.log("klik Motorsav2");
  let motorsav2 = document.querySelector("#motorsav_container2");
  motorsav2.removeEventListener("click", clickMS2);
  motorsav2.classList.add("paused");
  motorsav2.querySelector("img").classList.add("zoomaway");
  motorsav2.addEventListener("animationend", motorsav2Gone);

  document.querySelector("#sound_ms2").currentTime = 0;
  // Afspil mønt-lyd
  document.querySelector("#sound_ms2").play();

  givPoint();
}
function motorsav2Gone() {
    console.log("motorsav2 væk");
    let motorsav2 = document.querySelector("#motorsav_container2");
  motorsav2.removeEventListener("animationend", motorsav2Gone);
  motorsav2.querySelector("img").classList.remove("zoomaway");
  motorsav2.classList.remove("paused");

  motorsav2.classList.remove("travel2");
  motorsav2.offsetWidth;
  motorsav2.classList.add("travel2");


  motorsav2.addEventListener("click", clickMS2);
}
function clickSheriff() {
  console.log("klik sheriff");
  let sheriff = document.querySelector("#sheriff_container");
  sheriff.removeEventListener("click", clickSheriff);
  sheriff.classList.add("paused");
  sheriff.querySelector("img").classList.add("fadeaway");
  sheriff.addEventListener("animationend", sheriffGone);

  document.querySelector("#sound_sheriff").currentTime = 0;
  document.querySelector("#sound_sheriff").play();

  mistLiv();

}
function sheriffGone() {
console.log("sheriff gone");
let sheriff = document.querySelector("#sheriff_container");
  sheriff.removeEventListener("animationend", sheriffGone);
  sheriff.querySelector("img").classList.remove("fadeaway");
  sheriff.classList.remove("paused");

  sheriff.classList.remove("travel3");
  sheriff.offsetWidth;
  sheriff.classList.add("travel3");


  sheriff.addEventListener("click", clickSheriff);
  if (liv > 3) {
    givLiv();
  }
}
function clickMassakremand() {
  console.log("klik massakremand");
let massakre = document.querySelector("#massakremand_container");
  massakre.removeEventListener("click", clickMassakremand);
  massakre.classList.add("paused");
  massakre.querySelector("img").classList.add("fadeaway");
  massakre.addEventListener("animationend", massakremandGone);

  document.querySelector("#sound_massakremand").currentTime = 0;
  document.querySelector("#sound_massakremand").play();
  
  givPoint();
}
function massakremandGone() {
console.log("massakremand gone")
let massakre = document.querySelector("#massakremand_container");
  massakre.removeEventListener("animationend", massakremandGone);
  massakre.querySelector("img").classList.remove("fadeaway");
  massakre.classList.remove("paused");

  massakre.classList.remove("travel4");
  massakre.offsetWidth;
  massakre.classList.add("travel4");

  massakre.addEventListener("click", clickMassakremand);
  
}
function massakreMandEnd() {
    console.log("massakreMandEnd: mist 3 liv");
    mist3Liv();
    console.log(liv);
}
// STOPGAME
function stopGame() {
    console.log("spil stoppet");
    document.querySelector("#motorsav_container1").classList.remove("travel1");
    document.querySelector("#motorsav_container2").classList.remove("travel2");
    document.querySelector("#sheriff_container").classList.remove("travel3");
    document.querySelector("#massakremand_container").classList.remove("travel4");

    document
      .querySelector("#motorsav_container1")
      .removeEventListener("click", clickMS1);
    document
      .querySelector("#motorsav_container2")
      .removeEventListener("click", clickMS2);
    document
      .querySelector("#sheriff_container")
      .removeEventListener("click", clickSheriff);
    document
      .querySelector("#massakremand_container")
      .removeEventListener("click", clickMassakremand);
      
    document.querySelector("#sound_background").pause();
    document.querySelector("#sound_background").currentTime = 0;

    document.querySelector("#time_sprite").classList.remove("timershrink");
}