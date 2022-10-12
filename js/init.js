let CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
//const PRODUCTS_URL= "https://japceibal.github.io/emercado-api/cats_products/101.json";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

/*Creo un event de escucha para que primero cargue el dom, luego ejecuto mi funcion que lo que hace es:
Defino una variable loginName para traer el elemento mail1 guardado en el local storage (ver login.js linea 27) luego defino una
variable para agregar ese dato a la barra de navegacion de la pagina y por ultimo lo agrego al dom con un id (logUser)que le puse al
contenedor <li> de la barra */
document.addEventListener("DOMContentLoaded", function(){
  let loginName = localStorage.getItem("mail1")
  let htmlContentToAppend = `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ${loginName}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
    <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
    <li><a class="dropdown-item" href="cart.html">Carrito de Compras</a></li>
    <li><a class="dropdown-item" id="sesion">Cerrar Sesión</a></li>
  </ul>
</div>
     `
  console.log(loginName)
  document.getElementById("logUser").innerHTML = htmlContentToAppend
  document.getElementById("sesion").addEventListener("click", function(){
    let cerrarSesion = confirm("Está a punto de cerrar su sesión");
    if (cerrarSesion){
      window.location.href = "index.html"
      localStorage.removeItem("mail1")
    }
  });

});
