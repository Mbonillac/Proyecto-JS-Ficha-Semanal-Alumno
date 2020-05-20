/*-----Codigo para la ventana modal AÑADIR Alumno------------------------------------------------------------------------------------*/

// declaramos la variable de la ventana modal
var modalAlumno = document.getElementById("ventana_modal_nalumno");

// declaramos la variable del boton que abrira la ventana modal
var botonAlumno = document.getElementById("bt_nuevo_alumno");

// declaramos la variable del elemento html donde se encuentra el boton cerrrar de la ventana modal
var XAlumno = document.getElementsByClassName("cerrarAlumno")[0];

// funcion que abre la ventana modal al hacer click en el boton "Añadir" 
botonAlumno.onclick = function() {
  modalAlumno.style.display = "block";
}

// funcion que cierra la ventana modal al hacer click en la "X"
  XAlumno.onclick = function() {
    modalAlumno.style.display = "none";
}

/*-----Codigo para la ventana modal AÑADIR PROFESOR------------------------------------------------------------------------------------*/

// declaramos la variable de la ventana modal
var modalProfesor = document.getElementById("ventana_modal_nprofesor");

// declaramos la variable del boton que abrira la ventana modal
var botonProfesor = document.getElementById("bt_nuevo_profesor");

// declaramos la variable del elemento html donde se encuentra el boton cerrrar de la ventana modal
var XProfesor = document.getElementsByClassName("cerrarProfesor")[0];

// funcion que abre la ventana modal al hacer click en el boton "Añadir" 
botonProfesor.onclick = function () {
  modalProfesor.style.display = "block";
  
}
// funcion que cierra la ventana modal al hacer click en la "X"
  XProfesor.onclick = function() {
    modalProfesor.style.display = "none";
}


/*-----Codigo para la ventana modal AÑADIR EMPRESA-----------------------------------------------------------------------------------*/

// declaramos la variable de la ventana modal
var modalEmpresa = document.getElementById("ventana_modal_nempresa");

// declaramos la variable del boton que abrira la ventana modal
var botonEmpresa = document.getElementById("bt_nuevo_empresa");

// declaramos la variable del elemento html donde se encuentra el boton cerrrar de la ventana modal
var XEmpresa = document.getElementsByClassName("cerrarEmpresa")[0];

// funcion que abre la ventana modal al hacer click en el boton "Añadir" 
botonEmpresa.onclick = function() {
  modalEmpresa.style.display = "block";
}

// funcion que cierra la ventana modal al hacer click en la "X"
XEmpresa.onclick = function() {
    modalEmpresa.style.display = "none";
}

/*-----Codigo para la ventana modal AÑADIR ASIGNACIONES-----------------------------------------------------------------------------------*/

// declaramos la variable de la ventana modal
var modalAsignacion = document.getElementById("ventana_modal_nasignacion");

// declaramos la variable del boton que abrira la ventana modal
var botonAsignacion = document.getElementById("bt_nuevo_asignaciones");

// declaramos la variable del elemento html donde se encuentra el boton cerrrar de la ventana modal
var XAsignacion = document.getElementsByClassName("cerrarAsignacion")[0];

// funcion que abre la ventana modal al hacer click en el boton "Añadir" 
botonAsignacion.onclick = function() {
  modalAsignacion.style.display = "block";
}

// funcion que cierra la ventana modal al hacer click en la "X"
XAsignacion.onclick = function() {
  modalAsignacion.style.display = "none";
}

// funcion que cierra la ventana modal al hacer click en cualquier parte fuera de la misma (todos los grupos)
window.onclick = function(event) {
  if (event.target == modalAsignacion){
    modalAsignacion.style.display = "none";
  }
  if (event.target == modalEmpresa){
    modalEmpresa.style.display = "none";
  }
  if ( event.target == modalAlumno){
    modalAlumno.style.display = "none";
  }
  if (event.target == modalProfesor) {
    modalProfesor.style.display = "none";
  }
}

/*Declaracion variable mensaje de registro realizado------------------------------------------------------------*/
var mensajeRegistro=document.getElementById("aviso");


