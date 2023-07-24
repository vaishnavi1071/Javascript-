class Createuser {
    constructor(name,age,address){
        this.name = name;
        this.age =age;
        this.address =address;
    }
    about(){
        return `${this.name} ,${ this.age}, ${this.address}`;
    }
    is18(){
        return this.age <=18;
    }
}
//without new keyword class cannot be invoked

const user1 =new Createuser("sohail", 15, "nagpur");
console.log(user1)
console.log(user1.about())







class Animal{
    constructor(name, age){
        this.age =age;
        this.name= name;

       
    }
    eat(a){
        return `${this.name} , ${this.age}, ${a}`
    
    }
    iscute(){
        return true
    }
}
const cat =  new Animal("cat", 3);
console.log(cat.eat("cookies"));


class dog extends Animal{
//  constructor(name, age){
//     this.age= age;
//     this.name =name;
//  }
 is1(){
    return this.age <=2
 }
 eat(a  ){
return  "milk"
 }
}
const dog1 = new dog("dog", 7)
console.log(dog1)
console.log(dog1.eat("milk", "haddi"))
console.log(dog1.iscute());
console.log(dog1.is1());





class person{
    constructor(firstName, lastname, age){
        this.firstName =firstName;
        this.lastname =lastname;
        this.age = age;
    }
    fullname(){
        return ` ${this.firstName} ${this.lastname}`;
    }

}
const person1 = new person("vanita" , "shah" , 17);
console.log(person1.fullname());

//without calling method i want to access method

class person12{
constructor(name, age, lastname,play){
    this.name = name;
    this.age = age;
    this.lastname =lastname;
    this.play =play;
}
get fullname(){
    return `${this.name} ${this.lastname} and age is ${age}`;

}
sethobby(play){
return `${this.play}`
}
}
const person21 = new person12("shraddha", "shahi", 23,"guitar");
console.log(person21)





