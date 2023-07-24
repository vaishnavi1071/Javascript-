const btn = document.querySelector(" button");
const body = document.querySelector(".class");
const span1 = document.querySelector(".myclass")

function randomcolor(){
    const red = Math.floor(Math.random()* 256);
    const green = Math.floor(Math.random()* 256);
    const blue = Math.floor(Math.random()*256);
    const randomcolor1 =`rgb(${red} , ${green} , ${blue})`
    return randomcolor1;
}


btn.addEventListener("click", ()=>{
  const randomcolor1 = randomcolor();
  body.style.backgroundColor = randomcolor1; 
  span1.textContent =randomcolor1;
  console.log(randomcolor1) ;

})

