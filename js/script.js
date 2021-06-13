window.addEventListener("load", inicio);

function inicio() {
  // Objetos base
  listaProfesores.push(new Profesor("Juan", "Perez", "jperez", "123asdA", "asd@asd.com"));
  listaProfesores.push(new Profesor("Raul", "Mendez", "rmendez", "123asdA", "asd@asd.com"));
  listaProfesores[0].iniciales.push(listaAlumnos.length);
  listaProfesores[0].alumnos.push(listaAlumnos.length);
  listaAlumnos.push(new Alumno("Jose", "Artigas", "josea", "123asdA", "asd@asd.com", "Juan Perez"));
  listaProfesores[0].intermedios.push(listaAlumnos.length);
  listaProfesores[0].alumnos.push(listaAlumnos.length);
  listaAlumnos.push(new Alumno("Marcos", "Morales", "mmora", "123asdA", "asd@asd.com", "Juan Perez"));
  listaAlumnos[1].nivel = "Intermedio";
  listaProfesores[0].avanzados.push(listaAlumnos.length);
  listaProfesores[0].alumnos.push(listaAlumnos.length);
  listaAlumnos.push(new Alumno("Luis", "Arias", "larias", "123asdA", "asd@asd.com", "Juan Perez"));
  listaAlumnos[2].nivel = "Avanzado";
  listaProfesores[1].iniciales.push(listaAlumnos.length);
  listaProfesores[1].alumnos.push(listaAlumnos.length);
  listaAlumnos.push(new Alumno("Franco", "Rolin", "frolin", "123asdA", "asd@asd.com", "Raul Mendez"));
  listaProfesores[1].iniciales.push(listaAlumnos.length);
  listaProfesores[1].alumnos.push(listaAlumnos.length);
  listaAlumnos.push(new Alumno("Alberto", "Reus", "areus", "123asdA", "asd@asd.com", "Raul Mendez"));

  listaEjercicios.push(new Ejercicio("Ejercicio RE Mayor", "assets/img/ej4.png", "Esta es una descripcion del ejercicio de RE MENOR", "intermedio", [], listaProfesores[0], new Date("December 12, 1998")));
  listaEjercicios.push(new Ejercicio("Ejercicio DO Menor", "assets/img/ej1.png", "Esta es una descripcion del ejercicio de DO MENOR", "intermedio", [], listaProfesores[1], new Date("December 25, 1995")));

  mostrarLogin();
  cargarSelect();


  document.querySelectorAll(".btnRegister").forEach(element => {
    element.addEventListener("click", mostrarRegistro)
  });
  
  document.querySelectorAll(".btnVerLogin").forEach(element => {
    element.addEventListener("click", mostrarLogin)
  });
  document.querySelector("#tabSalirProfe").addEventListener("click", mostrarLogin);
  document.querySelector("#tabSalirAlum").addEventListener("click", mostrarLogin);
  document.querySelector("#tabEntregasProfe").addEventListener("click", muestraEntregasProfe);
  document.querySelector("#tabEstadisticasAlum").addEventListener("click", muestraEstadisticasAlumno);
  document.querySelector("#tabEstadisticasProfe").addEventListener("click", muestraEstadisticasProfe);
  document.querySelector("#btnCompletarLogin").addEventListener("click", hacerLogin);
  document.querySelector("#isProf").addEventListener("click", cargarSelect);
  document.querySelector("#btnCompletarRegistro").addEventListener("click", registrarUsuario);
  document.querySelector("#tabIniProfe").addEventListener("click", muestraIniProfe);
  document.querySelector("#tabIniAlum").addEventListener("click", muestraIniAlumno);
  document.querySelector("#tabPerfilAlum").addEventListener("click", muestraPerfilAlumno);
  document.querySelector("#tabPerfilProfe").addEventListener("click", muestraPerfilProfesor);
  document.querySelector("#tabEntregasAlum").addEventListener("click", muestraEntregasAlumno);
  document.querySelector("#tabAlumnosProfe").addEventListener("click", muestraAlumnos);
  document.querySelector("#btnActualizarNiveles").addEventListener("click", actualizarNiveles);
  document.querySelector("#btnPublicarEjercicio").addEventListener("click", publicarEjercicio);
}

/*                                      VARIABLES GLOBALES                                      */
var ejerciciosFiltrados = [];
var listaAlumnos = [];
var listaEjercicios = [];
var listaEntregas = [];
var listaProfesores = [];
var usernamesUsados = [];
var usuarioLogueado = null;
var tipoUsuario = null;

/*                                           FUNCIONES                                            */

//FUNCIONES QUE CONFIGURAN LA VISUALIZACION DE LA PAGINA

function ocultarTodo() {
  document.querySelector("#perfil").style.display = "none";
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
  document.querySelector("#entregasAlumno").style.display = "none";
  document.querySelector("#aux").style.display = "none";
  document.querySelector("#alumnos").style.display = "none";
}

function mostrarLogin() {
  usuarioLogueado = null;
  ocultarTodo();
  document.querySelector("#login").style.display = "block";
  document.querySelector("#aux").style.display = "block";
};

