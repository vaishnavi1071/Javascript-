//optional chaining
console.log("optional chaining :")
person ={
    name:"srushti",
    // address: {housenumber: 890}
}
console.log(person.name)
console.log(person?.address?.housenumber);


console.log("methods :")
person1 =
{
name: "sona",
age:9
}
person2 =
{
    name:"shilpa",
    age:8,
    about: function(){
        console.log("we can passed function as a value to object")
        console.log(`name is ${this.name}`) 
    }
}
person2.about();





function studentInfo(){
    console.log(`name is ${this.name} `)
}

student1 ={
    name:"ganesh",
    age:8,
    func1 : studentInfo
}
student2 ={
    name: "rajesh",
    age:9,
    func2 : studentInfo

}
student1.func1();
student2.func2();


//methods 
console.log(this)
console.log("window is the global object ")
console.log(window)

function hello(){
    console.log("hello world")
}
hello.call();

person1 = {
    name:"mohit",
    age:9,
    about: function(){
        console.log(this.name +" is student age is " + this.age)
    }
}

person2 ={
    name:"sarvesh",
    age:9
}
person1.about();
person1.about.call(person2);


function hobby(game, singer){
    console.log(this.name , this.method, game ,singer);
}
child1={
name:"sona",
game:"kho-kho",
singer:"mahesh kale",
method: "this is call method"

}
child2 ={
    name:"mona",
     method:"this is apply method"
}

hobby.call( child1 ,"kho-kho", "mahesh kale")

hobby.apply(child2, ["running","avd"]);

console.log("bind method :");
// bind method

let myFunc = hobby.bind(child2, "reading" , "yashodhan");
console.log(myFunc);
myFunc();

console.log("Arrow function :");





