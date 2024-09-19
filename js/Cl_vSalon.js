export default class Cl_vAerolinea {
  constructor(controlador) {
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.btAgregar = document.getElementById("mainForm_btAgregar");
    this.lblEdadPromedio = document.getElementById("mainForm_lblEdadPromedio");
    this.lblEstudMayorEdad = document.getElementById(
      "mainForm_lblEstudMayorEdad"
    );
    this.lblPorcChicasMayEdad = document.getElementById(
      "mainForm_lblPorcChicasMayEdad"
    );
    this.btAgregar.onclick = () => controlador.mostrarVistaEstudiante();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  reportarEstudiante({
    nombre,
    edad,
    sexo,
    edadPromedio,
    estudMayorEdad,
    porcChicasMayEdad
  }) {
    this.tabla.innerHTML += `
    <tr>
      <td>${nombre}</td>
      <td>${edad}</td>
      <td>${sexo}</td>
    </tr>`;
    this.lblEdadPromedio.innerHTML = edadPromedio;
    this.lblEstudMayorEdad.innerHTML = estudMayorEdad;
    this.lblPorcChicasMayEdad.innerHTML = porcChicasMayEdad;
  }
}
