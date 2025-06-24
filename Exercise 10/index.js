let a=prompt("Enter a number:")
let arr=[]

for(let i=1;i<=a;i++)
{
  console.log(i)
  arr.push(i)
    
}

console.log("array",arr)

//Factorial 
const red =(a,b)=>{
    return a*b
}

console.log(arr.reduce(red))

