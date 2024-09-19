export default class Cl_mSalon {
  constructor() {
    this.acEdad =
      this.cntEstuds =
      this.mayEdad =
      this.mayNombre =
      this.cntChicas =
      this.cntChicasMayEdad =
        0;
  }
  procesarEstudiante(estud) {
    this.acEdad += estud.edad;
    this.cntEstuds++;
    if (estud.edad > this.mayEdad) {
      this.mayEdad = estud.edad;
      this.mayNombre = estud.nombre;
    }
    if (estud.sexo === "F") {
      this.cntChicas++;
      if (estud.edad >= 18) {
        this.cntChicasMayEdad++;
      }
    }
  }
  edadPromedio() {
    return this.acEdad / this.cntEstuds;
  }
  estudMayorEdad() {
    return this.mayNombre;
  }
  porcChicasMayEdad() {
    return (this.cntChicasMayEdad / this.cntChicas) * 100;
  }
}
