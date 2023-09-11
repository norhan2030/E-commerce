let name=document.querySelector(".name")
let passward=document.querySelector(".password")
let email=document.querySelector(".email")
let btn=document.querySelector(".submit")

btn.addEventListener("click",function(e){
    e.preventDefault();
    if(name.value===""||passward.value===""||email.value===""){
        alert("please fill data..")
    }else{
        localStorage.setItem("name",name.value)
        localStorage.setItem("password",passward.value)
        localStorage.setItem("email",email.value)
        setTimeout(()=>{
            window.location="login.html"
        },1500)
    }
})