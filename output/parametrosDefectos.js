"use strict";

function registrarUsuario(nombre) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "No Especificado";
  var correo = arguments.length > 2 ? arguments[2] : undefined;
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "No especificado";
  return "Nombre: ".concat(nombre, ", Pa\xEDs ").concat(pais, ", Correo: ").concat(correo, ", Telefono ").concat(telefono, "\n");
}

console.log(registrarUsuario("David", undefined, "davidlucky@gmail.com")); //Ahora ES6 tiene como ventaja que podemos dejar parámetros preestablecidos para algunos parámetros dentro de las funciones.