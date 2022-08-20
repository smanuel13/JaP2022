let productsArray = [];

function showProductsList(array) {
    let htmlContentToAppend = "";
    let array1= array.products
   for (let i = 0; i < array1.length; i++) {
        let producto = array1[i];
        //console.log(producto)
        htmlContentToAppend += `
        <div class="container list-group-item list-group-item-action"> 
            <div class="row">
                <div class="col-3">
                    <img src="` + producto.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        
                        <h4>`+ producto.name + "-" + producto.cost + `</h4> 
                        <p> `+ producto.description + `</p> 
                        </div>
                        <small class="text-muted">` + producto.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function (a) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            showProductsList(productsArray);
            
        }
    });
});