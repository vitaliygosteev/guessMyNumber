"use strict";

// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (dNumber) {
  document.querySelector(".number").textContent = dNumber;
};

const styleNumber = function (sNumber) {
  document.querySelector(".number").style.width = sNumber;
};

const changeBg = function (bg) {
  document.querySelector("body").style.backgroundColor = bg;
};

const highScore = function () {
  highscore = score;
  document.querySelector(".highscore").textContent = highscore;
};

const changeScore = function (nScore) {
  document.querySelector(".score").textContent = nScore;
};

// Main game logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🛑 No Number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    displayNumber(secretNumber);
    changeBg("#60b347");
    styleNumber("30rem");

    if (score > highscore) {
      highScore();
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      changeScore(score);
    } else {
      displayMessage("💥 You lost!");
      changeScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  changeScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  changeBg("#222");
  styleNumber("15rem");
});
