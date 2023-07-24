// Objects
/*const person ={name:"vaishu" , age:22 , hobby:"kho-kho"};
console.log(person);

// object inside Array

const person1 ={name:"tina", hobbies: ["guitar", "kho-kho","music"]};
console.log(person1);

//how add key value pair
person.gender = "female";
console.log(person);
console.log(person["name"]);

//difference between dot and bracket notion
const key ="email";
const student ={name:"ganesh", age: 15, }
console.log(student.name);
student["person hobby"] ="guitar";
console.log(student);
student[key]="ganu@gmail.com";
console.log(student);

// loops in object
// for in loops
// object.keys

const obj1 ={name: "shanta", age:54,hobby: ["play", "drama"]};
for(let index in obj1){
    // console.log(obj1[index]);
    console.log(`${index} : ${obj1[index]}`);
}
console.log(Object.keys(obj1));
// for of loop

for(let var1 of Object.keys(obj1)){
    console.log(obj1[var1]);
}*/
//computes properties
const key1 = "key1";
const key2 = "key2";

const myvalue ="value1";
const myvalue2 ="value2";
const obj ={
[key1]: myvalue ,
[key2]: myvalue2
}
console.log(obj);

const obj1 ={};
obj1[key1]= myvalue;
obj1[key2]=myvalue2;
console.log(obj1);

//object destructuring
const band={bandname: "harmonium" , singer:"mahesh"};
console.log(band);
let {bandname,singer}=band;
console.log(bandname,singer);
bandname ="bsj";
console.log(bandname);

//object inside array
const objArray =
[{objArrayid : 1, firstname:"vansh", age:8},

{objArrayid:2,firstname:"san" ,age:9},

{objArrayid:3, firstname: "fis" ,age:98}];

for(let ar1 in objArray){
    console.log(objArray[ar1]);
}
//Nested destructuring
const [{firstname:name,age}, ,user3]=objArray;
console.log(user3);

//2d array and 3d array
const Array2d= [[101, "sane",1000],
[102 ,"joshi",200],
];
for(let i ;i<Array2d.length;i++)
{

  

    
    console.log(Array2d[i]);
}





