/*let fruits=["apple", "banana","watermelon"];
console.log(fruits);

let mixed=[1,2, 3, "vaibhav" , null,undefined];
console.log(mixed);
console.log(typeof mixed);
console.log(Array.isArray(mixed));

fruits[0]="pomengrgate";
console.log(fruits);

let obj={};
console.log(typeof obj);
console.log(Array.isArray(obj));

// push pop 

let array1=["sona", "arshi",9 ,9 ];
//array1.push("banana");
console.log(array1);
array1.pop();
console.log(array1);
let missingArray =array1.pop();
console.log(missingArray);

// unshift and shift

let car=["honda", "suzuki" , "swift"];
console.log(car);
car.unshift("thar");
console.log(car);
let removeElement= car.shift();
console.log(car);
console.log(removeElement);

//primitive vs reference variable

let num1 = 6;
let num2 = 9;
console.log(num1);
console.log(num2);
num1++;
console.log("after increament : ")
console.log(num1);
console.log(num2);

// reference variable

let referenceArray = [6,9,0];
let referenceArray2 = referenceArray;
console.log(referenceArray);
console.log(referenceArray2);
console.log("after adding element : ")
referenceArray.push("sani");
console.log(referenceArray);
console.log(referenceArray2);

//how to clone array

//how to concatenate array
let arr1=[6 , 7 ,9 , 5 ];
let arr2 = arr1.slice(0).concat(["shweta"]);
console.log(arr2);
let arr3= arr1.concat();
console.log(arr3);
let onemorearray =[900,8,3];
let arrayc=["soan",9 ,0 ];
let arrayc2 = [...arrayc, ...onemorearray, ["item1"] ];
console.log(arrayc2);



// const using while creating array

const constArray =["car", "bus","cycle"];
constArray.push("aeroplane");
console.log(constArray);
/*
here we are trying to change the address of the array it 
will show error


constArray = ["vc","ncj"];
console.log(constArray);

// for loop in array
let loopArray =[9 ,0 , 5 ,"sharma"];

for(let i=0; i <= loopArray.length-1; i++){
console.log(loopArray[i]);}

// using while loop
console.log("printing array by using while loop :")
let i=0;

while(i<loopArray.length){
    console.log(loopArray[i]);
   
   i++;
}


const plants =['banyan', "pipal"]
const newArray =[];
for(let i =0; i<plants.length ; i++){
    newArray.push(plants[i]);
}
console.log(newArray);
*/
//for of loop in array

console.log("for of loop in array :")
const animal =["cat", "dog"];
for(let animals of animal){
    console.log(animals);
}

// for in loop in array

const vehicle1 =["car","bike"];
const vehicle2 =[];
for(index in vehicle1){
    vehicle2.push(vehicle1[index].toUpperCase());
}
console.log(vehicle2);

// array destructuring

const destArray=["car",1,6];
let[myvalue1,myvalue2 ,...newmyArray] =destArray;
console.log(myvalue1);
console.log(myvalue2);
console.log(newmyArray);








