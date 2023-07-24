/*function studentInfo(firstName, age , add){
const user ={} // empty object

user.firstName = firstName,
user.age=age,
user.add = add,
user.about =function(){
 return this.age >=18
}
user.meth1 = function(){
    // when objects create this method will create 
    //multiple times so implement this method outside 
    // function it don't consume lot of memory
    return `${this.firstName} is ${this.age} year old`;
}
return user;

}
const user1 =studentInfo("ashish" , 8 , "pune");
console.log(user1);
console.log(user1.about());
console.log(user1.meth1());

user2 = studentInfo("sayli", 7,"mumbai");
console.log(user2);
console.log(user2.about());
console.log(user2.meth1());
*/








const usermethod ={
 education: function()
  {
return this.age <= 25;
  },
  info1: function(){
    return `My name is ${this.name} age is ${this.age}`;
  }
}
function teacherinfo(name,age, add){
   const teacher={};
  teacher.name= name,
  teacher.age = age,
  teacher.add =add,
  teacher.education= usermethod.education,
  teacher.info1 = usermethod.info1

 
  return teacher;


}

const teacher1 = teacherinfo("Yogita" , 28, "pune");
console.log(teacher1);
console.log(teacher1.info1());
console.log(teacher1.education());




