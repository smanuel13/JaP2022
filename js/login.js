function logueoExitoso() {
    window.location.href = "https://smanuel13.github.io/JaP2022/portada.html";
}

function logueoError() {
    alert(Ingrese un correo electronico y una contraseña)

    ;
}

function validar() {
    let correo = document.getElementById("floatingInput").value
    let contraseña = document.getElementById("floatingPassword").value

    if ((correo !== "") && (contraseña !== "")){
    return logueoExitoso();
} else {
    return logueoError();
}
}

document.getElementById("boton").addEventListener("click", validar)
