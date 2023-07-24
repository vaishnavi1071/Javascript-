const array = [{
    id:1,
    name:"vaishnavi",
    isActive: true,
    age:20
}
,{
    id:2,
    name:"shweta",
    isActive:false,
    age:22
},
{
    id:3,
    name:"nayan",
    isActive:true,
    age:19
},
{
    id:4,
    name:"soham",
    isActive:false,
    age:18
}]

//sort
const so =array.sort((array1,array2)=>array1.age<array2.age ? -1 : 1);
console.log(so)






const user =[];
for(let i=0;i<array.length;i++){
    user.push(array[i].name)
 
}
console.log(user)

//solution 2
const name1 =[]
array.forEach((user1)=>{
    name1.push(user1.age)

})
console.log(name1)


const user2 =[];
for(let i =0 ; i<array.length;i++){
    if(array[i].isActive==true)
    {
        user2.push(array[i].name)
    }
    
}
console.log(user2)

//map function return new array
const myvalue =array.filter((array)=> array.isActive==false)
.sort((array1,array2)=> array1.age>array2.age ? -1 : 1)
.map((array)=>array.name)
console.log(myvalue)


