"use strict";

var usuario = {
  nombre: "David",
  correo: "correo@correo.com",
  edad: 35,
  pais: "Colombia",
  profesion: "Frontend Developer"
};
var nombre = usuario.nombre,
    pais = usuario.pais,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? "no espefificado" : _usuario$profesion;

var monstrarInfo = function monstrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? "Estudiante" : _ref$profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

monstrarInfo(usuario);