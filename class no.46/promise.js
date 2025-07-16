console.log('This is promises');



let promp1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was not supporting you")

    }

    else {

        setTimeout(() => {
            console.log('yes i am done');
            resolve("Junaeid")
        }, 1000);
    }

    })




    let promp2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was not supporting you2")

    }

    else {

        setTimeout(() => {
            console.log('yes i am done2');
            resolve("Junaeid2")
        }, 1000);
    }

    })


    let promp3 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was not supporting you3")

    }

    else {

        setTimeout(() => {
            console.log('yes i am done3');
            resolve("Junaeid3")
        }, 1000);
    }

    })

    let promp4 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("random number was not supporting you4")

    }

    else {

        setTimeout(() => {
            console.log('yes i am done4');
            resolve("Junaeid4")
        }, 1000);
    }

    })


// let p3=Promise.all(promp1,promp2)
// let p3=Promise.race(promp1,promp2)
// let p3=Promise.any(promp1,promp2,promp3,promp4)
let p3=Promise.resolve(promp1,promp2,promp3,promp4)

p3.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
})



// promp1.then((a) => {
//     console.log(a);

// }).catch((err)=>{
//  console.log(err);
 
// })
