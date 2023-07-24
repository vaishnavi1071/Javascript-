const api =" https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
// console.log(xhr);
//xml http request
//browser does this work in background
xhr.open("GET", api)
xhr.onreadystatechange = function(){
    // console.log(xhr)
    if(xhr.readyState === 4){
     const response = xhr.response;
  const data = JSON.parse(response)
  console.log(data)
  console.log(typeof data)
    
    }
    
}
xhr.send();


















































