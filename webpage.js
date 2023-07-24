console.log(window.document)
// select element by using get element by id

const value =document.getElementById("sonal");
console.log(value)

// query selector 
// we can select any thing by using queryselector
const myvalue = document.querySelector("#sonal");
console.log(myvalue);

const heading = document.getElementById("sonal");
console.log(heading.textContent);
heading.textContent ="this is something else";
console.log(heading.textContent);


//style

const mainheading = document.querySelector(".section-signup");
console.log(mainheading.style);
mainheading.style.backgroundColor = "violet";

//get and set attribute

const value1 = document.querySelector("a");
console.log(value1);
console.log(value1.setAttribute("href" ,"https://knco"));
console.log(value1.getAttribute("href"));

// get multiple elements using getElemet by class name
// get multiple elements items using queryselector

const num = document.getElementsByClassName("item");
console.log(num);// array like object  ....HTML collection
console.log(num[1]);
console.log(Array.isArray(num));

const num1= document.querySelectorAll(".item");
console.log(num1) // NOdelist

//single for loop
//for of loop
//forEach

// we can't use forEach method to iterate through HTML collection

const item1 = document.getElementsByTagName("a");
console.log(item1);
for(let i =0 ; i<item1.length; i++){
const item2 = item1[i];
    item2.style.backgroundColor ="white";
    item2.style.color="red";
    item2.style.fontWeight="bold";
}

// FOR OF loop

for(let items of item1){
    items.style.backgroundColor="violet";
}
const headline = document.querySelector(".headline");
console.log(headline);
headline.innerHTML = "<h1>do it by yourself</h1>";
headline.innerHTML = "<button>Learn MOre </button>"
console.log(headline.innerHTML)


const idr = document.getRootNode();
//Document is the rootNode 
console.log(idr);

const vari = document.getElementById("sonal");
console.log(vari);
vari.textContent = "You can do it Everything is possible";

const vari1 = document.getElementsByTagName("a");
console.log(vari1);
for(let i = 0 ; i< vari1.length; i++)
{
    const value = vari1[i]
    value.style.color= "grey"
    value.style.backgroundColor="indigo"
}

const vari3 = document.querySelector("a");
console.log(vari3);
console.log(vari3.setAttribute("href","http//www.com"));
console.log(vari3.getAttribute("href"));

const vari4 = document.getElementsByClassName(".headline")
console.log(vari4);
vari4.innerHTML="<button>hello<button/>";
console.log(vari4)



















