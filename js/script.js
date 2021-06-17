window.addEventListener("load", inicio);

function inicio() {
  // AGREGANDO PROFESORES
  listaProfesores.push(new Profesor("Juan", "Perez", "jperez", "123asdA", "asd@asd.com", "123456789"));
  listaProfesores.push(new Profesor("Raul", "Mendez", "rmendez", "123asdA", "asd@asd.com", "123456789"));
  //AGREGANDO ALUMNOS

  listaAlumnos.push(new Alumno("Jose", "Artigas", "josea", "123asdA", "asd@asd.com", listaProfesores[0], "123456789"));
  listaProfesores[0].iniciales.push(listaAlumnos[listaAlumnos.length - 1]);
  listaProfesores[0].alumnos.push(listaAlumnos[listaAlumnos.length - 1]);
  listaAlumnos.push(new Alumno("Marcos", "Morales", "mmora", "123asdA", "asd@asd.com", listaProfesores[0], "123456789"));
  listaProfesores[0].intermedios.push(listaAlumnos[listaAlumnos.length - 1]);
  listaProfesores[0].alumnos.push(listaAlumnos[listaAlumnos.length - 1]);
  listaAlumnos[1].nivel = "Intermedio";
  listaAlumnos.push(new Alumno("Luis", "Arias", "larias", "123asdA", "asd@asd.com", listaProfesores[0], "123456789"));
  listaProfesores[0].avanzados.push(listaAlumnos[listaAlumnos.length - 1]);
  listaProfesores[0].alumnos.push(listaAlumnos[listaAlumnos.length - 1]);
  listaAlumnos[2].nivel = "Avanzado";
  listaAlumnos.push(new Alumno("Franco", "Rolin", "frolin", "123asdA", "asd@asd.com", listaProfesores[1], "123456789"));
  listaProfesores[1].iniciales.push(listaAlumnos[listaAlumnos.length - 1]);
  listaProfesores[1].alumnos.push(listaAlumnos[listaAlumnos.length - 1]);
  listaAlumnos.push(new Alumno("Alberto", "Reus", "areus", "123asdA", "asd@asd.com", listaProfesores[1], "123456789"));
  listaProfesores[1].iniciales.push(listaAlumnos[listaAlumnos.length - 1]);
  listaProfesores[1].alumnos.push(listaAlumnos[listaAlumnos.length - 1]);

  //AGREGANDO EJERCICIOS
  listaEjercicios.push(new Ejercicio("Ejercicio SOLFEO DO BEMOL", "assets/img/ej2.png", "Esta es una descripcion del ejercicio de SOLFEO DO BEMOL", "Avanzado", [], listaProfesores[0], new Date("December 2, 2012")));
  listaEjercicios.push(new Ejercicio("Ejercicio RE Mayor", "assets/img/ej4.png", "Esta es una descripcion del ejercicio de RE MENOR", "intermedio", [], listaProfesores[0], new Date("December 12, 1998")));
  listaEjercicios.push(new Ejercicio("Ejercicio DO Menor", "assets/img/ej1.png", "Esta es una descripcion del ejercicio de DO MENOR", "inicial", [], listaProfesores[1], new Date("December 25, 1995")));
  listaEjercicios.push(new Ejercicio("Ejercicio FA Menor", "assets/img/ej5.png", "Esta es una descripcion del ejercicio de FA Menor", "inicial", [], listaProfesores[0], new Date("November 11, 1725")));
  //AGREGANDO ENTREGAS
  listaEjercicios[0].entregas.push(new Entrega(listaAlumnos[2], "assets/audio/ej1.m4a", "observacion del profesor", "3", new Date(), true, true))
  listaEjercicios[1].entregas.push(new Entrega(listaAlumnos[1], "assets/audio/ej2.m4a", "observacion del profesor", "8", new Date(), true, true))
  listaEjercicios[3].entregas.push(new Entrega(listaAlumnos[0], "assets/audio/ej3.m4a", "Sin Corregir", "-1", new Date(), false, false))
  listaEjercicios[2].entregas.push(new Entrega(listaAlumnos[3], "assets/audio/ej4.m4a", "Sin Corregir", "-1", new Date(), true, false))
  listaEjercicios[2].entregas.push(new Entrega(listaAlumnos[4], "assets/audio/ej5.m4a", "testeando carga de dato", "9", new Date(), true, true))

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
  document.querySelector("#tabEntregasProfe").addEventListener("click", muestraEntregasTotalProfe);
  document.querySelector("#tabEstadisticasAlum").addEventListener("click", muestraEstadisticasAlumno);
  document.querySelector("#tabEstadisticasProfe").addEventListener("click", muestraEstadisticasProfe);
  document.querySelector("#btnCompletarLogin").addEventListener("click", hacerLogin);
  document.querySelector("#isProf").addEventListener("click", cargarSelect);
  document.querySelector("#btnCompletarRegistro").addEventListener("click", registrarUsuario);
  document.querySelector("#tabIniProfe").addEventListener("click", muestraIniProfe);
  document.querySelector("#tabIniAlum").addEventListener("click", muestraIniAlumno);
  document.querySelector("#tabPerfilAlum").addEventListener("click", muestraPerfil);
  document.querySelector("#tabPerfilProfe").addEventListener("click", muestraPerfil);
  document.querySelector("#tabEntregasAlum").addEventListener("click", muestraEntregasAlumno);
  document.querySelector("#tabAlumnosProfe").addEventListener("click", muestraAlumnos);
  document.querySelector("#btnActualizarNiveles").addEventListener("click", actualizarNiveles);
  document.querySelector("#btnPublicarEjercicio").addEventListener("click", publicarEjercicio);
  document.querySelector("#btnCambiarInfoPerfil").addEventListener("click", actualizarPerfil);
  document.querySelector("#pswRegister").addEventListener("focusin", mostrarMsjPass);
  document.querySelector("#pswRegister").addEventListener("focusout", ocultarMsjPass);
  document.querySelector("#btnModificarContraseña").addEventListener("click", actualizarContraseña);
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

function mostrarMsjPass() {
  document.querySelector("#msjPass").style.display = "block";
}

function ocultarMsjPass() {
  document.querySelector("#msjPass").style.display = "none";
}

function mostrarLogin() {
  usuarioLogueado = null;
  ocultarTodo();
  document.querySelector("#login").style.display = "block";
  document.querySelector("#aux").style.display = "block";
}

function mostrarRegistro() {
  ocultarTodo();
  document.querySelector("#register").style.display = "block";
  document.querySelector("#aux").style.display = "block";
  ocultarMsjPass();
}


function muestraEstadisticasProfe() {
  ocultarTodo();
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#estadisticasProfesor").style.display = "block";
  let alumnosMasejercicios = [];
  let mayorCantidad = 0;
  let totalEntregas = 0;
  for (i of usuarioLogueado.alumnos) {
    totalEntregas += i.entregados;
    if (i.entregados >= mayorCantidad) {
      alumnosMasejercicios.push(i.nombreCompleto);
      mayorCantidad = i.entregados;
    }
  }
  let base = ``;
  for (i of alumnosMasejercicios) {
    base += `<strong>${i}</strong> con <strong>${mayorCantidad}</strong> ejercicios realizados <br>`
  };
  document.querySelector("#alumnoMasEjercicios").innerHTML = base;
  document.querySelector("#totalEntregas").innerHTML = totalEntregas;

  

}

function muestraEstadisticasAlumno() {
  ocultarTodo();
  document.querySelector("#navPrincipalA").style.display = "block";
  document.querySelector("#estadisticasAlumno").style.display = "block";
  document.querySelector("#cantidadPropuestos").innerHTML = usuarioLogueado.propuestos;
  document.querySelector("#cantidadEntregados").innerHTML = usuarioLogueado.entregados;
  document.querySelector("#cantidadCorregidos").innerHTML = usuarioLogueado.corregidos.length;
  document.querySelector("#cantidadSinCorregir").innerHTML = usuarioLogueado.sinCorregir.length;
  document.querySelector("#nivel").innerHTML = usuarioLogueado.nivel;
  document.querySelector("#porcentajeEntrega").innerHTML = "100%";
  if (usuarioLogueado.propuestos != 0) {
    document.querySelector("#porcentajeEntrega").innerHTML = usuarioLogueado.entregados / usuarioLogueado.propuestos;
  }
}

function muestraEntregasTotalProfe() {
  ocultarTodo();

  let codigoHTML = ``
  for (ejercicio of ejerciciosFiltrados) {
    codigoHTML += `<h3>${ejercicio.nombre}</h3><hr>`
    codigoHTML += generarEntregas(ejercicio.entregas);
    codigoHTML += `<br><br>`
  }
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#entregasProfe").innerHTML = codigoHTML;
  document.querySelector("#entregasProfe").style.display = "block";

}

function muestraIniProfe() {
  ocultarTodo();
  document.querySelector("#publicarEjercicio").style.display = "block";
  document.querySelector("#navPrincipalP").style.display = "block";
  document.querySelector("#inicio").style.display = "block";
  ejerciciosFiltrados = filtrarEjercicios(usuarioLogueado);
  document.querySelector("#ejerciciosFiltrados").innerHTML = generarEjercicios(ejerciciosFiltrados);
  document.querySelectorAll(".verEntregas").forEach(element => {
    element.addEventListener("click", entregasEjPuntual(element.id));
  });
  document.querySelector("#buscadorEjercicios").addEventListener("keyup", visualizarEjerciciosFiltrados);
  document.querySelector("#buscadorEjercicios").value = "";
}

function muestraIniAlumno() {
  ocultarTodo();
  document.querySelector("#navPrincipalA").style.display = "block";
  document.querySelector("#inicio").style.display = "block";
}

function muestraPerfil() {
  ocultarTodo();
  if (tipoUsuario == "profesor") {
    document.querySelector("#navPrincipalP").style.display = "block";
    document.querySelector("#nivelAlumno").style.display = "none";
    document.querySelector("#nombreProfesor").style.display = "none";
  } else {
    document.querySelector("#navPrincipalA").style.display = "block";
    document.querySelector("#nivelPerfil").innerHTML = usuarioLogueado.nivel;
    document.querySelector("#profePerfil").innerHTML = usuarioLogueado.profesor.nombreCompleto;
    document.querySelector("#nivelAlumno").style.display = "block";
    document.querySelector("#nombreProfesor").style.display = "block";
  }
  document.querySelector("#perfil").style.display = "block";
  document.querySelector("#nombrePerfil").innerHTML = usuarioLogueado.nombre;
  document.querySelector("#apellidoPerfil").innerHTML = usuarioLogueado.apellido;
  document.querySelector("#emailPerfil").innerHTML = usuarioLogueado.mail;
  document.querySelector("#telPerfil").innerHTML = usuarioLogueado.telefono;
  document.querySelector("#muestraImg").src = usuarioLogueado.imagen;
}

function actualizarPerfil() {
  let nombre = document.querySelector("#cambiarNombrePerfil").value;
  let apellido = document.querySelector("#cambiarApellidoPerfil").value;
  let mail = document.querySelector("#cambiarMailPerfil").value;
  let telefono = document.querySelector("#cambiarTelefonoPerfil").value;
  const regexMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
  let aValidarMail = mail.match(regexMail);
  let esValidoMail = (aValidarMail == mail);
  if (esValidoMail) {
    //obtener la imagen
    let imagen = document.querySelector("#fileImgPerfil").files[0]; //files[0] retorna el nombre del archivo.
    let reader = new FileReader();
    reader.onloadend = function () {
      usuarioLogueado.imagen = reader.result;
    }
    reader.readAsDataURL(imagen);
    usuarioLogueado.nombre = nombre;
    usuarioLogueado.apellido = apellido;
    usuarioLogueado.telefono = telefono;
    usuarioLogueado.mail = mail;
    setTimeout(muestraPerfil, 100);
  } else {
    // Mensaje de error a configurar
    alert("Correo electronico invalido.");
    // Mensaje de error a configurar
  }
}

function actualizarContraseña() {
  let passActual = document.querySelector("#contraseñaActualPerfil").value;
  let passNueva = document.querySelector("#nuevaContraseñaPerfil").value;
  const regexPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{3,})\S$/g;
  let aValidarPassword = passNueva.match(regexPassword);
  let esValidaPassword = (aValidarPassword == passNueva);
  if (usuarioLogueado.password == passActual) {
    if (esValidaPassword) {
      usuarioLogueado.password = passNueva;
      // Mensaje de error a configurar
      alert("Contraseña cambiada exitosamente.");
      // Mensaje de error a configurar
    } else {
      // Mensaje de error a configurar
      alert("La contraseña debe contener al menos 4 letras, una mayúscula, una minúscula y un número.");
      // Mensaje de error a configurar
    }
  } else {
    // Mensaje de error a configurar
    alert("Contraseña actual incorrecta.");
    // Mensaje de error a configurar
  }
  document.querySelector("#contraseñaActualPerfil").value = "";
  document.querySelector("#nuevaContraseñaPerfil").value = "";
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
  let index;
  for (i of usuarioLogueado.alumnos) {
    index = listaAlumnos.indexOf(i);
    if (i.nivel == "Intermedio") {
      opciones = `
      <option>Inicial</option>
      <option selected>Intermedio</option>
      <option>Avanzado</option>
      `
    } else if (i.nivel == "Avanzado") {
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
      <td><span>${i.nombreCompleto}</span></td>
      <td><span>${i.username}</span></td>
      <td>
      <select value="Intermedio" id="nivelSelect${index}" name="nivelSelect">
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

function actualizarNiveles() {
  for (i of usuarioLogueado.alumnos) {
    let index = listaAlumnos.indexOf(i);
    console.log(index);
    let nivelActual = document.querySelector(`#nivelSelect${index}`).value;
    let nivelViejo = i.nivel;
    i.nivel = nivelActual;
    // quitamos el alumno del nivel anterior
    switch (nivelViejo) {
      case "Inicial":
        index = usuarioLogueado.iniciales.indexOf(i);
        usuarioLogueado.iniciales.splice(index, 1);
        break;
      case "Intermedio":
        index = usuarioLogueado.intermedios.indexOf(i);
        usuarioLogueado.intermedios.splice(index, 1);
        break;
      case "Avanzado":
        index = usuarioLogueado.avanzados.indexOf(i);
        usuarioLogueado.avanzados.splice(index, 1);
        break;
    }
    // lo agregamos en el nivel nuevo
    switch (nivelActual) {
      case "Inicial":
        index = usuarioLogueado.iniciales.push(i);
        break;
      case "Intermedio":
        index = usuarioLogueado.intermedios.push(i);
        break;
      case "Avanzado":
        index = usuarioLogueado.avanzados.push(i);
        break;
    }
    muestraAlumnos();
  }
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
        <option value="${p.nombreCompleto}">${p.nombreCompleto}</option>
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
    for (let i of listaAlumnos) {
      let user = i;
      if (user.username == username && user.password == password) {
        resultado[0] = true;
        resultado[1] = "alumno";
        usuarioLogueado = i;
      }
    }
    //si el usuario no era alumno, lo buscamos en la lista de profesores.
    if (!resultado[0]) {
      for (let i of listaProfesores) {
        let user = i;
        if (user.username == username && user.password == password) {
          resultado[0] = true;
          resultado[1] = "profesor"
          usuarioLogueado = i;
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
      indiceProfesor = document.querySelector("#profeRegister").selectedIndex;
      profesor = listaProfesores[indiceProfesor];
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
            listaAlumnos.push(new Alumno(nombre, apellido, username, password, mail, profesor, telefono));
            listaProfesores[indiceProfesor].iniciales.push(listaAlumnos[listaAlumnos.length - 1]);
            listaProfesores[indiceProfesor].alumnos.push(listaAlumnos[listaAlumnos.length - 1]);
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

  function publicarEjercicio() {
    let titulo = document.querySelector("#tituloNuevoEjercicio").value;
    let nivel = document.querySelector("#nivelNuevoEjercicio").value;
    let descripcion = document.querySelector("#descripcionNuevoEjercicio").value;
    let archivo = document.querySelector("#archivoNuevoEjercicio").value;
    let archivoRuta = "assets/img/" + archivo.substring(archivo.lastIndexOf("\\") + 1);
    let fecha = new Date();
    let profesor = usuarioLogueado;
    let entregas = entregasNuevoEjercicio(usuarioLogueado, nivel);
    if (titulo != "" && archivoRuta != "assets/img/" && descripcion != "") {
      if (((descripcion.length + titulo.length) >= 20) && ((descripcion.length + titulo.length) <= 200)) {
        listaEjercicios.push(new Ejercicio(titulo, archivoRuta, descripcion, nivel, entregas, profesor, fecha));
        muestraIniProfe();
      } else {
        alert("La suma de caracteres entre titulo y descripcion no puede ser mayor a 200 ni menor a 20");
      }
    } else {
      alert("Faltar completar campos");
    }
  }

  function devolverPosicion(objeto, lista) {
    function igualar(param) {
      return param.nombre == objeto.nombre;
    }
    return lista.findIndex(igualar);
  }

  function entregasEjPuntual(id) {
    document.getElementById(String(id)).addEventListener("click", mostrarEntregas)
  }

  function mostrarEntregas() {
    let objetoUtilizado = ejerciciosFiltrados[this.id];
    ocultarTodo();
    document.querySelector("#navPrincipalP").style.display = "block";
    document.querySelector("#entregasProfe").style.display = "block";
    if(objetoUtilizado.entregas.length != 0 ){
      document.querySelector("#entregasProfe").innerHTML = generarEntregas(objetoUtilizado.entregas);
    }
  }

  function trabajoConCheckbox(vof) {
    if (vof) {
      return `checked`
    } else {
      return ``
    }
  }

  function dehabilitaBotones(vof) {
    if (vof) {
      return `disabled`
    } else {
      return ``
    }
  }

  function generarEjercicios(listaparam) {
    let display = ``
    for (ejercicio of listaparam) {
      display += `
    <div>
    <h2>${ejercicio.nombre}</h2>
    <h3>Nivel: <strong>${ejercicio.nivel}</strong></h3>
    <p><em>${ejercicio.fecha.toLocaleDateString()}</em></p>
    <img src=${ejercicio.archivo} alt="no se cargo archivo">
    <p>${ejercicio.descripcion}</p>
    <p>Cantidad de entregas: <strong>${ejercicio.entregas.length}</strong></p>
    <input type="button" value="Ver entregas" id="${devolverPosicion(ejercicio , ejerciciosFiltrados)}" class="verEntregas">
    </div><br><br><hr>`


    }
    return display;
  }

  function generarEntregas(listaParam) {
    let datosHTML = ``;
    for (entrega of listaParam) {
      datosHTML += `
      <div id="${devolverPosicion(entrega , listaParam)}">
      <table style="width:100%">
        <thead>
          <tr>
            <th>Alumno</th>
            <th>Nombre de usuario</th>
            <th>Adjunto</th>
            <th>Entregado</th>
            <th>Corregido</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody class="unaEntrega">
          <tr>
            <td><span class="nombreAlumnoEntrega">${entrega.alumnoAutor.nombreCompleto}</span></td>
            <td><span class="usuarioAlumnoEntrega">${entrega.alumnoAutor.username}</span></td>
            <td> 
              <audio controls>
                <source src="${entrega.archivo}">
              </audio>
            </td>
            <td>
              <input type="checkbox" name="entregadoCheck" class="entregadoCheck" ${trabajoConCheckbox(entrega.entregada)} disabled="true">
            </td>
            <td>
              <input type="checkbox" name="corregidoCheck"  class="corregidoCheck" ${trabajoConCheckbox(entrega.corregida)} ${dehabilitaBotones(!(entrega.entregada))} >
            </td>
            <td>
              <input type="number" name="nota" class="nota" min="-1" max="10" value=${entrega.nota} ${dehabilitaBotones(!(entrega.entregada))}>
            </td>
          </tr>
        </tbody>
      </table>
      <textarea cols="125" rows="3" placeholder="Observaciones">${entrega.observaciones}</textarea>
      <hr>
    </div>
      `
    }
    return datosHTML;
  }

  function visualizarEjerciciosFiltrados() {
    let textoEscrito = document.querySelector("#buscadorEjercicios").value.toLowerCase();
    let arrayEjFiltrados = [];
    let htmlMuestra = ``;
    let cabezalHtml = ``
    for (ejercicio of ejerciciosFiltrados) {
      if (ejercicio.nombre.toLowerCase().includes(textoEscrito)) {
        arrayEjFiltrados.push(ejercicio)
      }
    }
    if (arrayEjFiltrados.length == 0) {
      for (ejercicio of ejerciciosFiltrados) {
        if (ejercicio.descripcion.toLowerCase().includes(textoEscrito)) {
          arrayEjFiltrados.push(ejercicio)
        }
      }
    }
    if (arrayEjFiltrados.length == 0) {
      htmlMuestra = `<h2>No se encontraron ejercicios</h2>`
    } else {
      for (ejercicio of arrayEjFiltrados) {
        let arrayAux = [];
        arrayAux.push(ejercicio);
        htmlMuestra += generarEjercicios(arrayAux);
      }
    }
    document.querySelector("#ejerciciosFiltrados").innerHTML = htmlMuestra;
    document.querySelectorAll(".verEntregas").forEach(element => {
      element.addEventListener("click", entregasEjPuntual(element.id));
    });
  }

  function entregasNuevoEjercicio(profesor, nivel) {
    let arrayNuevasEntregas = [];
    switch (nivel) {

      case "Intermedio":
        for (alumno of profesor.intermedios) {
          let entrega = new Entrega(alumno, "", "Sin Entregar", "-1", new Date(), false, false);
          arrayNuevasEntregas.push(entrega);
        }
        break;

      case "Inicial":
        for (alumno of profesor.iniciales) {
          let entrega = new Entrega(alumno, "", "Sin Entregar", "-1", new Date(), false, false);
          arrayNuevasEntregas.push(entrega);
        }
        break;

      case "Avanzado":
        for (alumno of profesor.avanzados) {
          let entrega = new Entrega(alumno, "", "Sin Entregar", "-1", new Date(), false, false);
          arrayNuevasEntregas.push(entrega);
        }
        break;
    }
    return arrayNuevasEntregas;
  }
