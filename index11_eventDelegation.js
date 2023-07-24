  
  


//event delegation
const body =document.body;
const granparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")
//event capturing
child.addEventListener("click" ,()=>{
console.log("capturing !!! child")
},true)

parent.addEventListener("click",()=>{
    console.log("capturing !! parent")
},true)

granparent.addEventListener("click" ,()=>
{console.log("capturing !!! grandparent")}
,true)

body.addEventListener("click" , ()=>{
    console.log("capturing!!! body")
},true)


// Event bubbling propagation
child.addEventListener("click",()=>{console.log(
    'bubling... child'
)})

parent.addEventListener("click",()=>{
    console.log("bubbling ... parent")
})

granparent.addEventListener("click",()=>{console.log("bubbling.. grandparent")});

body.addEventListener("click",()=>{
    console.log("bubbling ... body")
})


//event delegation
const grandparent = document.querySelector(".grandparent")
grandparent.addEventListener("click" , ()=>{
    console.log("u clicked something")
})



