window.addEventListener("load", inicio);

function inicio() {
  mostrarLogin();
  toggleSelect();
  document.querySelectorAll(".btnRegister").forEach(element => {element.addEventListener("click", mostrarRegistro)});
  document.querySelectorAll(".btnVerLogin").forEach(element => {element.addEventListener("click", mostrarLogin)});
  document.querySelector("#tabSalirProfe").addEventListener("click", mostrarLogin);
  document.querySelector("#tabSalirAlum").addEventListener("click", mostrarLogin);
  document.querySelector("#tabEntregasProfe").addEventListener("click", muestraEntregasProfe);
  document.querySelector("#tabEstadisticasAlum").addEventListener("click", muestraEstadisticasAlumno);
  document.querySelector("#tabEstadisticasProfe").addEventListener("click", muestraEstadisticasProfe);
  document.querySelector("#btnCompletarLogin").addEventListener("click", hacerLogin);
  document.querySelector("#isProf").addEventListener("click", toggleSelect);
  document.querySelector("#btnCompletarRegistro").addEventListener("click", registrarUsuario);
  document.querySelector("#tabIniProfe").addEventListener("click", muestraIniProfe);
  document.querySelector("#tabIniAlum").addEventListener("click", muestraIniAlumno);
}

/*                                      VARIABLES GLOBALES                                      */
var listaAlumnos = [];
var listaProfesores = [];
var usuarioLogueado = null;
var tipoUsuario = null;

/*                                           FUNCIONES                                            */

function mostrarLogin() {
  usuarioLogueado = null;
  ocultarTodo();
  document.querySelector("#login").style.display = "block";
  document.querySelector("#aux").style.display = "block";
};

function ocultarTodo() {
  document.querySelector("#login").style.display = "none";
  document.querySelector("#register").style.display = "none";
  document.querySelector("#navPrincipalP").style.display = "none";
  document.querySelector("#navPrincipalA").style.display = "none";
  document.querySelector("#publicarEjercicio").style.display = "none";
  document.querySelector("#realizarEntrega").style.display = "none";
  document.querySelector("#inicio").style.display = "none";
  document.querySelector("#estadisticasAlumno").style.display = "none";
  document.querySelector("#estadisticasProfesor").style.display = "none";
  document.querySelector("#entregasFiltradas").style.display = "none";
  document.querySelector("#entregasProfe").style.display = "none";
  document.querySelector("#aux").style.display = "none";
}

function mostrarRegistro() {
  ocultarTodo();
  document.querySelector("#register").style.display = "block";
  document.querySelector("#aux").style.display = "block";
}

function toggleSelect() {
  if(document.querySelector("#isProf").checked){
      document.querySelector("#profRegister").style.display = "none";
  } else {
    document.querySelector("#profRegister").style.display = "block";
  }
}

function hacerLogin() {
  let nombre = document.querySelector("#userLogin").value.toLowerCase();
  let clave = document.querySelector("#userPsw").value;

  let login = verificarLogin(nombre, clave);
  if (login[0]) {
    tipoUsuario = login[1];
    if(tipoUsuario == "alumno"){
        muestraAlumno();
    } else {
        muestraProfesor();
    }
  } else {
    // Mensaje de error a configurar
    alert("Usuario o contraseña erroneos");
    // Mensaje de error a configurar
  }

  document.querySelector("#mensajesLogin").innerHTML = mensaje;
}

function verificarLogin(username, password) {
  let resultado = [false,null];
  for (let i = 0; i < listaAlumnos.length; i++) {
    let user = listaAlumnos[i];
    if (user.username == username && user.password == password) {
      resultado[0] = true;
      resultado[1] = "alumno";
      usuarioLogueado = user;
    }
  }
  //si el usuario no era alumno, lo buscamos en la lista de profesores.
  if (!resultado) {
    for (let i = 0; i < listaProfesores.length; i++) {
      let user = listaProfesores[i];
      if (user.username == username && user.password == password) {
        resultado[0] = true;
        resultado[1] = "profesor"
        usuarioLogueado = user;
      }
    }
  }

  return resultado;
}

function registrarUsuario() {
  let nombre = document.querySelector("#firstNameRegister").value.toLowerCase();
  let apellido = document.querySelector("#lastNameRegister").value;
  let mail = document.querySelector("#emailRegister").value;
  let username = document.querySelector("#userRegister").value;
  let password = document.querySelector("#pswRegister").value;
  let profesor = null;
  if(!document.querySelector("#isProf").checked){
    profesor = document.querySelector("#profeRegister").value;
  }
  //validar datos
  const regexPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{3,})\S$/g;
  let aValidar = password.match(regexPassword);
  //hacer registro
  console.log(aValidar);
  let esValida = aValidar == password;
  console.log(esValida);
  if (profesor != null){

  } else {

  }
  mostrarLogin();
}

//FUNCIONES QUE CONFIGURAN LA VISUALIZACION INICIAL LUEGO DEL LOGIN
function muestraProfesor(){
  ocultarTodo();
  document.querySelector("#inicio").style.display = "block";
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#publicarEjercicio").style.display = "block";
}

function muestraAlumno(){
  ocultarTodo();
  document.querySelector("#inicio").style.display = "block";
  document.querySelector("#navPrincipalA").style.display = "block";
}

function muestraEstadisticasProfe(){
  ocultarTodo();
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#estadisticasProfesor").style.display = "block";
}

function muestraEstadisticasAlumno(){
  ocultarTodo();
  document.querySelector("#navPrincipalA").style.display = "block";
  document.querySelector("#estadisticasAlumno").style.display = "block";
}

function muestraEntregasProfe(){
  ocultarTodo();
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#entregasProfe").style.display = "block";
}

function muestraIniProfe(){
  ocultarTodo();
  document.querySelector("#publicarEjercicio").style.display = "block";
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#inicio").style.display = "block";
}

function muestraIniAlumno(){
  ocultarTodo();
  document.querySelector("#navPrincipalA").style.display = "block";
  document.querySelector("#inicio").style.display = "block";
}
