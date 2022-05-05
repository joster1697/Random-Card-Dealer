/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cartaSimbolos = document.querySelectorAll(".simbolo");
  let cartaNumero = document.getElementById("numero");
  console.log(cartaNumero);

  let simbolos = ["♦", "♥", "♠", "♣"];
  let numeros = [
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

  let simboloRandom = numeroRandom(0, 3);
  if (simboloRandom == 0 || simboloRandom == 1) {
    cartaSimbolos[0].style.color = "red";
    cartaSimbolos[1].style.color = "red";
  } else {
    cartaSimbolos[0].style.color = "black";
    cartaSimbolos[1].style.color = "black";
  }
  cartaSimbolos[0].innerHTML = simbolos[simboloRandom];
  cartaSimbolos[1].innerHTML = simbolos[simboloRandom];
  cartaSimbolos[1].style.transform = "rotate(180deg)";

  cartaNumero.innerHTML = numeros[numeroRandom(0, 12)];
};

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
