/*function birthday(){
    console.log("hello");
}
birthday();

function add(num1 ,num2){
 return num1 * num2;
  
}

const function1 = add(9,8);
console.log(function1);

const  isEven =function(num1){ // function expression

    if(num1 % 2 === 0)
    {
    return true;
}
else{
    return false;
}
}
console.log(isEven(8));

function targetArray(array, target){
    for(let i =0 ; i< array.length; i++){
        if(array[i]===target){
        return i;
    }

    }
  return -1;
}
const array = [7 ,9 , 6 ,"vasu"];
const returnArray = targetArray(array,6);
console.log(returnArray);

// function inside function
console.log("function inside function : ")
function myfunct(){
    console.log("function declaration :")
    //function declaration
    

    console.log("function expression : ")
    const myfunc1 = function(num1 , num2)
    {    //function expression
      return(num1+num2);
    }


    const myfunc2 = (num1)=>{ 
            //Arrow function
      console.log("arrow function :")      
      if(num1% 2 ===  0){
        return true;
      }
      return false;
    }
   

    const myfunc3 = (num)=> num%2 == 0 ;  //Arrow function in single line with return 
console.log(myfunc1(8,9));
console.log(myfunc2(8));
console.log(myfunc3(6));
}

myfunct();


// lexical scope
console.log("lexical scope :")
let myvalue ="value2";
function lex1(){
 let myvalue ="value1";
console.log(myvalue);

  const lex2 = function()
  {
    console.log(myvalue);
  }
  lex2();

}
lex1();

// default parameter

console.log("default parameters :")
function defaultParameter(num1 ,num2){
  if(num2 === undefined){
    num2=1;
  }
  console.log(num1+num2);
}
defaultParameter(6);

//new way 
console.log("new way :")
const defaultParameter2 = (num1,num2 = 8)=>{
  console.log(num1*num2);

}
defaultParameter2(8);

// rest parameter

console.log("rest parameter :")
const restparameter =function(...number){
  let total= 0;
  for(let numbers of number){
    total = total + numbers;
  }
  return total;

  //  let sum=0;
  // for(let i =0; i<number.length; i++){
  //  sum =sum + number[i];

  // }
  // return sum;
}
const addAll= restparameter(9,0,6,7,4,7);
console.log(addAll);

//param destructuring 

console.log("parameter destructuring : ")
let person = {
Name: "harshit",
Age: 8 
}

function destructructuring1({Name, Age ,gender}){
console.log(Name);
console.log(Age);
console.log(gender);
}
destructructuring1(person);

// function callback

console.log("callback functions :")

function functCall(){
  console.log("inside function ")
}
const callback = (a)=>{
  console.log("callback function :")
  console.log(a);
  a();
}
callback(functCall);

function myFunction1(){
  console.log("myFunction")
}
function MyFunction2(a){
  console.log("myFunction 2100000001")
  console.log(a)
 a();
}
MyFunction2(myFunction1);

function person2(name){
  console.log(`my name is ${name}`)
}
function person1(callback){
  console.log("i am the callback function :")
  callback("harshit");
}
person1(person2);*/

//function returning

console.log("function returning :")
function hello(){
 
  function hello1(){
    console.log("hello1 inside function ")
  }
  return hello1();
}
hello();









