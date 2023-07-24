// how to get the dimension of element
//height and width
// const todo = document.querySelectorAll(".headline");
// const info = todo.getBoundingClientREct().height;
// console.log(info)

//intro to events

//click
// const btn =document.querySelector(".button")
// btn.onclicl = function(){
//     console.log("you clicked me")
// }


// const btn = document.querySelector(".button");


// function clickme(){
// console.log("u clicked me.....")
// }


// btn.addEventListener("click", function(){
//     console.log("u clicked me yahoo!!!!")
//     console.log(this)
//     //in normal function value of this is the button

// })

// btn.addEventListener("click", ()=>{
//     console.log("u clicked me...");
//     console.log(this)
//     // in arrow function value of this is window object
// })





// for(let i= 0; i< value.length;i++){
//     value[i].addEventListener("click" , ()=>{
//         console.log("you clicked me")
//     })
// }

// for(let i = 0 ; i<value.length;i++){
//     value[i].addEventListener("click", ()=>{
//         console.log("u clicked ")
//     })
// }

//Event Object
console.log("script start : ")
const vlaue1 = document.querySelectorAll(".mybtn button");
// console.log(vlaue1)
for(let i =0;i<vlaue1.length;i++){

    vlaue1[i].addEventListener("click", (e)=>{
        console.log(e.currentTarget)
    })
}
num =0 ;
for(let i=0; i <=1000;i++){
num = num+i;
}
console.log('sum' + num);
console.log("Script end ...")

