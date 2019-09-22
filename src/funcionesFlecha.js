const nombre = ["David", "Cesar", "Manuel"];

// const numero_caracteres = nombre.map(function(nombre) {
//   console.log(`${nombre} tiene ${nombre.length} letras de caracteres`);
// });

const numero_caracteres = nombre.map(
  nombre => `${nombre} tiene ${nombre.length} letras de caracteres`
);

// parametro => {
//   //código a ejecutar
//   return;
// };
