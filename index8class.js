
// prototypal Inheritance

const obj ={
    name: "sarita",
    age:9,
    city:"pune",
    about : function(){
        console.log(`${this.name} is ${this.age} yrs old `)
    }
}

const obj2 ={
    name:"akshay"
}
obj2.__proto__= obj;
obj.about();
console.log(obj.__proto__);
console.log(obj2.__proto__.__proto__);
console.log(obj2.name +" is from "+ obj2.city);
obj2.about();


//passing proto to prototype
function studentInfo(name, age, address){
this.name =name,
this.age = age,
this.address = address
}
studentInfo.prototype.about = function(){
    return `${this.age}`
}
studentInfo.prototype.is18 = function(){
    return this.age <=18;
}
const user1 = new studentInfo("sakshi" ,8 ,"pune");
const user2 = new studentInfo("sarita" ,19 , "wai");
console.log(user1.about())
console.log(user2.is18())
console.log(user2.__proto__);
console.log(studentInfo.prototype)

//lexical scope
var d =6;
function hello(a, b){
    x =6;
    function hello1(){
        c = a+b+x;
        r = a*d
        console.log("multiplication : " + r)
    console.log("i am inner function " + c)

    }
    hello1()
}
hello(7, 10);






function hello2(){
    //function declaration

}
console.log(hello2)


const funct = function(){
    // function expression
}


const funct2 = (a)=>{ return a}
    //Arrow function
console.log(funct2(7));








