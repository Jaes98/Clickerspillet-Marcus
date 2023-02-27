"use strict";
window.addEventListener("load", start)

let points = 0;
let lives = 0;

function start() {
    console.log("start");
    points = 0;
    lives = 3;

     document.querySelector("#motorsav_container1").classList.add("travel1");
     document.querySelector("#motorsav_container2").classList.add("travel2");
     document.querySelector("#sheriff_container").classList.add("travel3");
     document.querySelector("#massakremand_container").classList.add("travel4");
     
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
    if (points > 15) {
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
  document.querySelector("#hp" + lives).classList.remove("active_heart");
  document.querySelector("#hp" + lives).classList.add("broken_heart");
}

function showIncrementedLives() {
  document.querySelector("#hp" + lives).classList.remove("broken_heart");
  document.querySelector("#hp" + lives).classList.add("active_heart");
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
  document
    .querySelector("#motorsav_container1")
    .removeEventListener("click", clickMS1);

  document.querySelector("#motorsav_container1").classList.add("paused");


  document.querySelector("#motorsav1_sprite").classList.add("zoomaway");


  document
    .querySelector("#motorsav_container1")
    .addEventListener("animationend", motorsav1Gone);

  incrementPoints();
}
function motorsav1Gone() {

  document
    .querySelector("#motorsav_container1")
    .removeEventListener("animationend", motorsav1Gone);


  document.querySelector("#motorsav1_sprite").classList.remove("zoomaway");

  
  document.querySelector("#motorsav_container1").classList.remove("paused");


  document.querySelector("#motorsav_container1").classList.remove("travel1");
  document.querySelector("#motorsav_container1").offsetWidth;
  document.querySelector("#motorsav_container1").classList.add("travel1");


  document
    .querySelector("#motorsav_container1")
    .addEventListener("click", clickMS1);
}

function clickMS2() {
  console.log("klik Motorsav2");
  
  document
    .querySelector("#motorsav_container2")
    .removeEventListener("click", clickMS2);

 
  document.querySelector("#motorsav_container2").classList.add("paused");


  document.querySelector("#motorsav2_sprite").classList.add("zoomaway");


  document
    .querySelector("#motorsav_container2")
    .addEventListener("animationend", motorsav2Gone);

  incrementPoints();
}
function motorsav2Gone() {
  document
    .querySelector("motorsav_container2")
    .removeEventListener("animationend", motorsav2Gone);


  document.querySelector("#motorsav2_sprite").classList.remove("zoomaway");

  
  document.querySelector("motorsav_container2").classList.remove("paused");

  document.querySelector("motorsav_container2").classList.remove("travel2");
  document.querySelector("motorsav_container2").offsetWidth;
  document.querySelector("motorsav_container2").classList.add("travel2");


  document
    .querySelector("motorsav_container2")
    .addEventListener("click", clickMS2);
}
function clickSheriff() {
  console.log("klik sheriff");
  document
    .querySelector("#sheriff_container")
    .removeEventListener("click", clickSheriff);

 
  document.querySelector("#sheriff_container").classList.add("paused");


  document.querySelector("#sheriff_sprite").classList.add("fadeaway");


  document
    .querySelector("#sheriff_container")
    .addEventListener("animationend", sheriffGone);

  decrementLives();

}
function sheriffGone() {

  document
    .querySelector("#sheriff_container")
    .removeEventListener("animationend", sheriffGone);

  document.querySelector("#shriff_sprite").classList.remove("fadeaway");


  document.querySelector("#bomb_container").classList.remove("paused");

  document.querySelector("#sheriff_container").classList.remove("travel3");
  document.querySelector("#sheriff_container").offsetWidth;
  document.querySelector("#sheriff_container").classList.add("travel3");


  document
    .querySelector("#sheriff_container")
    .addEventListener("click", clickSheriff);
}

function clickMassakremand() {
  console.log("klik bomb");

  document
    .querySelector("#massakremand_container")
    .removeEventListener("click", clickMassakremand);


  document.querySelector("#massakremand_container").classList.add("paused");


  document.querySelector("#massakremand_sprite").classList.add("fadeaway");

  document
    .querySelector("#massakremand_container")
    .addEventListener("animationend", massakremandGone);

  decrementLives();
}
function massakremandGone() {

  document
    .querySelector("#massakremand_container")
    .removeEventListener("animationend", massakremandGone);

  document.querySelector("#massakremand_sprite").classList.remove("fadeaway");


  document.querySelector("#massakremand_container").classList.remove("paused");

  document.querySelector("#massakremand_container").classList.remove("travel4");
  document.querySelector("#massakremand_container").offsetWidth;
  document.querySelector("#massakremand_container").classList.add("travel4");

  document
    .querySelector("#massakremand_container")
    .addEventListener("click", clickMassakremand);
}
