/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const card = document.querySelector("#carta");
  const topSuit = document.querySelector("#topSuit");
  const value = document.querySelector(".value");
  const bottomSuit = document.querySelector("#bottomSuit");
  let suits = ["hearts", "spades", "clubs", "diamonds"];
  let cardValue = Math.floor(Math.random() * 12);
  let randomSuit = Math.floor(Math.random() * suits.length);
  function insertSuit() {
    if (suits[randomSuit] === "hearts") {
      card.classList.add("hearts");
      topSuit.innerHTML = `<div class="suit m-0 p-0"><p class="hearts p-0">♥</p></div>`;
      value.innerHTML = `<p class="number m-0 p-0">${cardValue}</p>`;
      bottomSuit.innerHTML = `<div class="suit mb-2 p-0"><p class="hearts p-0">♥</p></div>`;
    } else if (suits[randomSuit] === "spades") {
      card.classList.add("spades");
      topSuit.innerHTML = `<div class="suit m-0 p-0"><p class="spades mt-n3 p-0">♠</p></div>`;
      value.innerHTML = `<p class="number m-0 p-0">${cardValue}</p>`;
      bottomSuit.innerHTML = `<div class="suit mb-2 p-0"><p class="spades mt-n3 p-0">♠</p></div>`;
    } else if (suits[randomSuit] === "clubs") {
      card.classList.add("clubs");
      topSuit.innerHTML = `<div class="suit m-0 p-0"><p class="clubs mt-n3 p-0">♣</p></div>`;
      value.innerHTML = `<p class="number m-0 p-0">${cardValue}</p>`;
      bottomSuit.innerHTML = `<div class="suit mb-2 p-0"><p class="clubs mt-n3 p-0">♣</p></div>`;
    } else if (suits[randomSuit] === "diamonds") {
      card.classList.add("diamonds");
      topSuit.innerHTML = `<div class="suit m-0 p-0"><p class="diamonds mt-n3 p-0">♦</p></div>`;
      value.innerHTML = `<p class="number m-0 p-0">${cardValue}</p>`;
      bottomSuit.innerHTML = `<div class="suit mb-2 p-0"><p class="diamonds mt-n3 p-0">♦</p></div>`;
    }
  }
  insertSuit();
  console.log(randomSuit);
  console.log(cardValue);
};
