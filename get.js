// list 1 object

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((text) => console.log(text));


