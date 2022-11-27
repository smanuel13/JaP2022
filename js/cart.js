let cartArray = [];

let cartJSON = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let subtotal1 = 0;
let comission = 0.15;
//evento de escucha a la carga del dom que trae los datos al cargar la pagina y los pasa como parametros a la funcion

document.addEventListener("DOMContentLoaded", function (a) {
  getJSONData(cartJSON).then(function (resultObj) {
      if (resultObj.status === "ok") {
          console.log(resultObj);
          cartArray = resultObj.data;
          showCartList(cartArray);
          updateSubtotal();
          actualizarCostos()  
        
          
      }
      //Evento de escucha al objeto con id cantidadarticulos para que al cambiar actualice el valor de la cantidad y por lo tanto del subtotal
      document.getElementById("cantidadArticulos").addEventListener("change", function(){
        console.log()
        subtotal1 = this.value;
        updateSubtotal();
        
    });

    document.addEventListener("change", ()=>{
      disPaymentforma();
    })

       

      });
});

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
     `
       
        document.getElementById("carrito").innerHTML = htmlCart;
        
        }
    }
    //funcion para desactivar los campos del modal (NOMEFUNCIONAANOSEPORQUEPREGUNTARDANIEL)
    // function disModal() {

      // let cCard = document.getElementById("cCard");
      // let bTransf = document.getElementById("bTransf");
      // let cNumber = document.getElementById("cardNumber"); 
      // let cCode = document.getElementById("cardCode"); 
      // let cExp = document.getElementById("cardExp"); 
      // let accountNumber = document.getElementById("cNumber");

  // if (cCard.checked) {
      // cNumber.disabled = false
      // cCode.disabled = false
      // cExp.disabled = false
      // accountNumber.disabled = true
  // } else if (bTransf.checked) {
      // cNumber.disabled = true
      // cCode.disabled = true
      // cExp.disabled = true
      // accountNumber.disabled = false
  // }

  // document.getElementById("contidionsModal").addEventListener("click", function(e){
    // disModal();

  // }
  // )}

    //funcion para actualizar el subtotal, obteniene los elementos y hace la cuenta
    function updateSubtotal(){
      let cantArt = document.getElementById("cantidadArticulos").value;
      console.log(cantArt)
      let costArt = document.getElementById("costoUnidad").innerHTML;
      console.log(costArt)
      let subtotal1 = cantArt*costArt;
      console.log(subtotal1);
      document.getElementById("subtotal").innerHTML = subtotal1;
      document.getElementById("productSubCost").innerHTML = subtotal1;
    }
 console.log(subtotal1);
  
 //para calcular el costo de envío y actualizar el total
  
      function actualizarCostos(){
        let precioUnitario = document.getElementById("productSubCost").innerHTML;
        let costoEnvio = document.getElementById('sendCostPrice').innerHTML=Math.round(comission* parseFloat(precioUnitario));
    
        document.getElementById('totalCostText').innerHTML=(parseFloat(precioUnitario) + parseFloat(costoEnvio))
        
    }



      document.getElementById("premium").addEventListener("change", function(){
        comission = 0.15;
        actualizarCostos();
      });
    
      document.getElementById("express").addEventListener("change", function(){
        comission = 0.07;
        actualizarCostos();
      });
    
      document.getElementById("standard").addEventListener("change", function(){
        comission = 0.05;
        actualizarCostos();
      });



    //Variables del Modal y metodos de pago

      let cardNumber = document.getElementById("cardNumber");
      let cardExp = document.getElementById("cardExp");
      let cardCode = document.getElementById("cardCode");
      let cNumber = document.getElementById("cNumber");
      let metodoDePago = document.getElementById("metodoDePago");

        let metodo1 = document.getElementById("cCard");
        console.log(metodo1)
        let metodo2 = document.getElementById("bTransf")
        console.log(metodo2)


//Función para deshabilitar los campos del modal y mostrar el metodo de pago seleccionado
      function disPaymentforma(){
      
          metodo1.addEventListener("click", function (e) {
          cardNumber.disabled = false;
          cardExp.disabled = false;
          cardCode.disabled = false;
          cNumber.disabled = true;
          metodoDePago.innerText = "Tarjeta de credito";
            })

          metodo2.addEventListener("click", function (e) {
          cardNumber.disabled = true;
          cardExp.disabled = true;
          cardCode.disabled = true;
          cNumber.disabled = false;
          metodoDePago.innerText = "Transferencia bancaria";

          })
          
          document.getElementById("contidionsModal").addEventListener("click", function(e){
             disPaymentforma();
        
           })}
           