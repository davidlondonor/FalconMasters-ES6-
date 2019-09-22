function registrarUsuario(
  nombre,
  pais = "No Especificado",
  correo,
  telefono = "No especificado"
) {
  return `Nombre: ${nombre}, País ${pais}, Correo: ${correo}, Telefono ${telefono}
`;
}

console.log(registrarUsuario("David", undefined, "davidlucky@gmail.com"));

//Ahora ES6 tiene como ventaja que podemos dejar parámetros preestablecidos para algunos parámetros dentro de las funciones.
