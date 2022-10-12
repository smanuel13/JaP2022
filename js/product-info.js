let productInfo=[]
let nombreProd=""
let productInfoComent=[]

function showProductInfo(){
    let imagenes = productInfo.images;
    let productosHtml = "";

    productosHtml += `<div> <h1><br> ${nombreProd} </h1> <hr> </div>
    <div class="col">
        <div>
            <h5><b>Precio</b></h5><h5>${productInfo.currency} ${productInfo.cost}</h5>
            </div>
        <div>
            <h5><b>Descripción</b></h5><p>${productInfo.description}</p>
            </div>
        <div>
            <h5><b>Categoría</b></h5><p>${productInfo.category}</p>
            </div>
        <div>
            <h5><b>Cant. Vendidos</b></h5><p>${productInfo.soldCount}</p>
            </div>
            <div>
            <h5><b>Imagenes Ilustrativas</b></h5>
            </div>
</div>`

document.getElementById("productosInfo").innerHTML = productosHtml;

let htmlImagenes = ""
for (let i=0; i<imagenes.length; i++){
    let imagn = imagenes[i];
        htmlImagenes += `
        
            <div class="col">
                <img src="${imagn}" class="bd-placeholder-img card-img-top">
                </div>
        `    

    document.getElementById("productosImg").innerHTML = htmlImagenes;
 }
}

document.addEventListener   ("DOMContentLoaded", function(){
    prodID = localStorage.getItem("productoID")
    getJSONData(PRODUCT_INFO_URL + prodID + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            nombreProd = resultObj.data.name
            productInfo = resultObj.data;
            showProductInfo()
            showRelatedProduct ()
        }
        getJSONData(PRODUCT_INFO_COMMENTS_URL + prodID + ".json").then(function(resultObj){
            if (resultObj.status === "ok"){
                productInfoComent = resultObj.data;
                console.log(productInfoComent)
                showProductInfoComent()
                
            }
        })
    })

        function showProductInfoComent(){
            let htmlComent = "";
            
            htmlComent += `<br><br><hr><div> <h1>COMENTARIOS</h1></div>`

            for(let i = 0; i < productInfoComent.length; i++){
                let coment = productInfoComent[i];

                htmlComent += `<p><b> ${coment.user} </b></p>
                                 <p> ${coment.dateTime} ${cantidadEstrellas(coment)}</p>
                                 <p> ${coment.description}</p>
                                 <hr>
                                 `
            }
        document.getElementById("coments").innerHTML = htmlComent;
        }

        
        
    function cantidadEstrellas(coment){
        let puntaje = coment.score;
        let htmlEstrellas = "";
        if (puntaje == 1) {
        htmlEstrellas +=`<span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>`
        }
        else if (puntaje == 2){
        htmlEstrellas +=   `<span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>`
        }
        else if (puntaje == 3){ 
        htmlEstrellas +=   `<span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>`
        }
        else if (puntaje == 4) { 
         htmlEstrellas +=  `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>`
        }
        else if (puntaje == 5){
         htmlEstrellas += `
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>`
            
        }
        return htmlEstrellas;
    }

    document.getElementById("comentParaEnviar").addEventListener("click", function(){
     if(parseInt(document.getElementById("selectPuntaje").value == 0) || document.getElementById("agregarComentario").value === "")
     {
        alert("Selecciona un puntaje y escribe un comentario")
     }
     else{
        window.location.href = "product-info.html";
     }
    });
    
   

    function showRelatedProduct (){
        let relacionados = productInfo.relatedProducts 
        console.log(relacionados);
        let relacionadosHtml = ""

        for(i=0; i<relacionados.length ; i++){
        let rela=relacionados[i];

        relacionadosHtml += `

        <div class="card">
        <img onclick="setRelatedProductID(${rela.id})" src="${rela.image}" class="card-img-tos">
        <div class="card-body">
        <h5 class="card-title">${rela.name}</h5>
        </div>
            
        `
        }
        document.getElementById("productosRelacionados").innerHTML += relacionadosHtml
    }
});

    function setRelatedProductID(relId) {
        localStorage.setItem("productoID" ,relId)
        window.location = "product-info.html"
        showProductInfo()
    }







