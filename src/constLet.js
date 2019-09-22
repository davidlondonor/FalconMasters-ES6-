// Carácteristicas #1
// Con Var podemos redeclarar variables
// let y const tienen un scope en el que no podemos acceder a las variables creadas dentro de una función

//#2 Let y Const tiene un scope de tipo bloque

//#4 Usamos Const cuando no queremos que una variable cambie
const nombre = "David";
nombre = "David Andres";

console.log("Hola " + nombre);

// function saludo() {
//   let nombre = "David";
//   return "Hola " + nombre;
// }
// console.log(nombre);

//templete literal  o templete strings
