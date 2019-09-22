//arreglo tradicional
const persona = ["David", 36, "Colombia"];

const [nombre, edad, pais, profesion = "Valor por defecto"] = persona;

const mostrarInfo = ([nombre, , pais] = persona, profesion = "No espeficado") =>
  console.log(nombre, profesion);
mostrarInfo(persona);

//Destructurar el arreglo, transformar cada elemento a lo que sería variables.
