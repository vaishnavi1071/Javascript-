// sets
const mySet = new Set([9,7,8,"item1",8]);
console.log(mySet);


// adding values to set
const number =new Set();
number.add("item1");
number.add(["item1","item2"]);
number.add("item");
number.add("item");
console.log(number);

//to check is this value present in set or not
// console.log(number.has("item1"));


//for of loop
const array = [9,9,6,"item1","item2"]
//use when u have unique values
for(let SetNUm of array)
{
    console.log(SetNUm);
}

//unique element 

const myarray1 = ["item1",7,9,8,9,9,0]
const uniqueValues= new Set(myarray1);
console.log(uniqueValues);

// find length of set
const array1 = [9,9,9,"item1","item2"];
const arrayLength = new Set(array1);
let length =0 ;
for(let element of arrayLength){
    length++
}
console.log(length);

//MAPS in javascript
const person =new Map();
person.set("firstname", "vaishnavi");
person.set('age' , 22);
person.set(1 , "one");
console.log(person);
// Access keys
console.log(person.keys())
console.log(person.get("firstname"));
for(let element of person.keys()){
    console.log(element);
}

//iteration 
for(let element of person){
    console.log(element);
}

//destructuring 
for(let [element ,value] of person){
    console.log(element,value)
}
//Map 
const person1 =new Map([[6,7],["name","vaishnavi"]]);
console.log(person1)
for(let element of person1.keys()){
    console.log(element , typeof element)
}

person3 =
{
    name:"vaishanvi", age:9
}
person4 =
{
    name:"sarvesh", age:7
}
const map1 = new Map();
map1.set(person3 ,{gender:"Female", addre:"pune"})
console.log(person3.name);
console.log(map1.get(person3).gender)


map1.set(person4,{gender:"female", addre:"mumbai"})
console.log(map1.get(person4).addre)

console.log("object clone :")
const obj = 
{
    key1: "item1",
    key2:"item2",
    key3:"item3"
}
// const obj1 = obj;
obj.key3="item4";
console.log(obj);

const obj1 = {...obj}
console.log(obj1)
obj1.key = "value";
console.log(obj1);
const obj3 = Object.assign({},obj)
console.log(obj3);


