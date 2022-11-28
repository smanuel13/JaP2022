let primerNombre = document.getElementById("name");
let segundoNombre = document.getElementById("name_second");
let apellido1 = document.getElementById("lastname");
let apellido2 = document.getElementById("lastname_second");
let email = document.getElementById("email");
let celular = document.getElementById("cel");
let guardarDatos = document.getElementById("guardar");

//Cuando cargo el DOM traigo si hay usuario guardado y muestro el usuario del local storage
document.addEventListener("DOMContentLoaded", function (e) {
    email.value = localStorage.getItem("mail1"); 
    mostrarUsuarioGuardado();
});

//Traigo y guardo en una variable "perfil" el contenido del FORM
let perfil = document.getElementById("perfil"); 
perfil.addEventListener("submit", function(e){
    e.preventDefault(); 
    e.preventDefault();
    let faltaInfor = false;

    primerNombre.classList.remove('is-invalid');
    apellido1.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    celular.classList.remove('is-invalid');

//condiciones para agregar la clase "is-invalid"
    if (primerNombre.value === "")
        {
            primerNombre.classList.add('is-invalid');
            faltaInfor = true;
        }

    if (apellido1.value === "")
        {
            apellido1.classList.add('is-invalid');
            faltaInfor = true;
        }

    if (email.value === "")
        {
            email.classList.add('is-invalid');
            faltaInfor = true;
        }

    if (celular.value === "")
        {
            celular.classList.add('is-invalid');
            faltaInfor = true;
        }
      //Si falta información creamos una nueva variable que va al local storage con los datos del usuario   
    if(!faltaInfor){ 
        let nuevoPerfil = {
            primerNombre: primerNombre.value,
            segundoNombre: segundoNombre.value,
            apellido1: apellido1.value,
            apellido2: apellido2.value,
            email: email.value,
            celular: celular.value,
        }
        let nuevoPerfilUsuario = JSON.stringify(nuevoPerfil);
        localStorage.setItem("datosUsuario", nuevoPerfilUsuario); 
        perfilGuardadoOK();
    }    
        
} );


//Función para mostrar que se guardó ok los datos del perfil

 function perfilGuardadoOK(){ 
   document.getElementById("msg").innerHTML+= `
   <div class="alert alert-success alert-dismissible fade show" role="alert">
   <h4 class="alert-heading">¡Éxito!</h4>
   <p>El Perfil se guardó correctamente</p>
   <hr>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
 `   
};


function mostrarUsuarioGuardado(){
    let datosUsuario = localStorage.getItem("datosUsuario");
    if(datosUsuario !== null){
        let datosPerfil = JSON.parse(datosUsuario);
        primerNombre.value = datosPerfil.primerNombre;
        segundoNombre.value = datosPerfil.segundoNombre;
        apellido1.value = datosPerfil.apellido1;
        apellido2.value = datosPerfil.apellido2;
        email.value = datosPerfil.email;
        celular.value = datosPerfil.celular;
    }

};


