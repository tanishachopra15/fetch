// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
// .then((response)=>response.json())
// .then((json)=>console.log(json));

fetch('https://jsonplaceholder.typicode.com/user/1/todos')
.then((response)=>response.json())
.then((json)=>console.log(json));