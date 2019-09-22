const crearObjeto = (nombre, edad) => {
  return {
    nombre,
    edad,
    mostrarInfo() {
      return `${nombre} tiene ${edad} años`;
    }
  };´´
};

console.log(crearObjeto("Judith David", 36).mostrarInfo());
