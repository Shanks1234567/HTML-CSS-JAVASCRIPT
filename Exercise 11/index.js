let random=Math.random()
console.log(random)
let first,second,third;

// First letter

if(random<0.33)
{
     first="Crazy"
   
}

else if(random<0.66 && random>=0.33)
{
      first="Amazing"
  
}

else
 {
     first="Fire"
    
 }

 //Second letter

let random2=Math.random()
console.log(random2)

 if(random2<0.33)
{
     second="Engine"
  
}

else if(random2<0.66 && random>=0.33)
{
      second="Foods"
 
}

else
 {
     second="Garments"
    
 }


 // Third letter


let random3=Math.random()
console.log(random3)

  if(random3<0.33)
{
     third="Bros"
   
}

else if(random3<0.66 && random>=0.33)
{
         third="limited"
   
}

else
 {
         third="Hub"
   
 }


 console.log(`${first} ${second} ${third}`)



