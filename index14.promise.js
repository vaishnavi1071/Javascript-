const array =["salt" , "rice", 'vegetables', "chips"]
const friedRice =new Promise((resolve,reject)=>{
    if(array.includes("salt")&&array.includes("vegetables")&&array.includes("rice"))
    {
     resolve("make fried rice ")
    }
    else{
        reject("u couldn't make it")
    }
    })
//consume
//how to consume

friedRice.then(()=>{
    console.log("let's eat friedrice " )
})
.catch((error)=>{
    console.log(error)
})

//function returning promise

function pohePromise(){

const bucket  = ["puffed rice", "chilli","salt",  "brinjal"]
return new Promise((resolve, reject)=>{
 if(bucket.includes("salt") && bucket.includes("puffed rice")){
    resolve("lets make pohe")
 }
 else{
    reject("oops 1 item is missing u cant make pohe")
 }
})
}
pohePromise().then(
    ()=>{
    console.log("lets make pohe....")
}

).catch((error)=>{
    console.log(error); 
})


//promise with setTimeout

// function myfunction(){
//     return new Promise((resolve, reject)=>{
//         const array = [8 , "swati", 7, 9]
//         setTimeout(()=>{
//             if(array.length >5){
//                 resolve();
//             }else{
//                 reject();
//             }

//         },2000)
//     })
// }

// myfunction().then(()=>{
//     console.log("resolved")
// }).catch(()=>{
//     console.log("rejected")
// })

//then method always return promise
 
// promise chain

function mypromise(){
   
return new Promise((resolve, reject)=>{
    resolve ("foo")
})
}
mypromise().
then((value)=>{
    console.log(value);
    value += " vaishnavi";
    return value
})
.then((value)=>{
    console.log(value)
    value += " sona "
    return value
})
.then((value)=>{
console.log(value)
})


const value = document.querySelector(".heading1")
const value2 = document.querySelector(".heading2")
const value3 = document.querySelector(".heading3")
const value4 = document.querySelector(".heading4")
const value5 = document.querySelector(".heading5")
const value6 = document.querySelector(".heading6")
const value7 = document.querySelector(".heading7")

function textchange(element, text, color, time){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        element.style.color =color
        element.textContent = text
        resolve();
    },time)
   
})
}
textchange(value, "one", "pink", 1000).then(()=>{
    return textchange(value2, "two","green", 2000)
})
.then(()=>{
    return textchange(value3, "three", "yellow", 1000)
})
.then(()=> {return textchange(value4, "four", "blue", 1000)})
.then(()=>{return textchange(value5, "five", "red", 2000)})
.then(()=>{return textchange(value6, "six", "violet", 1000)})
.then(()=>{textchange(value7, "seven", "cyan", 1000)},
()=>{console.log("rejected")})




