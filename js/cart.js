let cartArray = [];

let cartJSON = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let subtotal1 = 0;
let comission = 0.15;

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

   //variables de validacion
   let formadepago = document.getElementById("metodoDePago").innerText;
   let premium = document.getElementById('premium');
   let express = document.getElementById('express');
   let standar = document.getElementById('standar');
   let calle = document.getElementById('streetName');
   let esquina = document.getElementById('streetCorner');
   let numero = document.getElementById('streetNumber');
   let faltaInfo = false;
   let MSG = "Se realizó la compra con éxito se enviarán los detalles de facturación a su correo"

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

    let comprar = document.getElementById('form');
    comprar.addEventListener("submit", function (e){
      e.preventDefault(); 
      e.preventDefault();

        calle.classList.remove('is-invalid');
        esquina.classList.remove('is-invalid');
        numero.classList.remove('is-invalid');

        if (calle.value === "")
        {
            calle.classList.add('is-invalid');
            faltaInfo = true;
        }
        
        if (esquina.value === "")
        {
            esquina.classList.add('is-invalid');
            faltaInfo = true;
        }

        if (numero.value === "")
        {
            numero.classList.add('is-invalid');
            faltaInfo = true;
        }
        
        if (formadepago === "No ha seleccionado"){
            faltaInfo = true;
        
        }  
        
        else{
          validarForm()
        }
        
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
            <td> USD<p id="subtotal"> ${subtotal1}</p></td>
          </tr> 
        </tbody>
      </table>
     `
       
        document.getElementById("carrito").innerHTML = htmlCart;
        
        }
    }
    
    //Funcion para la alerta de compra
    function showAlert() {
      document.getElementById("alertaCompra").classList.add("show");
  }


  function validarForm() {
    if(document.getElementById("form").checkValidity) {
        showAlert();
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

           //Validaciones

           /*function validaciones () {
           
        
            if (premium.checked || express.checked || standar.checked ) {
                premium.classList.remove('is-invalid');
                premium.classList.remove('link-danger');
            } else {
                premium.classList.add('is-invalid');
                premium.classList.add('link-danger');
            };
        
            if (calle === "") {
                calle.classList.add('is-invalid');
            }else {
                calle.classList.remove('is-invalid');
            }
        
            if(esquina === "") {
                esquina.classList.add('is-invalid');
            }else{
                esquina.classList.remove('is-invalid');
            }
        
            if(numero === "") {
                numero.classList.add('is-invalid');
            }else{
                numero.classList.remove('is-invalid');
            }
         
        }
*/

      
      })