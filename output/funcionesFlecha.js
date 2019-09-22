"use strict";

var nombre = ["David", "Cesar", "Manuel"]; // const numero_caracteres = nombre.map(function(nombre) {
//   console.log(`${nombre} tiene ${nombre.length} letras de caracteres`);
// });

var numero_caracteres = nombre.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras de caracteres");
}); // parametro => {
//   //código a ejecutar
//   return;
// };