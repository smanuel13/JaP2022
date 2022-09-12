let productsArray = [];

/*let categoriesName = [];

function showCategoriesName(arrayn) {
    let htmlContentToAppend = "";
    let arraynamevar = arrayn.name
    console.log(arraynamevar)
   for (let i = 0; i < arraynamevar.length; i++) {
        let productoCat = arraynamevar[i];
        console.log(productoCat)
        htmlContentToAppend += `
            <h1>Productos</h1>
                <p>Aquí verás todos los productos de la categoría ` + productoCat.catName + ` </p>
            <br>
        
        `
        document.getElementById("title-container").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function (a) {
    getJSONData(CATEGORIES_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            categoriesName = resultObj.data;
            showCategoriesName(categoriesName);
            
        }
    });
});
*/

/*function categoriesTitle() {
    let cat = 

} */
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
