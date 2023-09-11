let emptycart=document.querySelector(".noproducts")
let dom=document.querySelector(".products")

function drawcartproducts(allproducts=[]){
    if(JSON.parse(localStorage.getItem("productsincart")).length===0)
      emptycart.innerHTML="NO Products";

    let products=JSON.parse(localStorage.getItem("productsincart"))||allproducts
    let productUI=products.map((item)=>{
        return`
        <div class="product-item">
            <img src="${item.imgurl}" class="product-item-img" alt="">
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p>Size: ${item.size}</p>
                <p>Quantity: ${item.Quantity}</p>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="Removefromcart(${item.id})">Remove From Cart</button>
            </div>
        </div>
        `
    })
    dom.innerHTML=productUI.join("")
}
drawcartproducts();


function Removefromcart(id){
    let productsincart=localStorage.getItem("productsincart")
    if(productsincart){
        let items=JSON.parse(productsincart);
        let filteredItems=items.filter((item) => item.id !== id);
        localStorage.setItem("productsincart",JSON.stringify(filteredItems))
        drawcartproducts(filteredItems)
    }
}