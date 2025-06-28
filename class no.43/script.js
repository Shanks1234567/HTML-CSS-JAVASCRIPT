console.log("hello")

// let names=document.getElementsByClassName("box")
// console.log(names)

// names[2].style.backgroundColor="red"

// document.getElementById("third").style.backgroundColor="green"

document.querySelector(".box").style.backgroundColor="blue"
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="yellow"
})