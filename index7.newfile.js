/*console.log(this);
console.log(window);
console.log(firstName);
console.log(myFunc);
myFunc();
function myFunc(){
    console.log("hello world i am function :")
}
var firstName = "vaishnavi";
var lastname ="parte";
var fullname = firstName + " " + lastname
console.log(fullname);*/

// hoisting

console.log(myfunction)

var myfunction = function(){
    console.log("this is a function expression : ")
}
console.log(myfunction)

// Arrow function
 var func = ()=>{
    console.log("hello Arrow function :")
 }
 console.log(func);


// let and const 
let foo = "foo";
console.log(foo);
function fullname(firstName, lastname){
    let value = "myvalue" ;
    console.log(value);
 const getname =firstName + " " + lastname;
 return getname;


}
const person = fullname("vaishnavi" , "parte");
console.log(person)



