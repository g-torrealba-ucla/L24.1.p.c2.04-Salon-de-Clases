export default class Cl_vEstudiante {
  constructor(controlador) {
    this.vista = document.getElementById("estudForm");
    this.inNombre = document.getElementById("estudForm_inNombre");
    this.inEdad = document.getElementById("estudForm_inEdad");
    this.inSexo = document.getElementById("estudForm_inSexo");
    this.btAceptar = document.getElementById("estudForm_btAceptar");
    this.btAceptar.onclick = () =>
      controlador.agregarEstudiante({
        nombre: this.inNombre.value,
        edad: this.inEdad.value,
        sexo: this.inSexo.value,
      });
    this.ocultar();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
}
