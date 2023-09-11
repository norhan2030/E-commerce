let productdec=document.getElementById("product-desc")
let productname=document.getElementById("product-name")
let inputfile=document.getElementById("upload-image-file")
let productsize=document.getElementById("product-size")
let createform=document.getElementById("create-form")
let productsizevalue;
let productImage;

//events
productsize.addEventListener("change",getproductsizevalue)
createform.addEventListener("submit",createproductfun)
inputfile.addEventListener("change",uploadimage)

//function
function getproductsizevalue(e){
    productsizevalue=e.target.value;
}

function createproductfun(e){
    e.preventDefault()
    let allproducts=JSON.parse(localStorage.getItem("products"))||productDB
    let namevalue=productname.value
    let descvalue=productdec.value
    if(namevalue&&descvalue){
        let ob={
            id:allproducts?allproducts.length+1:1,
            Quantity:1,
            imgurl:productImage,
            size:productsizevalue,
            title:namevalue,
            desc:descvalue,
            isMe:"y",
        }
        let newproducts=allproducts ? [...allproducts,ob]:[ob];
        localStorage.setItem("products",JSON.stringify(newproducts))
    
        productname.value=""
        productdec.value=""
        productsize.value=""
        setTimeout(() => {
            window.location="index.html"
        }, 1000);
    }else{
        alert("enter full data")
    }
    
}

function uploadimage(){
    let file=this.files[0];//uplode بيرجع  array هناخد اول file
    let types=["image/jpeg","image/png","image/jfif"]
    if(types.indexOf(file.type)==-1){
        alert("Type not supported")
        return;
    }
    if(file.size>2*1024*1024){
        alert("image not exced 2MG")
        return;
    }
    getImageBase64(file)
    //productImage=URL.createObjectURL(file)
}

function getImageBase64(file){
    let reader=new FileReader();
    reader.readAsDataURL(file)
    reader.onload=function(){
        productImage=reader.result
    }
    reader.onerror=function (){
        alert("error")
    }
}