"use strict";

var texto = "Hola Mundo";
console.log(texto, "empieza con H; ", texto.toLocaleLowerCase().startsWith("H"));
console.log(texto, "Termina con o; ", texto.toLocaleLowerCase().endsWith("o"));
console.log(texto, "incluye la palabra David", texto.includes("David"));
var amigos = ["David", "Judith", "Manuela", "Josefina"];
console.log(amigos.includes("Andres"));
console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
}));
console.log(amigos.findIndex(function (amigo) {
  return amigo === "Manuela";
}));