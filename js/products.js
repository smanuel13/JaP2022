let productsArray = [];
let catNamesArray = ['101.json','102.json','103.json','104.json','105.json','106.json','107.json','108.json','109.json'];
let category = localStorage.getItem('catID'); 

function showCatName(array1) {
    let htmlContentToAppend = "";
    
  console.log(category)
    //let arrayCat= array1.id
    //console.log(arrayCat)
   if (category == 101 )
   //for (let i = 0; i < array1.length; i++) {
          //let category = array1[i];
            //console.log(category)
        htmlContentToAppend += `
        <h1>Productos</h1>
        <p>Aquí verás todos los productos de la categoría Autos </p>
        `
        if (category == 102 )
      htmlContentToAppend += `
      <h1>Productos</h1>
      <p>Aquí verás todos los productos de la categoría Juguetes </p>
      `
    if (category == 103 )
      htmlContentToAppend += `
      <h1>Productos</h1>
      <p>Aquí verás todos los productos de la categoría Muebles </p>
      `
    if (category == 104 )
      htmlContentToAppend += `
      <h1>Productos</h1>
      <p>Aquí verás todos los productos de la categoría Herramientas </p>
      `
      if (category == 105 )
      htmlContentToAppend += `
      <h1>Productos</h1>
      <p>Aquí verás todos los productos de la categoría Computadoras </p>
      `
      if (category == 106 )
      htmlContentToAppend += `
      <h1>Productos</h1>
      <p>Aquí verás todos los productos de la categoría Vestimenta </p>
      `
      if (category == 107 )
      htmlContentToAppend += `
      <h1>Productos</h1>
      <p>Aquí verás todos los productos de la categoría Electrodomésticos </p>
      `
      if (category == 108 )
      htmlContentToAppend += `
      <h1>Productos</h1>
      <p>Aquí verás todos los productos de la categoría Deporte </p>
      `
      if (category == 109 )
      htmlContentToAppend += `
      <h1>Productos</h1>
      <p>Aquí verás todos los productos de la categoría Celulares </p>
      `
        document.getElementById("products-title-container").innerHTML = htmlContentToAppend;
   }
//}

document.addEventListener("DOMContentLoaded", function (a) {
    getJSONData(CATEGORIES_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            catNamesArray = resultObj.data;
            showCatName(catNamesArray);
            
        }
    });
});


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

let categoryJSON = `https://japceibal.github.io/emercado-api/cats_products/` + category + `.json`;
console.log(categoryJSON)

document.addEventListener("DOMContentLoaded", function (a) {
    getJSONData(categoryJSON).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            showProductsList(productsArray);
            
        }
    });
});
