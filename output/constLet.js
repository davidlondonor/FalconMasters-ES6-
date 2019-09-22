"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// Carácteristicas #1
// Con Var podemos redeclarar variables
// let y const tienen un scope en el que no podemos acceder a las variables creadas dentro de una función
//#2 Let y Const tiene un scope de tipo bloque
//#4 Usamos Const cuando no queremos que una variable cambie
var nombre = "David";
nombre = (_readOnlyError("nombre"), "David Andres");
console.log("Hola " + nombre); // function saludo() {
//   let nombre = "David";
//   return "Hola " + nombre;
// }
// console.log(nombre);
//templete literal  o templete strings