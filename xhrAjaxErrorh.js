// Error handling

const url =" https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
xhr.open("GET" , url);



xhr.onload =()=>{
if(xhr.status >=200 && xhr.status < 300)
{
    const data = JSON.parse(xhr.response)
    const id = data[4].id
    console.log(id)

   const xhr2 = new XMLHttpRequest();
   const url2 = `${url}/${id}`
   xhr2.open("GET", url2)
   
    xhr2.onload=()=>{
     const data2 = JSON.parse(xhr.response)
     console.log(data2)
    
    }
    xhr2.send()
}
else{
    console.log("something went wrong")
}
}
xhr.send()


//with promise
function sendrequest(method, url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload=()=>{
            if(xhr.status >=200 && xhr.status <300){
                resolve();
            }
            else{
                reject();
            }
        }
        xhr.send();
    })
}
sendrequest("GET", url).then(()=>{
    console.log("this is using promise")
},()=>{
console.log("rejected")
})

