let button=document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML='<b>hey i am clicked</b>'
})


button.addEventListener("contextmenu", ()=>{
    alert('dont hack us by right click please')
})



document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
}
)