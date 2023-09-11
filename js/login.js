let name=document.querySelector(".name")
let passward=document.querySelector(".password")
let btn=document.querySelector(".sgin_in")
let getname=localStorage.getItem("name")
let getpassward=localStorage.getItem("password")
btn.addEventListener('click',function(e){
    e.preventDefault();
    if(name.value===""||passward.value===""){
        alert("please fill data")
    }else{
        if(getname && name.value.trim() == getname.trim() && getpassward&& passward.value.trim() == getpassward.trim()){
            setTimeout(() => {
              window.location = "index.html";
            }, 1000);
        }
    }
    // if(getname && getpassward){
    //     console.log("get")
    //     setTimeout(()=>{
    //         window.location="index.html"
    //     },1500)
    // }else{
    //     console.log("is wrong")
    // }
})