// for each method

const array =[8,9,9,0,3]; 
function addsum(number,index){
console.log(`the index is ${index} multiplication is =${number*2} `);
}
for(let i =0; i<array.length; i++){
addsum(array[i],i);
}




const array1 =[ 8,90 ,45, 78];
function printnumber(number, index){
    console.log(`${index} number is = ${number}`)
}
array1.forEach(printnumber);




const array3 =[8,9,34,67];
array3.forEach(function(number ,index){
console.log(`the index is ${index} ${number*3} `)
})



function person(student1){
    console.log(student1.name);

}
const student =[ {name:"harshit"},{name:"sana", age :8}];
student.forEach(person)

student.forEach(function(student){
    console.log(student.age);
})




student.forEach(student => {
    console.log(student.name);
})


console.log("map method is array's method :")
function square(number){
    //by using function declaration
    return number*number;
}
const myarray =[9,8,6,7];
const returnArray =myarray.map(square);
console.log(returnArray);



 const newarray =myarray.map((number)=>{
return `${number*number*number}`
})
console.log(newarray)



const school =[{name:"srs", add:"pune"},
                {name:"sty", add:"mumbai"}];
  const newarray1 =school.map((school) =>{
    return school.name;

  }     )
console.log(newarray1)   


console.log("filter method : ")

const filter1 = [9,8,4,6,7];
const expre = function(number){
    //function expression 
    return number%2!==0;
}
const myArray =filter1.filter(expre);
console.log(myArray);


const myArray1 = filter1.filter((number)=>{
    // Arrow function
return number%2===0
})
console.log(myArray1);


console.log("reduce method :")
const sumNum = function(sum, currentnumber){
    return sum+currentnumber;
}
const mArray =[9,7,6];
const sum = mArray.reduce(sumNum);
console.log(sum);


// realtime example
const addcart = [{product:"dress", productId:1, price:340},
                 {product:"blazzzer", productId:2, price:670}];
const totalAmout= addcart.reduce(( total,currentproduct)=>{
    
    return   total + currentproduct.price;
},50);
console.log(totalAmout);


//sort method

console.log("sort method");
const sort1 =[8,9,67,90,2];
sort1.sort();
console.log(sort1);


sort1.sort((a, b)=>{
    return a-b
})
console.log(sort1);



sort1.sort((b,a)=>{
  return  a-b});
console.log(sort1);


console.log("realtime edxample of sort method :")
const priceArray =[{productname:"tv", price:900},
                   {productname:"ty",price:895},
                   {productname:"laptop", price:7822}];
const lowtohigh= priceArray.sort((a,b)=>a.price-b.price)
 console.log(lowtohigh); 
 
 const hightolow = priceArray.sort((a,b)=>b.price-a.price)
 console.log(hightolow);



 console.log("Find method :")
 const string =["dog", "cat", "cows"];
const ans =string.find((string1)=> string1.length===3)
console.log(ans);//gives only first occurence


const user =[{userId: 1,name:"shah", age:7},
             {userId: 2,name:"sharma", age:6}]
const user1 =user.find((users)=>users.userId === 2)
console.log(user1)


console.log("every method :")
const numbers =[8,9,3,7,0,1];
const ans1=numbers.every((num)=>num%2==0)
console.log(ans1);

const productcart =[{productName:"saree" ,price:780},
                   {productName:"T-shirt", price:9000}]

const ans2 =productcart.every((value)=>value.price>1000)
console.log(ans2)




console.log("some method: ")
const product = [{product:1,productName:"aspirin", expiryDate:1/9/2001},
                {product:2,productName:"coco",expirydate:11/8/2000}]

const Checkdate =product.some((date)=> date.expiryDate < 3/10/2001)
console.log(Checkdate);


console.log("fill method :")

// value start index
const array10 =[7,8,9,0,2];
array10.fill(9, 2 ,5);
console.log(array10);

const myArray0 = new Array(10).fill(0);
console.log(myArray0);

console.log("splice method :")
const spliceArray =[8,9,"item2",4.8,90];
//spliceArray.splice(1,2);
//console.log(spliceArray)//delete value

spliceArray.splice(1,2,"tem3",7.8);
//insert array or delete array
console.log(spliceArray);




