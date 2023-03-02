"use strict";
window.addEventListener("load", start)

let points = 0;
let lives = 0;

function start() {
    console.log("start");
    points = 0;
    lives = 3;
    startAnimation()
    tilføjKlik()
}
function startAnimation() {
    document.querySelector("#motorsav_container1").classList.add("travel1");
    document.querySelector("#motorsav_container2").classList.add("travel2");
    document.querySelector("#sheriff_container").classList.add("travel3");
    document.querySelector("#massakremand_container").classList.add("travel4");
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

function incrementPoints() {
    console.log("Du har fået et point");
    points++;
    console.log(points + " point opnået");
    displayPoints();
    if (points > 10) {
        levelComplete()
    }
}

function displayPoints() {
    console.log("vis point");
    document.querySelector("#point_count").textContent = points;
}

function decrementLives() {
    console.log("mistet et liv");
    showDecrementedLives();
    lives--;
    if (lives <= 0) {
        gameOver()
    }
}

function incrementLives() {
    console.log("få et liv");
    lives++;
    showIncrementedLives();
}

function showDecrementedLives() {
  console.log("lives" + lives);
  let hp = document.querySelector("#hp" + lives);
  hp.classList.remove("active_heart");
  hp.classList.add("broken_heart");
}

function showIncrementedLives() {
    let hp = document.querySelector("#hp" + lives);
    hp.classList.remove("broken_heart");
    hp.classList.add("active_heart");
}

function gameOver() {
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
}
function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
}
function clickMS1() {
  console.log("klik Motorsav1");
  let motorsav1 = document.querySelector("#motorsav_container1");
  motorsav1.removeEventListener("click", clickMS1);
  motorsav1.classList.add("paused");
  motorsav1.querySelector("img").classList.add("zoomaway");
  motorsav1.addEventListener("animationend", motorsav1Gone);

  incrementPoints();
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

  incrementPoints();
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

  decrementLives();

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
}

function clickMassakremand() {
  console.log("klik bomb");
let massakre = document.querySelector("#massakremand_container");
  massakre.removeEventListener("click", clickMassakremand);
  massakre.classList.add("paused");
  massakre.querySelector("img").classList.add("fadeaway");
  massakre.addEventListener("animationend", massakremandGone);

  decrementLives();
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
