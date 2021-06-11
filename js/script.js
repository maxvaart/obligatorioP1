window.addEventListener("load", inicio);

function inicio() {
  mostrarLogin();
  document.querySelector("#btnRegister").addEventListener("click", mostrarRegistro);
  document.querySelector("#btnLogin").addEventListener("click", hacerLogin);
  document.querySelector("#isProf").addEventListener("click", toggleSelect);
}

/*                                      VARIABLES GLOBALES                                      */
var listaAlumnos = [];
var listaProfesores = [];
var usuarioLogueado = null;

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


/*                                           FUNCIONES                                            */
function ocultarTodo() {
  document.querySelector("#login").style.display = "none";
  document.querySelector("#register").style.display = "none";
  document.querySelector("#navPrincipal").style.display = "none";
  document.querySelector("#publicarEjercicio").style.display = "none";
  document.querySelector("#realizarEntrega").style.display = "none";
  document.querySelector("#inicio").style.display = "none";
  document.querySelector("#estadisticas").style.display = "none";
  document.querySelector("#entregasFiltradas").style.display = "none";
  document.querySelector("#entregas").style.display = "none";

}

function toggleSelect() {
  //agregar div en profRegister para que se oculte el texto tambien
  //agregar div en profRegister para que se oculte el texto tambien
  //agregar div en profRegister para que se oculte el texto tambien
  var isChecked = document.getElementById("isProf").checked;
  if(isChecked){
      document.querySelector("#profRegister").style.display = "none";
  } else {
    document.querySelector("#profRegister").style.display = "block";
  }
}

function mostrarLogin() {
  usuarioLogueado = null;
  ocultarTodo();
  document.querySelector("#login").style.display = "block";
  document.querySelector("#aux").style.display = "block";
};

function verificarLogin(username, password) {
  let resultado = false;
  for (let i = 0; i < listaAlumnos.length; i++) {
    let user = listaAlumnos[i];
    if (user.username == username && user.password == password) {
      resultado = true;
      usuarioLogueado = user;
    }
  }
  //si el usuario no era alumno, lo buscamos en la lista de profesores.
  if (!resultado) {
    for (let i = 0; i < listaProfesores.length; i++) {
      let user = listaProfesores[i];
      if (user.username == username && user.password == password) {
        resultado = true;
        usuarioLogueado = user;
      }
    }
  }

  return resultado;
}

function hacerLogin() {
  let nombre = document.querySelector("#userLogin").value;
  let clave = document.querySelector("#userPsw").value;

  let login = verificarLogin(nombre, clave);
  if (login) {
    ocultarTodo();
    document.querySelector("#aux").style.display = "none";
    document.querySelector("#navPrincipal").style.display = "block";
    document.querySelector("#inicio").style.display = "block";
  } else {
    // Mensaje de error a configurar
    alert("Usuario o contraseña erroneos");
    // Mensaje de error a configurar
  }

  document.querySelector("#mensajesLogin").innerHTML = mensaje;
}

function mostrarRegistro() {
  ocultarTodo();
  document.querySelector("#register").style.display = "block";
  document.querySelector("#aux").style.display = "block";
}

function registrarUsuario() {
  //extraer datos del html
  let nombre = document.querySelector("#userLogin").value;
  let apellido = document.querySelector("#userPsw").value;
  let mail = document.querySelector("#userLogin").value;
  let username = document.querySelector("#userPsw").value;
  let esProf = document.querySelector("#isProf").checked;
  let username = document.querySelector("#profRegister").value;
  //validar datos
  //hacer registro
}
