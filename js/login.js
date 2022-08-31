let correo = document.getElementById("email") 
let contraseña = document.getElementById("password") 
let botonRegistrar = document.getElementById("boton")
/* se sacó el .value de las variables de arriba porque me traía undefined por eso no funcionaba el login
console.log(correo);
console.log(contraseña);
console.log(botonRegistrar);
 */ 


/*este eventlistener es para que evite el default que es recargar la pagina original, si lo saco no funciona la redirección
*/

 botonRegistrar.addEventListener('click', (e) => {
     e.preventDefault()
 }

 ) 
/*defino la funcion loguear que tiene un condicional if para que si el campo correo y contraseña es distinto de vacío me redireccione a la portada.html*/ 
function loguear() {
    /*console.log("sdsdsd")
    console.log(correo.value)
    console.log(contraseña.value)*/
    if ((correo !== "" && contraseña !== ""))
    {
        window.location.href = "portada.html"
} else{
    alert(("Ingrese un correo electronico y una contraseña"))
}

  }
 
  /*Al elemento boton le agrego un evento que es cuando haga click que corra la funcion loguear*/
  botonRegistrar.addEventListener("click", loguear);
