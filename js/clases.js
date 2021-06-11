/*                                           CLASES                                           */

class Alumno {
    constructor(nombre, apellido, username, psw, mail) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.username = username;
      this.password = psw;
      this.mail = mail;
      this.nivel = "Inicial";
      this.cantCorregidos = 0;
      this.cantSinCorregir = 0;
      this.CantSinRealizar = 0;
      this.corregidos = [];
      this.sinCorregir = [];
      this.sinRealizar = [];
    }
  }
  
  class Profesor {
    constructor(nombre, apellido, username, psw, mail) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.username = username;
      this.password = psw;
      this.mail = mail;
      this.alumnos = 0;
      this.cantIniciales = 0;
      this.cantIntermedios = 0;
      this.cantAvanzados = 0;
      this.iniciales = [];
      this.intermedios = [];
      this.avanzados = [];
    }
  }