const promesa = new Promise((resolve, reject) => {
  //accion que se ejecutará
  setTimeout(() => {
    const exito = false;
    if (exito) {
      resolve("La operacion tuvo exito");
    } else {
      reject("La operacion NO tuvo exito");
    }
  }, 4001);
});

promesa.then(mensaje => {
  alert(mensaje);
});

promesa.catch(mensaje => {
  alert(mensaje);
});
