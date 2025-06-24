let a=[1,2,3,4,5]


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     arr.push(element**2)
// }

// let arr=a.map((e)=>{
//     return e**2
// })

// console.log(arr)

const GreaterThanSeven = (e)=>{
    if(e>7)
    {
        return true
    }
    return false
}
console.log(a.filter(GreaterThanSeven))

let arr2=[1,2,3,4,5,6,7]

const red=(a,b)=>
{
    return a*b
}

console.log(arr2.reduce(red))