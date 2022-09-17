let correo = document.getElementById("txt_email") ; //por alguna razón no puedo definir la variable correo con un .value porque me toma vacío
let contraseña = document.getElementById("txt_password") ; 
let botonRegistrar = document.getElementById("btn_boton");
//se sacó el .value de las variables de arriba porque me traía undefined por eso no funcionaba el login
console.log(correo);
console.log(contraseña);
console.log(botonRegistrar)
//console.log(contraseña);
//console.log(botonRegistrar);
/*este eventlistener es para que evite el default que es recargar la pagina original, si lo saco no funciona la redirección
*/
 botonRegistrar.addEventListener('click', (e) => {
     e.preventDefault()
 }
 )
  
/*defino la funcion loguear que tiene un condicional if para que si el campo correo y contraseña es distinto de vacío me redireccione a la portada.html*/ 
function loguear() { //le estaba pasando (correo) como parametro a la funcion entonces daba error y en el local storage me lo guardaba como un objecto pointerEvent
    console.log(correo);
    console.log(contraseña);
    console.log("entro")
    
   
    if ((correo.value !== "" && contraseña.value !== ""))
    {
        //localStorage.setItem("mail", JSON.stringify(correo))
        localStorage.setItem("mail1",  correo.value)
        
        window.location.href = "portada.html"
        
    } else{
        alert(("Ingrese un correo electronico y una contraseña"))
    }

  }
 
  /*Al elemento boton le agrego un evento que es cuando haga click que corra la funcion loguear*/
  botonRegistrar.addEventListener("click" ,loguear);
