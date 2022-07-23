"use strict";

// creat values
const colors = ["yellow", "green", "red", "blue", "silver", "purple", "orange"];
const button = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

// creat random numbers function
function takeRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// change background-color with click
button.addEventListener("click", function () {
  const randomNumber = takeRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  colorSpan.textContent = colors[randomNumber];
});
