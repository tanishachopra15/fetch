fetch('https://quotes.toscrape.com/random')
    .then((response) => response.text())
    .then((body) => {
        console.log(body);
    });

(async () => {
    const response = await fetch('https://quotes.toscrape.com/random');
    const body = await response.text();
    console.log(body);
})();

const url = 'https://httpbin.org/get'
fetch(url)
    .then(response => {
        for(const pair of response.headers){
            console.log(`${pair[0]}: ${pair[1]}`); 
          }
        return response.text();
    }).then(data => {
        console.log(data);
    });
    
fetch(url, {
    headers: {
        "User-Agent": "My User Agent",
    },
})
    .then((response) => response.json())
    .then(data => {
        console.log(data);
    })
