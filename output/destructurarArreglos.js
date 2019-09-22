"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//arreglo tradicional
var persona = ["David", 36, "Colombia"];
var nombre = persona[0],
    edad = persona[1],
    pais = persona[2],
    _persona$ = persona[3],
    profesion = _persona$ === void 0 ? "Valor por defecto" : _persona$;

var mostrarInfo = function mostrarInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : persona,
      _ref2 = _slicedToArray(_ref, 3),
      nombre = _ref2[0],
      pais = _ref2[2];

  var profesion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "No espeficado";
  return console.log(nombre, profesion);
};

mostrarInfo(persona); //Destructurar el arreglo, transformar cada elemento a lo que sería variables.