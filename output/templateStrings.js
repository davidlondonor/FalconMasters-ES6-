"use strict";

var nombre = "David";
var edad = "36";
var pais = "Colombia";
console.log("La persona es" + nombre + "tiene "); //Tradicional

console.log("la persona es ".concat(nombre, ", tiene ").concat(edad, " y es de ").concat(pais, " ")); //Asi queda