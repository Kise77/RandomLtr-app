"use strict"

const rdnLtrEl = document.getElementById("rdm-ltr");
const btnEl = document.querySelector(".btn");
const btnXEl = document.querySelector(".btn-x");
const bubbleEl = document.querySelector(".bubble");


btnEl.addEventListener("click", function () {
  let rdmColor = function () {
    return Math.trunc(Math.random() * 255) + 1;
  }

  let rdmPosition = function () {
    return Math.trunc(Math.random() * 94) + 1;
  }

  //Main Random Letter
  const rdmNumb = Math.trunc(Math.random() * 24) + 1;
  const a = rdmColor();
  const b = rdmColor();
  const c = rdmColor();
  const arr = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  rdnLtrEl.textContent = arr[rdmNumb];
  rdnLtrEl.style.color = `rgb(${a}, ${b}, ${c})`;
  bubbleEl.style.display = "block";

  //Other Random Letters
  const e = rdmPosition() + Math.trunc(Math.random() * 5) + 1;
  const d = rdmPosition();

  const para = document.createElement("p");
  document.body.appendChild(para);
  para.style.top = `${d}%`;
  para.style.left = `${e}%`;
  para.style.position = "absolute";
  para.textContent = arr[rdmNumb];
  para.style.color = `rgb(${a}, ${b}, ${c})`;

})

// Reset Button
btnXEl.addEventListener("click", function () {
  window.location.reload();
})

