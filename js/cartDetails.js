let products=JSON.parse(localStorage.getItem('products'))
let productId=localStorage.getItem("productId")
let items=document.querySelector(".items-detsils")
let productDetails=products.find(item=>item.id==productId)


items.innerHTML=`
<img src="${productDetails.imgurl}" alt="">
<h2>${productDetails.title}</h2>
<p>Size: ${productDetails.size}</p>
<p>Description: ${productDetails.desc}</p>
<p>Quantity: ${productDetails.Quantity}</p>`