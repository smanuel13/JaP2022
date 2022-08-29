
function loguear() {
    let correo = document.getElementById("email").value
    let contraseña = document.getElementById("password").value
    if ((correo !== "") && (contraseña !== "")){
    window.location.href = ("portada.html")
} else{
    alert(("Ingrese un correo electronico y una contraseña"))
}
}
document.getElementById("boton").addEventListener("click", loguear);