function mostrarRegistro() {
  ocultarTodo();
  document.querySelector("#register").style.display = "block";
  document.querySelector("#aux").style.display = "block";
}


function muestraEstadisticasProfe() {
  ocultarTodo();
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#estadisticasProfesor").style.display = "block";
}

function muestraEstadisticasAlumno() {
  ocultarTodo();
  document.querySelector("#navPrincipalA").style.display = "block";
  document.querySelector("#estadisticasAlumno").style.display = "block";
}

function muestraEntregasProfe() {
  ocultarTodo();
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#entregasProfe").style.display = "block";
}

function muestraIniProfe() {
  ocultarTodo();
  document.querySelector("#publicarEjercicio").style.display = "block";
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#inicio").style.display = "block";
  ejerciciosFiltrados = filtrarEjercicios(usuarioLogueado);
  let display = ``
  for (ejercicio of ejerciciosFiltrados) {
    display += `
    <div>
    <h2>${ejercicio.nombre}</h2>
    <h3>Nivel: <strong>${ejercicio.nivel}</strong></h3>
    <p><em>${ejercicio.fecha.toLocaleDateString()}</em></p>
    <img src=${ejercicio.archivo} alt="askdas">
    <p>${ejercicio.descripcion}</p>
    <p>Cantidad de entregas: <strong>${ejercicio.entregas.length}</strong></p>
    <input type="button" value="Ver entregas" id="${devolverPosicion(ejercicio , ejerciciosFiltrados)}" class="verEntregas">
    </div>
  `
  }
  document.querySelector("#inicio").innerHTML = display;
  document.querySelectorAll(".verEntregas").forEach(element => {
    element.addEventListener("click", entregasEjPuntual(element.id));
  });

}

function muestraIniAlumno() {
  ocultarTodo();
  document.querySelector("#navPrincipalA").style.display = "block";
  document.querySelector("#inicio").style.display = "block";
}

function muestraPerfilAlumno() {
  ocultarTodo();
  document.querySelector("#navPrincipalA").style.display = "block";
  document.querySelector("#perfil").style.display = "block";
}

function muestraPerfilProfesor() {
  ocultarTodo();
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#perfil").style.display = "block";
}

function actualizarPerfil() {
  let nombre = document.querySelector("#cambiarNombrePerfil").value;
  let apellido = document.querySelector("#cambiarApellidoPerfil").value;
  let mail = document.querySelector("#cambiarMailPerfil").value;
  //obtener la imagen
  //let nombre = document.querySelector("#cambiarNombrePerfil").value;
  //let nombre = document.querySelector("#cambiarNombrePerfil").value;

}

function muestraEntregasAlumno() {
  ocultarTodo();
  document.querySelector("#navPrincipalA").style.display = "block";
  document.querySelector("#entregasAlumno").style.display = "block";
}

function muestraAlumnos() {
  ocultarTodo();
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#alumnos").style.display = "block";
  //creamos la tabla con los alumnos asignados al profesor actual
  let base = `
  <table style="width:100%">
  <thead>
    <tr>
      <th>Nombre y Apellido</th>
      <th>Nombre de Usuario</th>
      <th>Ejercicios Resueltos</th>
    </tr>
  </thead>
  <tbody>
  `;
  let opciones;
  for (i of usuarioLogueado.alumnos) {
    if (listaAlumnos[i].nivel == "Intermedio"){
      opciones = `
      <option>Inicial</option>
      <option selected>Intermedio</option>
      <option>Avanzado</option>
      `
    } else if (listaAlumnos[i].nivel == "Avanzado") {
      opciones = `
      <option>Inicial</option>
      <option>Intermedio</option>
      <option selected>Avanzado</option>
      `
    } else {
      opciones = `
      <option>Inicial</option>
      <option>Intermedio</option>
      <option>Avanzado</option>
      `
    }
    base += `
      <tr>
      <td><span>${listaAlumnos[i].nombre} ${listaAlumnos[i].apellido}</span></td>
      <td><span>${listaAlumnos[i].username}</span></td>
      <td>
      <select value="Intermedio" id="nivelSelect${i}" name="nivelSelect">
        ${opciones}
      </select>
      </td>
      </tr>
    `
  }
  base += `
  </tbody>
  </table>
  `
  document.querySelector("#AlumnosFiltrados").innerHTML = base;
}

//FUNCIONALIDADES

function actualizarNiveles(){
  for (i of usuarioLogueado.alumnos) {
    let nivelActual = document.querySelector(`#nivelSelect${i}`).value;
    listaAlumnos[i].nivel = nivelActual;
  }
  muestraAlumnos();
}

function cargarSelect() {
  if (document.querySelector("#isProf").checked) {
    document.querySelector("#profRegister").style.display = "none";
  } else {
    document.querySelector("#profRegister").style.display = "block";
    // Carga a los profesores en el DropDown
    let opciones = `<label for="profeRegister">Selecciona Profesor A Cargo</label> <br> <select name="profRegister" id="profeRegister">`;
    for (p of listaProfesores) {
      opciones += `
        <option value="${p.nombre}${p.apellido}">${p.nombre} ${p.apellido}</option>
      `
    }
    opciones += `</select><br><br>`
    document.querySelector("#profRegister").innerHTML = opciones;
  }
}

