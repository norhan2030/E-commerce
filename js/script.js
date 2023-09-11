
//product

let productDB=[
    {
        id:1,
        title:"AKASTER",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        size:"200m",
        imgurl:"image/1YsmLRDgbam244xajuIBeAlwxqsThHD402BtsbsG.jpeg",
        Quantity:1,
        isMe:"n"
    },
    {
        id:2,
        title:"ASRAR",
        size:"200m",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        imgurl:'image/asrarr-550-2.jpg',
        Quantity:1,
        isMe:"n"
    },
    {
        id:3,
        title:"clothes",
        size:"XL",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        imgurl:'image/a29a3652aa48ef4080ac6b36bcfc6ca9.jpg" class="product-item-img',
        Quantity:1,
        isMe:"n"
    },
    {
        id:4,
        title:"clothes",
        size:"L",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        imgurl:'image/OIP.jfif',
        Quantity:1,
        isMe:"n"
    },
    {
        id:5,
        title:"DOLCE",
        size:"M",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        imgurl:'image/R_3.jfif',
        Quantity:1,
        isMe:"n"
    },
    {
        id:6,
        title:"CARDIAL",
        size:"S",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        imgurl:'image/OIP_5.jfif',
        Quantity:1,
        isMe:"n"
    },
    {
        id:7,
        title:"boot",
        size:"40",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        imgurl:'image/OIP_8.jfif',
        Quantity:1,
        isMe:"n"
    },
    {
        id:8,
        title:"boot",
        size:"41",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        imgurl:'image/OIP_9.jfif',
        Quantity:1,
        isMe:"n"
    }
]

// localStorage.setItem("products",JSON.stringify(products))

let dom=document.querySelector(".products")
let cartproduct=document.querySelector(".carts-products div")
let cartproductsmenu=document.querySelector(".carts-products")
let badge=document.querySelector(".badge")
let shoppingcart=document.querySelector(".shoppingcart")
let products=productDB;
shoppingcart.addEventListener('click', opencartmenu)
function drawproducts(products=[]){
    let productsUI=products.map((item)=>{
        return`
        <div class="product-item" style="border:${item.isMe==="y"?"ipx solid darkcyan":""}">
            <img src="${item.imgurl}" class="product-item-img" alt="">
            <div class="product-item-desc">
                <a onclick='saveItemData(${item.id})'>${item.title}</a>
                <p>${item.desc}</p>
                <span>${item.size}</span>
                ${item.isMe==="y"?"<button>Edit</button>":""}
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="addTOcart(${item.id})">Add To Cart</button>
                <i class="fa-regular fa-heart" style="color:${item.liked==true ?"red":""}" onclick="addToFavorite(${item.id})"></i>
            </div>
        </div>
        `
    })
    dom.innerHTML=productsUI.join("")
}
drawproducts(JSON.parse(localStorage.getItem("products"))||products)

let addedItem=localStorage.getItem("productsincart")?JSON.parse(localStorage.getItem("productsincart")):[]
if(addedItem){
    addedItem.map((item)=>{
        cartproduct.innerHTML +=`<p>${item.title} (${item.Quantity})</p>`
    })
    badge.style.display="block";
    badge.innerHTML=addedItem.length
}


function addTOcart(id){
    if(localStorage.getItem('name')){
        let products=JSON.parse(localStorage.getItem("products"))||products
        let product=products.find((item)=>item.id===id)
        let isproductINcart=addedItem.some((i)=>i.id===product.id)//some=>return yes or no

        if(isproductINcart){
            addedItem=addedItem.map(p=>{
                if(p.id===product.id)p.Quantity+=1;
                return p;
            })
        }else{
            addedItem.push(product)
        }
        cartproduct.innerHTML='';
        addedItem.forEach((item) => {
            cartproduct.innerHTML +=`<p>${item.title} ${item.Quantity}</p>`
        });
        //save data
        
        // addedItem=[...addedItem,choosenItem]
        // let uniqueproducts=getUniqueArr(addedItem,"id")
        localStorage.setItem("productsincart",JSON.stringify(addedItem))
        //add counter of items
        let cartitemslenght=document.querySelectorAll(".carts-products div p")
        badge.style.display="block";
        badge.innerHTML=cartitemslenght.length
    }else{
        window.location='login.html'
    }

}

function getUniqueArr(arr,filterById){
    let unique=arr.map((item)=>item[filterById]).map((item,i,Farr)=>Farr.indexOf(item) === i && i ).filter((item)=>arr[item]).map((item)=>arr[item])
    return unique;
}


function opencartmenu(){
    if(cartproduct.innerHTML !=""){
       if( cartproductsmenu.style.display=="block"){
        cartproductsmenu.style.display="none"
       }else{
        cartproductsmenu.style.display="block"
       }
    }
    
}

function saveItemData(id){
    localStorage.setItem("productId",id)
    window.location="cardDetails.html"
}




//search function

let input=document.getElementById("search")
input.addEventListener("keyup",function(e){ 
    search(e.target.value,JSON.parse(localStorage.getItem("products")))
    if(e.target.value.trim() === ""){
        drawproducts(JSON.parse(localStorage.getItem("products")))
    }
})

function search(title,myArray){
    // for(var i=0;i<myArray.length;i++){
    //     if(myArray[i].title===title){
    //         console.log(myArray[i])
    //     }
    // }
    let arr=myArray.filter(item=>item.title.toLowerCase().indexOf(title.toLowerCase())!==-1)
    drawproducts(arr)
}

// search("ASRAR",JSON.parse(localStorage.getItem("products")))



//add to favorite
let favoriteitems=localStorage.getItem("productsFavorite")? JSON.parse(localStorage.getItem("productsFavorite")):[]
function addToFavorite(id){
    if(localStorage.getItem('name')){
        let choosenItem=products.find((item)=>item.id===id)
        choosenItem.liked=true;
        favoriteitems=[...favoriteitems,choosenItem]
        let uniqueproducts=getUniqueArr(favoriteitems,"id")
        localStorage.setItem("productsFavorite",JSON.stringify(uniqueproducts))
        products.map(item=>{
            if(item.id===choosenItem.id){
                item.liked=true
            }

        })
        localStorage.setItem('products',JSON.stringify(products))
        drawproducts(products)
    }else{
        window.location='login.html'
    }

}

//let filter products by size
let sizefilter=document.getElementById("size-filter")
sizefilter.addEventListener("change",getProductsFilterdBySize)

function getProductsFilterdBySize(e){
    let val=e.target.value
    let products=JSON.parse(localStorage.getItem("products"))
    if(val==="all"){
        drawproducts(products)
    }else{
        products=products.filter((i)=>i.size===val)
        drawproducts(products)
    }
}