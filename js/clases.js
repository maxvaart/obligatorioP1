/*                                           CLASES                                           */

class Alumno {
  constructor(nombre, apellido, username, psw, mail, profesor, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = this.nombre + ' ' + this.apellido;
    this.username = username;
    this.mail = mail;
    this.telefono = telefono;
    this.profesor = profesor;
    this.password = psw;
    this.imagen = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    this.nivel = "Inicial";
    //this.cantCorregidos = 0;
    //this.cantSinCorregir = 0;
    //this.CantSinRealizar = 0;
    this.corregidos = [];
    this.sinCorregir = [];
    this.sinRealizar = [];
    this.propuestos = this.corregidos.length + this.sinCorregir.length + this.sinRealizar.length;
    this.entregados = this.sinCorregir.length + this.corregidos.length;
  }
}

class Profesor {
  constructor(nombre, apellido, username, psw, mail, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = this.nombre + ' ' + this.apellido;
    this.username = username;
    this.mail = mail;
    this.telefono = telefono;
    this.password = psw;
    this.imagen = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    // lista de alumnos
    this.iniciales = [];
    this.intermedios = [];
    this.avanzados = [];
    this.alumnos = [];
    // contadores de cantidad de ejercicios por nivel
    this.cantIniciales = 0;
    this.cantIntermedios = 0;
    this.cantAvanzados = 0;
    this.propuestos = this.cantIniciales + this.cantIntermedios + this.cantAvanzados;
  }
}

class Ejercicio {
  constructor(nombre, archivo, descripcion, nivel, entregas, profesor, fecha) {
    this.nombre = nombre;
    this.archivo = archivo;
    this.descripcion = descripcion;
    this.nivel = nivel;
    this.entregas = entregas;
    this.profesor = profesor;
    this.fecha = fecha;
  }
}

class Entrega {
  constructor(alumnoAutor, archivo, observaciones, nota, fecha, entregada, corregida) {
    this.alumnoAutor = alumnoAutor;
    this.archivo = archivo;
    this.observaciones = observaciones;
    this.nota = nota;
    this.fecha = fecha;
    this.entregada = entregada;
    this.corregida = corregida;
  }
}