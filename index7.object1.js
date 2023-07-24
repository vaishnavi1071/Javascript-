// const obj1 ={
//     key1: "value1",
//     key2:"value2"
// }

// const obj2 = Object.create(obj1);
// obj2.key = "value3";
// console.log(obj2);
// console.log(obj2.key1);
// console.log(obj2.__proto__);

/*proto is different proto is reference of the object 
if we don't have properties in a existing object with the help of
proto we can acess those properties from different object*/


//prototype only functions can provide 
function hello(){
    console.log("hello world");
}
console.log(hello.prototype)

// how can we pass proto to prototype

function studentInfo(name,age,address){
const user={};
const user12 = Object.create(studentInfo.prototype)
user.name= name,
user.age =age,
user.address =address
return user;
}

studentInfo.prototype.about =function(){
    return `My name is ${this.name} address is ${this.address}`
}
studentInfo.prototype.is18 =function(){
    return this.age >=18;
}
const user1 = studentInfo("shweta", 8, "pune");
console.log(user1)

console.log(studentInfo.prototype)
// console.log(user1.__proto__)
// // console.log(user1.about());
// console.log(user1)


// //new keyword
// function createUser(firstName, age){
// this.firstName =firstName;
// this.age =age;
// }
// createUser.prototype.about =function(){
//     console.log(this.firstName , this.age)
// }
// const user1 = new createUser("harshit" , 7)

// user1.about();
// console.log(createUser.prototype);
// console.log(user1.__proto__);

//  function studentInfo(name, age , address){
// const user = Object.create(studentInfo.prototype)
// user.name =name,
// user.age =age,
// user.address = address
// return user;
// }
// studentInfo.prototype.about = function(){
//     return `${this.name} age is ${this.age}`
// }
// studentInfo.prototype.is18 = function(){
//     return this.age <=18
// }
// const user12 =  studentInfo("harshit",8,"pune");
// const user13  = studentInfo("vaishali",98, "wai");
// console.log(user12.about())
// console.log(user13.is18())


// using new keyword
function studentInfo1(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;

} 
studentInfo.prototype.is19= function(){
    return this.age<=18
}
studentInfo.prototype.seifInfo = function(){
    return `${this.name} is ${this.age} is old`
}
const user21 = new studentInfo("vaishnavi" , 22 , "pune");
const user22 =new studentInfo("sneha", 35,"latur")
console.log(user21.is19())
for(let key in user21.hasOwnProperty){
console.log(key.hasOwnProperty)
}
for(let key in user22){
    console.log(key)
}








