let cartArray = [];

let cartJSON = "https://japceibal.github.io/emercado-api/user_cart/25801.json";



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
            <td>${articulo.currency}  ${articulo.unitCost}</td>
            <td><input type="number" id="cantidadArticulos" min="1" max="500" value="${articulo.count}"></td>
            <td id="subtotal">${articulo.currency}  ${articulo.unitCost*cantArticulo}</td>
          </tr> 
        </tbody>
      </table>
        `

        document.getElementById("carrito").innerHTML = htmlCart;
        let cantArticulo = document.getElementById("cantidadArticulos").value;
        }
    }


document.addEventListener("DOMContentLoaded", function (a) {
    getJSONData(cartJSON).then(function (resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj);
            cartArray = resultObj.data;
            showCartList(cartArray);
            
        }
        document.getElementById("cantidadArticulos").addEventListener("input", function(){

            
            document.getElementById("subtotal").innerHTML = `${}
            `
        })
    
        });
});