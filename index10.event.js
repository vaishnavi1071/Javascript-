// const button = document.querySelectorAll(".mybtn button")
// console.log(button);
// for(let i = 0; i<button.length;i++)
// {
//     button[i].addEventListener("click", (e)=>{
//         e.target.style.backgroundColor =" red";
//         e.target.style.color = "black"
//     })
// }



// keypress Event
const body = document.body;
console.log(body);
body.addEventListener("keypress" ,(e)=>{
    console.log(e.key);
})


//mouseover event
const button = document.querySelector(".headline button")
// console.log(button);
button.addEventListener("mouseover", ()=>{
    console.log("mouseover event occured")
})



//mouselaeve event
button.addEventListener("mouseleave" , ()=>{
    console.log("event leave :")
})



