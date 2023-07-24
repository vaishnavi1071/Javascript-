function getname(firstName, lastname){
    function printname(){
        console.log(`${firstName} ${lastname}`);
    }
    return printname;
}
const ans = getname("vaishnavi" , "parte")
ans();

// 2 Example
function hello(x){
    const valueA = "varA";
    const valueB = "varB";
    return function(name){
        console.log(x, valueA, valueB , name);
    }
}
const ans1 = hello("argument");
ans1("vaishnavi");
console.log(ans1);

// example 3

// function myfunction(power){
//  return function(number){
//        return number ** power
//     }
// }
// const square1 = myfunction(2);
// const ans3 = square1(3);
// console.log(ans3);

// const cube =myfunction(3);
// const ans4 = cube(3);
// console.log(ans4)

function myfunction(){
    let counter =0;
    return function(){
    if(counter < 1){
        console.log("hii... i called ")
        counter ++;
    }else{
        console.log("u already called me ")
    }
}
}
const funct = myfunction();
funct();
funct();