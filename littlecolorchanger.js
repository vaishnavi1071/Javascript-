const body = document.body
console.log(body);
const button = document.querySelector("button")
console.log(button)

const setid =setInterval(()=>{
    
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
    const rgb = `rgb(${red}, ${green}, ${blue})`
    
    body.style.background = rgb
    // console.log(rgb)
},1000);
  
button.addEventListener("click" ,()=>{
    clearInterval(setid);
    button.textContent= body.style.background;
})


