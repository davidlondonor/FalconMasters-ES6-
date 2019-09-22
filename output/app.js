"use strict";

var _mensajeAlerta = require("../modules/mensajeAlerta");

var _classePersona = _interopRequireDefault(require("../modules/classePersona"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Cuando no hay llave exporta por default
// mensajeAlerta("Hola Davids");
var david = new _classePersona["default"]("David Andres", 36);
david.mostrarInfor();