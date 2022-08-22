
function loguear() {
    let correo = document.getElementById("email").value
    let contraseña = document.getElementById("password").value
    if ((correo !== "") && (contraseña !== "")){
    window.location.replace="portada.html"
        console.log(window.location.login="portada.html")
} else{
    alert("Ingrese un correo electronico y una contraseña")
}
}
console.log(loguear)
document.getElementById("boton").addEventListener("click", loguear);
