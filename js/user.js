let userInfo=document.querySelector(".user_info")
let user=document.querySelector(".user")
let links=document.querySelector(".links")
let logout=document.querySelector(".logout")
 
if(localStorage.getItem("name")){
    links.remove();
    userInfo.style.display="flex"
    user.innerHTML=localStorage.getItem("name")
}

logout.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location="register.html"
    },1500)
    // setTimeout(()=>{
    //     console.log("3")
    //     window.location="register.html"
    //     console.log("4")
    // },1500);
})