/*-----OBJETOS----------------------------------------------------------------------------------------------------------------*/
//Funcion que crea el objeto ALUMNO y guardar los datos de la modal ALUMNO
function guardarNuevoAlumno(){
 
//crea el constructor de objetos
  function Alumno (nombre,apellidos,ciclo,curso){
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.ciclo=ciclo;
    this.curso=curso;
  }
  //se les asigna a cada propiedad del objeto, los valores que introducimos a traves de input
  var nombreAlumno=document.getElementById("nombreDeAlumno").value;
  
  var apellidosAlumno=document.getElementById("apellidosDeAlumno").value;

  var cicloAlumno=document.getElementById("ciclo").value;
  
  var cursoAlumno=document.getElementById("curso").value;
  
  //se centralizan todos en una variable que usaremos para llenar nuestra tabla
   nuevoAlumno = new Alumno (nombreAlumno,apellidosAlumno,cicloAlumno,cursoAlumno);
  
  registroAlumnos();
  //funcion que lanza el mensaje del registro realizado
   mensajeRegistro.style.display = "block";
  setTimeout(function realizadoExito() {
    mensajeRegistro.style.display = "none";},1000);
  //cierra la ventana modal de nuevo alumno al hacer click en añanir
    modalAlumno.style.display = "none";
    }
  //declaramos el array vacio que llenaremos con los datos introducidos en los inputs a traves de las variables antes declaradas
  var baseDatosAlumnos=[];
  //esta funcion a traves de .push añade los datos en el array
  function registroAlumnos(){
    baseDatosAlumnos.push(nuevoAlumno);
   //mostramos los datos en la tabla seleccionadas, en el elemento html.
    document.getElementById("tabla_alumnos").innerHTML += '<tbody><td>'+nuevoAlumno.nombre+'</td><td>'+nuevoAlumno.apellidos+'</td><td>'+nuevoAlumno.ciclo+'</td><td>'+nuevoAlumno.curso+'</td></tbody>';
  };
/*-----------------------------------------------------------------------------------------------------------------------------------------*/
//Funcion que crea el objeto PROFESOR y guardar los datos de la modal PROFESOR
function guardarNuevoProfesor(){
  
function Profesor (nombre,apellidos){
  this.nombre=nombre;
  this.apellidos=apellidos;
}

var nombreProfesor=document.getElementById("nombreDeProfesor").value;

var apellidosProfesor=document.getElementById("apellidosDeProfesor").value;

nuevoProfesor = new Profesor (nombreProfesor,apellidosProfesor);
  
registroProfesores()
 
//funcion que lanza el mensaje del registro realizado
mensajeRegistro.style.display = "block";
setTimeout(function realizadoExito() {
  mensajeRegistro.style.display = "none";},1000);
//cierra la ventana modal de nuevo profesor al hacer click en añanir
modalProfesor.style.display = "none";
}

var baseDatosProfesores=[];

function registroProfesores(){
baseDatosProfesores.push(nuevoProfesor);

document.getElementById("tabla_profesores").innerHTML += '<tbody><td>'+nuevoProfesor.nombre+'</td><td>'+nuevoProfesor.apellidos+'</td></tbody>';

}

/*---------------------------------------------------------------------------------------------------------------------------------------------------*/
//Funcion que crea el objeto Empresa y guardar los datos de la modal EMPRESA
function guardarNuevoEmpresa(){
  
  function Empresa (nombre,direccion,web,personacontacto,telefono,email,tutorlaboral){
    this.nombre=nombre;
    this.direccion=direccion;
    this.web=web;
    this.personacontacto=personacontacto;
    this.telefono=telefono;
    this.email=email;
    this.tutorlaboral=tutorlaboral;
  }
  var nombreEmpresa=document.getElementById("nombreDeEmpresa").value;
  
  var direccionEmpresa=document.getElementById("direccionDeEmpresa").value;

  var webEmpresa=document.getElementById("web").value;
  
  var perContactoEmpresa=document.getElementById("personaDecontacto").value;

  var telefonoEmpresa=document.getElementById("telefono").value;

  var emailEmpresa=document.getElementById("email").value;

  var tutorLaboralEmpresa=document.getElementById("tutorLaboral").value;
  
   nuevoEmpresa = new Empresa (nombreEmpresa,direccionEmpresa,webEmpresa,perContactoEmpresa,telefonoEmpresa,emailEmpresa,tutorLaboralEmpresa);
  
  registroEmpresas();
  //funcion que lanza el mensaje del registro realizado
  mensajeRegistro.style.display = "block";
  setTimeout(function realizadoExito() {
    mensajeRegistro.style.display = "none";},1000);
  //cierra la ventana modal de nuevo Empresa al hacer click en añanir
  modalEmpresa.style.display = "none";
  }
  var baseDatosEmpresas=[];
  function registroEmpresas(){
    baseDatosEmpresas.push(nuevoEmpresa);
    
    document.getElementById("tabla_empresas").innerHTML += '<tbody><td>'+nuevoEmpresa.nombre+'</td><td>'+nuevoEmpresa.direccion+'</td><td>'+nuevoEmpresa.web+'</td><td>'+nuevoEmpresa.personacontacto+'</td><td>'
    +nuevoEmpresa.telefono+'</td><td>'+nuevoEmpresa.email+'</td><td>'+nuevoEmpresa.tutorlaboral+'</td></tbody>';
  }


  
