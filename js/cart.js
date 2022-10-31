let cartArray = [];

let cartJSON = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let subtotal1 = 0;

//Funcion para mostrar los articulos del carro con la data obtenida del json de arriba
function showCartList(array){
    let array1 = array.articles;
    console.log(array1);
    let htmlCart = "";
    for (let i = 0; i < array1.length; i++) {
        let articulo = array1[i];
        htmlCart += `
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"><strong>Nombre</strong></th>
            <th scope="col"><strong>Costo</strong></th>
            <th scope="col"><strong>Cantidad</strong></th>
            <th scope="col"><strong>Subtotal</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><img src=${articulo.image} class="img-thumbnail carrito"></th>
            <td>${articulo.name}</td>
            <td>${articulo.currency}  <p id="costoUnidad">${articulo.unitCost}</p></td>
            <td><input type="number" id="cantidadArticulos" min="1" max="500" value="${articulo.count}"></td>
            <td><p id="subtotal">${subtotal1}</p></td>
          </tr> 
        </tbody>
      </table>
      <hr class="mb-4">
          <h5 class="mb-3">Tipo de Envío</h5>
          <div class="d-block my-3">
            <div class="custom-control custom-radio">
              <input id="premiumradio" name="sendType" type="radio" class="custom-control-input" checked=""
                required="">
              <label class="custom-control-label" for="premiumradio">Premium 2 a 5 días (15%)</label>
            </div>
            <div class="custom-control custom-radio">
              <input id="expressradio" name="sendType" type="radio" class="custom-control-input" required="">
              <label class="custom-control-label" for="expressradio">Express 5 a 8 días (7%)</label>
            </div>
            <div class="custom-control custom-radio">
              <input id="standardradio" name="sendType" type="radio" class="custom-control-input" required="">
              <label class="custom-control-label" for="standardradio">Standard 12 a 15 días (5%)</label>
            </div>
            <hr>
            <div>
            <div  >
              <h4 class="mb-3">Dirección de envío</h4>
              <form class="needs-validation" id="send-info">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="streetName">Calle</label>
                    <input type="text" class="form-control" id="streetName" value="" name="streetName">
                    <div class="invalid-feedback">
                      Ingresa una calle
                    </div>
                  </div>
                  <br>
                  <div class="col-md-6 mb-3">
                    <label for="streetNumber">Numero</label>
                    <input type="text" class="form-control" id="streetNumber" value="" name="streetNumber">
                    <div class="invalid-feedback">
                      Ingresa un numero de calle
                    </div>
                  </div>
                  <br>
                  <div class="col-md-6 mb-3">
                    <label for="streetCorner">Esquina</label>
                    <input type="text" class="form-control" id="streetCorner" value="" name="streetCorner">
                    <div class="invalid-feedback">
                      Ingresa una Esquina
                    </div>
                  </div>
                </div>

        `

        document.getElementById("carrito").innerHTML = htmlCart;
        
        }
    }

    //funcion para actualizar el subtotal, obteniene los elementos y hace la cuenta
    function updateSubtotal(){
      let cantArt = document.getElementById("cantidadArticulos").value;
      console.log(cantArt)
      let costArt = document.getElementById("costoUnidad").innerHTML;
      console.log(costArt)
      let subtotal1 = cantArt*costArt;
      console.log(subtotal1);
      document.getElementById("subtotal").innerHTML = subtotal1;
    }

    //evento de escucha a la carga del dom que trae los datos al cargar la pagina y los pasa como parametros a la funcion

document.addEventListener("DOMContentLoaded", function (a) {
    getJSONData(cartJSON).then(function (resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj);
            cartArray = resultObj.data;
            showCartList(cartArray);
            
        }
        //Evento de escucha al objeto con id cantidadarticulos para que al cambiar actualice el valor de la cantidad y por lo tanto del subtotal
        document.getElementById("cantidadArticulos").addEventListener("change", function(){
          console.log()
          subtotal = this.value;
          updateSubtotal();
      });
  
         
  
        });
});