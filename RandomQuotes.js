"use strict";
const btn = document.querySelector(".btn");
const quoteEl = document.querySelector(".quoteEl");

async function getRandomQuotes() {
  const res = await fetch(`https://api.adviceslip.com/advice`);

  const data = await res.json();
  const htmlEl = ` <p>"${data.slip.advice}"</p>`;

  quoteEl.innerHTML = htmlEl;
}
getRandomQuotes();

btn.addEventListener("click", getRandomQuotes);