/*-----------------------------------------------------------------------------------------------------------------------------------------*/
//Funcion que crea el objeto Asignaciones y guardar los datos de la modal Asignaciones
function guardarNuevoAsignacion(){
  
  function Asignacion (nombreyapellidos,nombreempresa,tutorlaboral,tutordocente,fechainiciopracticas,fechafinalpracticas){
    this.nombreyapellidos=nombreyapellidos;
    this.nombreempresa=nombreempresa;
    this.tutorlaboral=tutorlaboral;
    this.tutordocente=tutordocente;
    this.fechainiciopracticas=fechainiciopracticas;
    this.fechafinalpracticas=fechafinalpracticas;
  
  }
  var nombreYApellidosAlumno=document.getElementById("nombreyapellidos").value;
  
  var nombreDeLaEmpresa=document.getElementById("nombre_empresa").value;

  var tutorLaboral=document.getElementById("tutor_laboral").value;
  
  var tutorDocente=document.getElementById("tutor_docente").value;

  var fechaIniPrac=document.getElementById("fecha_inicio").value;

  var fechaFinPrac=document.getElementById("fecha_fin").value;

  
   nuevoAsignacion = new Asignacion (nombreYApellidosAlumno,nombreDeLaEmpresa,tutorLaboral,tutorDocente,fechaIniPrac,fechaFinPrac);
  
  registroAsignaciones();
  //funcion que lanza el mensaje del registro realizado
  mensajeRegistro.style.display = "block";
  setTimeout(function realizadoExito() {
    mensajeRegistro.style.display = "none";},1000);
  //cierra la ventana modal de nuevo Empresa al hacer click en añanir
  modalAsignacion.style.display = "none";
  }
  var baseDatosAsignaciones=[];
  function registroAsignaciones(){
    baseDatosAsignaciones.push(nuevoAsignacion);
    
    document.getElementById("tabla_asignaciones").innerHTML += '<tbody><td>'+nuevoAsignacion.nombreyapellidos+'</td><td>'+nuevoAsignacion.nombreempresa+'</td><td>'+nuevoAsignacion.tutorlaboral+'</td><td>'+nuevoAsignacion.tutordocente+'</td><td>'
    +nuevoAsignacion.fechainiciopracticas+'</td><td>'+nuevoAsignacion.fechafinalpracticas+'</td></tbody>';
  }


  
/*-----------------------------------------------------------------------------------------------------------------------------------------*/





/*variable y funcion para mostrar la tablas que queremos---------------------------------------------------*/
/*Tabla Alumnos*/
var tablaDeAlumnos=document.getElementById("paraAlumnos");
var botonDeAlumnos=document.getElementById("bt_alumnos");
//Nos permite mostrar/ocultar las ventanas y asi simular que nos movemos por el menu lateral
botonDeAlumnos.onclick=function (){
  tablaDeAlumnos.style.display="block";
  tablaDeProfesores.style.display="none";
  tablaDeEmpresas.style.display="none";
  tablaDeAsignaciones.style.display="none";
  fichaSemanal.style.display="none"
  }

/*Tabla Profesores*/
var tablaDeProfesores=document.getElementById("paraProfesores");
var botonDeProfesores=document.getElementById("bt_profesores");
botonDeProfesores.onclick=function (){
  tablaDeProfesores.style.display="block";
  tablaDeAlumnos.style.display="none";
  tablaDeEmpresas.style.display="none";
  tablaDeAsignaciones.style.display="none";
  fichaSemanal.style.display="none"
  }


/*Tabla Empresas*/
var tablaDeEmpresas=document.getElementById("paraEmpresas");
var botonDeEmpresas=document.getElementById("bt_empresas");
botonDeEmpresas.onclick=function verTablaDeEmpresas(){
  tablaDeEmpresas.style.display="block";
  tablaDeProfesores.style.display="none";
  tablaDeAlumnos.style.display="none";
  tablaDeAsignaciones.style.display="none";
  fichaSemanal.style.display="none"
  }
  /*Tabla Asignaciones*/
var tablaDeAsignaciones=document.getElementById("paraAsignaciones");
var botonDeAsignaciones=document.getElementById("bt_asignaciones");
botonDeAsignaciones.onclick=function verTablaDeAsignaciones(){
  tablaDeAsignaciones.style.display="block"
  tablaDeEmpresas.style.display="none";
  tablaDeProfesores.style.display="none";
  tablaDeAlumnos.style.display="none";
  fichaSemanal.style.display="none"
  }
/*Ficha Semanal*/
var fichaSemanal=document.getElementById("paraFichaSemanal");
var botonDeFichaSemanal=document.getElementById("bt_ficha_semanal");
botonDeFichaSemanal.onclick=function (){
  fichaSemanal.style.display="block"
  tablaDeEmpresas.style.display="none";
  tablaDeProfesores.style.display="none";
  tablaDeAlumnos.style.display="none";
  tablaDeAsignaciones.style.display="none"
  }






//linea de codigo de control**************************************
/*console.log("el enlace FUNCIONA")*/