"use strict";

var promesa = new Promise(function (resolve, reject) {
  //accion que se ejecutará
  setTimeout(function () {
    var exito = false;

    if (exito) {
      resolve("La operacion tuvo exito");
    } else {
      reject("La operacion NO tuvo exito");
    }
  }, 4001);
});
promesa.then(function (mensaje) {
  alert(mensaje);
});
promesa["catch"](function (mensaje) {
  alert(mensaje);
});