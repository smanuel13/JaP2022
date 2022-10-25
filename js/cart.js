let cartArray = [];

let cartJSON = "https://raw.githubusercontent.com/smanuel13/JaP2022/main/prueba.json";
let subtotal = 0;

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
            <td><p id="subtotal">${subtotal}</p></td>
          </tr> 
        </tbody>
      </table>
        `

        document.getElementById("carrito").innerHTML = htmlCart;
        
        }
    }

    function updateSubtotal(){
      let cantArt = document.getElementById("cantidadArticulos").value;
      console.log(cantArt)
      let costArt = document.getElementById("costoUnidad").innerHTML;
      console.log(costArt)
      let subtotal1 = cantArt*costArt;
      console.log(subtotal1);
      document.getElementById("subtotal").innerHTML = subtotal1;
    }

document.addEventListener("DOMContentLoaded", function (a) {
    getJSONData(cartJSON).then(function (resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj);
            cartArray = resultObj.data;
            showCartList(cartArray);
            
        }
        document.getElementById("cantidadArticulos").addEventListener("change", function(){
          console.log()
          subtotal = this.value;
          updateSubtotal();
      });
  
         
  
        });
});