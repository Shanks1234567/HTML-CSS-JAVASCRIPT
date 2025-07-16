console.log("Junaeid is a Hacker")
console.log("Nafisa is a hecker")

setTimeout(() => {
    console.log("I am inside the timeout function")
}, 0);

setTimeout(() => {
    console.log("I am inside the timeout function")
}, 0);

console.log("the end")

const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("Script");
    sc.src = src;
    sc.onload = callback("Junaeid")
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)