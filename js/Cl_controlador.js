import Cl_vSalon from "./Cl_vSalon.js";
import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_mSalon from "./Cl_mSalon.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_controlador {
  constructor() {
    this.mSalon = new Cl_mSalon();
    this.vEstudiante = new Cl_vEstudiante(this);
    this.vSalon = new Cl_vSalon(this);
  }
  mostrarVistaEstudiante() {
    this.vSalon.ocultar();
    this.vEstudiante.mostrar();
  }
  mostrarVistaSalon() {
    this.vEstudiante.ocultar();
    this.vSalon.mostrar();
  }
  agregarEstudiante({ nombre, edad, sexo }) {
    let estudiante = new Cl_mEstudiante({ nombre, edad, sexo });
    this.mSalon.procesarEstudiante(estudiante);
    this.vSalon.reportarEstudiante({
      nombre: estudiante.nombre,
      edad: estudiante.edad,
      sexo: estudiante.sexo,
      edadPromedio: this.mSalon.edadPromedio(),
      estudMayorEdad: this.mSalon.estudMayorEdad(),
      porcChicasMayEdad: this.mSalon.porcChicasMayEdad(),
    });
    this.mostrarVistaSalon();
  }
}