function hacerLogin() {
  let usuario = document.querySelector("#userLogin").value.toLowerCase();
  let clave = document.querySelector("#userPsw").value;

  let login = verificarLogin(usuario, clave);
  if (login[0]) {
    tipoUsuario = login[1];
    if (tipoUsuario == "alumno") {
      muestraIniAlumno();
    } else {
      muestraIniProfe();
    }
  } else {
    // Mensaje de error a configurar
    alert("Usuario o contraseña erroneos");
    // Mensaje de error a configurar
  }

}

function verificarLogin(username, password) {
  let resultado = [false, null];
  for (let i = 0; i < listaAlumnos.length; i++) {
    let user = listaAlumnos[i];
    if (user.username == username && user.password == password) {
      resultado[0] = true;
      resultado[1] = "alumno";
      usuarioLogueado = listaAlumnos[i];
    }
  }
  //si el usuario no era alumno, lo buscamos en la lista de profesores.
  if (!resultado[0]) {
    for (let i = 0; i < listaProfesores.length; i++) {
      let user = listaProfesores[i];
      if (user.username == username && user.password == password) {
        resultado[0] = true;
        resultado[1] = "profesor"
        usuarioLogueado = listaProfesores[i];
      }
    }
  }

  return resultado;
}

function registrarUsuario() {
  //extraer datos
  let nombre = document.querySelector("#firstNameRegister").value;
  let apellido = document.querySelector("#lastNameRegister").value;
  let mail = document.querySelector("#emailRegister").value;
  let telefono = document.querySelector("#numRegister").value;
  let username = document.querySelector("#userRegister").value.toLowerCase();
  let password = document.querySelector("#pswRegister").value;
  let profesor = null;
  let indiceProfesor = null;
  if (!document.querySelector("#isProf").checked) {
    profesor = document.querySelector("#profeRegister").value;
    indiceProfesor = document.querySelector("#profeRegister").selectedIndex;
  }
  //validar datos
  const regexPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{3,})\S$/g;
  const regexMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
  let aValidarMail = mail.match(regexMail);
  let aValidarPassword = password.match(regexPassword);
  //hacer registro
  let esValidaPassword = (aValidarPassword == password);
  let esValidoMail = (aValidarMail == mail);
  if (!usernamesUsados.includes(username)) {
    if (esValidoMail) {
      if (esValidaPassword) {
        if (profesor == null) {
          listaProfesores.push(new Profesor(nombre, apellido, username, password, mail, telefono));
        } else {
          // Guardamos el indice que ocupa el alumno en la lista.
          listaProfesores[indiceProfesor].iniciales.push(listaAlumnos.length);
          listaProfesores[indiceProfesor].alumnos.push(listaAlumnos.length);
          listaAlumnos.push(new Alumno(nombre, apellido, username, password, mail, profesor, telefono));
        }
        usernamesUsados.push(username);
        mostrarLogin();
      } else {
        // Mensaje de error a configurar
        alert("La contraseña debe contener al menos 4 letras, una mayúscula, una minúscula y un número.");
        // Mensaje de error a configurar
      }
    } else {
      // Mensaje de error a configurar
      alert("Correo electronico invalido.");
      // Mensaje de error a configurar
    }
  } else {
    // Mensaje de error a configurar
    alert("Nombre de usuraio ya registrado.");
    // Mensaje de error a configurar
  }
}

function filtrarEjercicios(usuarioLogueado) {
  let ejerciciosFiltrados = [];
  for (ejercicio of listaEjercicios) {
    if (ejercicio.profesor == usuarioLogueado) {
      ejerciciosFiltrados.push(ejercicio)
    }
  }
  return ejerciciosFiltrados;
}

function publicarEjercicio(){
  let titulo = document.querySelector("#tituloNuevoEjercicio").value;
  let nivel = document.querySelector("#nivelNuevoEjercicio").value;
  let descripcion = document.querySelector("#descripcionNuevoEjercicio").value;
  let archivo = document.querySelector("#archivoNuevoEjercicio").value;
  let archivoRuta = "assets/img/"+ archivo.substring(archivo.lastIndexOf("\\")+1);
  let fecha = new Date();
  let profesor = usuarioLogueado;
  let entregas = [];
  listaEjercicios.push(new Ejercicio(titulo, archivoRuta, descripcion, nivel, entregas,profesor, fecha));
  muestraIniProfe();
  
}

function devolverPosicion(objeto, lista){
  function igualar(param){
    return param.nombre == objeto.nombre;
  }
  return lista.findIndex(igualar);
}

function entregasEjPuntual(id){
  document.getElementById(String(id)).addEventListener("click", mostrarEntregas )
}

function mostrarEntregas(){
  console.log(ejerciciosFiltrados[this.id].entregas);
}
