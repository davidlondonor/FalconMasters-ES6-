const usuario = {
  nombre: "David",
  correo: "correo@correo.com",
  edad: 35,
  pais: "Colombia",
  profesion: "Frontend Developer"
};

const { nombre, pais, profesion = "no espefificado" } = usuario;

const monstrarInfo = ({ nombre, profesion = "Estudiante" }) =>
  console.log(`${nombre} es ${profesion}`);

monstrarInfo(usuario);
