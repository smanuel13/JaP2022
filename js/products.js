let productsArray = [];
let catNamesArray = ['101.json','102.json','103.json','104.json','105.json','106.json','107.json','108.json','109.json'];
let category = localStorage.getItem('catID'); 
//Para el sort por precio
let min = undefined;
let max = undefined;
let listado = [];


document.getElementById("sortAsc").addEventListener("click",function(){
    listado.sort(function(a , b){
        return parseInt(a.cost) - parseInt(b.cost);

    })
    showProductsList(productsArray);
})

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
//entrega 3.1 setear el id del producto en el local storage
function setProductoId (id){
    localStorage.setItem("productoID" , id)
    window.location = "product-info.html"
} 

function showProductsList(array) {
    let htmlContentToAppend = "";
    let array1= array.products
   for (let i = 0; i < array1.length; i++) {
          let producto = array1[i];
          if ((producto.cost >=min || min == undefined) && (producto.cost <= max || max == undefined)){
        //console.log(producto)
        htmlContentToAppend += `
        <div onclick=" setProductoId(${producto.id})" class="container list-group-item list-group-item-action"> 
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
}

/*Creo una variable category que trae el elemento guardado en el localstorage y a partir de ahi creo la url con el valor 
de cada categoría */
let categoryJSON = `https://japceibal.github.io/emercado-api/cats_products/` + category + `.json`;
console.log(categoryJSON)

document.addEventListener("DOMContentLoaded", function (a) {
    getJSONData(categoryJSON).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            showProductsList(productsArray);
            
        }
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){

        if (document.getElementById("rangeFilterCountMin").value !=""){
            min= parseInt(document.getElementById("rangeFilterCountMin").value);
        }
        else{
            min = undefined;
        }

        if (document.getElementById("rangeFilterCountMax").value !=""){
            max= parseInt(document.getElementById("rangeFilterCountMax").value);
        }
        else{
            max = undefined;
        }

        showProductsList(productsArray);

    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        min = undefined;
        max = undefined;

        showProductsList(productsArray);
    });

})
