/* eslint-disable */
import "bootstrap";
import "./style.css";

let suits = ["spade", "club", "heart", "diamond"];
const card = document.querySelector(".card");

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomValue = () => {
  const insertValue = document.querySelector("#number");
  let cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomNum = randomIntFromInterval(1, 13);
  console.log("number for card value", randomNum);
  insertValue.innerHTML = cardValues[randomNum - 1];
};

const randomCardSuit = () => {
  let cardSuits = ["♠", "♣", "♥", "♦"];
  const topIcon = document.querySelector("#icon-top");
  const bottomIcon = document.querySelector("#icon-bottom");
  if (card.classList.contains("spade")) {
    topIcon.innerHTML = cardSuits[0];
    bottomIcon.innerHTML = cardSuits[0];
  } else if (card.classList.contains("club")) {
    topIcon.innerHTML = cardSuits[1];
    bottomIcon.innerHTML = cardSuits[1];
  } else if (card.classList.contains("heart")) {
    topIcon.innerHTML = cardSuits[2];
    bottomIcon.innerHTML = cardSuits[2];
  } else if (card.classList.contains("diamond")) {
    topIcon.innerHTML = cardSuits[3];
    bottomIcon.innerHTML = cardSuits[3];
  }
};

const randomSuit = () => {
  let randomNum = randomIntFromInterval(1, 4);
  console.log(randomNum - 1);
  card.classList.add(suits[randomNum - 1]);
  randomCardSuit();
  randomValue();
};

window.onload = randomSuit();
