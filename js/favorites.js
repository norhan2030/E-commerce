let emptycart=document.querySelector(".noproducts")
let dom=document.querySelector(".products")

function drawfavoritesproducts(allproducts=[]){
    if(JSON.parse(localStorage.getItem("productsFavorite")).length===0)
      emptycart.innerHTML="NO Products";

    let products=JSON.parse(localStorage.getItem("productsFavorite"))||allproducts
    let productUI=products.map((item)=>{
        return`
        <div class="product-item">
            <img src="${item.imgurl}" class="product-item-img" alt="">
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <p>Size: ${item.size}</p>
                <p>Quantity: ${item.Quantity}</p>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart btn pb-5" onclick="Removefromfavorites(${item.id})">Remove From Favorite</button>
            </div>
        </div>
        `
    })
    dom.innerHTML=productUI.join("")
}
drawfavoritesproducts();


function Removefromfavorites(id){
    let productsinfav=localStorage.getItem("productsFavorite")
    if(productsinfav){
        let items=JSON.parse(productsinfav);
        let filteredItems=items.filter((item) => item.id !== id);
        localStorage.setItem("productsFavorite",JSON.stringify(filteredItems))
        drawfavoritesproducts(filteredItems)
    }
}