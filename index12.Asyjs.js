
// synchronous javascript
console.log("script start :")
let sum=0;
for(let i =0 ; i<=1000;i++){
sum =sum+i;

}
console.log("addition " + sum);
console.log("script end :");

// asynchronous javascript
console.log("script start :")

const id = setTimeout
    
(()=>{
    let addition =0 ;
    for(let i =0 ; i<=100 ;i++){
        addition += i
        console.log(addition);
    }
 

},1000);
console.log("id of settiomeout ",id)
clearTimeout(id);


console.log("script end");


// setInterval
console.log("script start :")
const setid = setInterval(()=>{
    for(let i =0;i <100;i++){
       
    }
   
    console.log("hello")
},1000)
clearInterval(setid)
console.log("script end :")


const body = document.body;
console.log(body)
const intervalId = setInterval(()=>{
    const red =   Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb = `rgb${red}, ${green},${blue}`;
    body.style.background = rgb
},1000)



