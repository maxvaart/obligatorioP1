/*                                           CLASES                                           */

class Alumno {
    constructor(nombre, apellido, username, psw, mail, profesor, telefono) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.username = username;
      this.password = psw;
      this.mail = mail;
      this.telefono = telefono;
      this.profesor = profesor;
      this.nivel = "Inicial";
      //this.cantCorregidos = 0;
      //this.cantSinCorregir = 0;
      //this.CantSinRealizar = 0;
      this.corregidos = [];
      this.sinCorregir = [];
      this.sinRealizar = [];
    }
  }
  
  class Profesor {
    constructor(nombre, apellido, username, psw, mail, telefono) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.username = username;
      this.password = psw;
      this.mail = mail;
      this.telefono = telefono;
      this.alumnos = [];
      this.cantIniciales = 0;
      this.cantIntermedios = 0;
      this.cantAvanzados = 0;
      this.iniciales = [];
      this.intermedios = [];
      this.avanzados = [];
    }
  }

  class Ejercicio{
    constructor(nombre, archivo, descripcion, nivel, entregas, profesor, fecha){
      this.nombre = nombre;
      this.archivo = archivo;
      this.descripcion = descripcion;
      this.nivel = nivel;
      this.entregas = entregas;
      this.profesor = profesor;
      this.fecha = fecha;
    }
  }

  class Entrega{
    constructor(nombreAutor, usuarioAutor, archivo, observaciones, nota, fecha, corregida, entregada){
      this.nombreAutor = nombreAutor;
      this.usuarioAutor = usuarioAutor;
      this.archivo = archivo;
      this.observaciones = observaciones;
      this.nota = nota;
      this.fecha = fecha;
      this.corregida = corregida;
      this.entregada = entregada;
    }
  }