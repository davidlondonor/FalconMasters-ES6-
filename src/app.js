import { mensajeAlerta } from "../modules/mensajeAlerta";
import Persona from "../modules/classePersona";
// Cuando no hay llave exporta por default
// mensajeAlerta("Hola Davids");

const david = new Persona("David Andres", 36);
david.mostrarInfor();
