// setTimeout(()=>{
//     console.log("timer")
// }, 5000);
// function y(x){
//     console.log("y")
//     x();
// }

// y(function x(){
//     console.log("x")
// })

// function morning(x){
//     console.log("good morning");
//       x();

  
// }
// morning(function x(){
//     console.log("good night")
// })
// function myfunc(name, age, city){
// this.age = age
// this.name =name,
// this.city =city

// }
// myfunc.prototype.about = function(){
//     console.log(this.age)
// }
// const user1 = new myfunc("vaibhav", 6, "pune")
// console.log(user1)
// user1.about();
// console.log(myfunc.prototype)
// console.log(user1.__proto__)


//callback function
// function myfunc(y){
//     console.log("function task 1")
//     y();
// }
// myfunc(function y(){
// console.log("function 2 task 2")
// })

// function getaddnumber(num1, num2, callback){
//     console.log(num1, num2)
//     callback(num1,num2)
// }
// getaddnumber(4,5,(num1,num2)=>{
//     console.log(num1*num2)
// })

// function add(a,b,callback){
//     console.log(a*b)
//     callback(9,0)
// }
// add(6,9,(a,b)=>{
//     console.log(a+b)
// })


// function check(a,b,callback){
// console.log(a , b)

// if
// (typeof a === "number" && typeof b ==="number")
// callback();

// else
// {
//     console.log("this is not number")
// }

// }


// check(7,5,()=>{
// console.log("this is a number")
// })

const value = document.querySelector(".heading1")
const value2 = document.querySelector(".heading2")
const value3 = document.querySelector(".heading3")
const value4 = document.querySelector(".heading4")
const value5 = document.querySelector(".heading5")
const value6 = document.querySelector(".heading6")
const value7 = document.querySelector(".heading7")
// console.log(value);
// setTimeout(()=>{
//     value.textContent = "heading 1";
//     value.style.color ="green"
//     setTimeout(()=>{
//         value2.textContent = "two";
//     value2.style.color ="blue"
//     setTimeout(() => {
//         value3.textContent = "three";
//     value3.style.color ="violet"
//     setTimeout(() => {
//         value4.textContent = "four";
//     value4.style.color ="purple"
// //     setTimeout(()=>{
// //         value5.textContent = "five";
// //         value5.style.color ="yellow"
    
// //      },3000)
// //     }, 4000);
// //     }, 1000);
// //     },1000)
// // }, 2000)

// function textchange(element, color, text, time, onfailure, onsuccess){
//     if(element){
//     setTimeout(()=>{
//         element.textContent = text;
//         element.style.color=color;
//         if(onfailure){
//             onfailure()
//         }
        
//         else{
//         if(onsuccess){
//             onsuccess()
//         }
//         }
    
//     },time)
// }



// } pyramid of doon
// textchange(value, "pink", "pink" , 1000,()=>{
//     textchange( value, "pink", "pink" , 1000,),()=>{
//         textchange( value, "pink", "pink" , 1000,),()=>{
//             textchange( value, "pink", "pink" , 1000,),()=>{
//                 textchange( value, "pink", "pink" , 1000,),()=>{
//                     textchange( value, "pink", "pink" , 1000,)
//                 },()=>{  textchange( value, "pink", "pink" , 1000,)}
//             },()=>{  textchange( value, "pink", "pink" , 1000,)}
//         },()=>{  textchange( value, "pink", "pink" , 1000,)}
//     },()=>{  textchange( value, "pink", "pink" , 1000,)}
// },()=>{  textchange( value, "pink", "pink" , 1000,)}
// ()=>{  textchange value, "pink", "pink" , 1000,)}



 





    

