class Usuario {
  constructor(nombre, edad) {
    (this.nombre = nombre), (this.edad = edad), (this.correo = this.correo);
  }

  mostrarSaludo(mensaje) {
    return mensaje;
  }

  mostrarInfo() {
    return `
      <b>Nombre:</b> ${this.nombre} <br />
      <b>Edad:</b> ${this.edad} <br />
      <b>Correo:</b> ${this.correo} <br />
      
      <hr />
      `;
  }
}

const david = new Usuario("David Londoño", 36, "correo@correo.com");
document.write(david.mostrarInfo());

class Estudiante extends Usuario {
  constructor(nombre, edad, correo, carrera) {
    super(nombre, edad, correo);
    this.carrera = carrera;
  }

  mostrarInfo() {
    return `
      <b>Nombre:</b> ${this.nombre} <br />
      <b>Edad:</b> ${this.edad} <br />
      <b>Correo:</b> ${this.correo} <br />
      <b>Carrera:</b> ${this.carrera} <br />
      <hr />
      `;
  }
}

const judith = new Estudiante("Judith", 30, "correo@ejemplo.com");
document.write(judith.mostrarInfo());
