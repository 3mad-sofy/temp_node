const http = require('http');
const { url } = require('inspector/promises');
  
 const server = http.createServer((req,rec) => {

    if (req.url === '/') { 
        rec.end('Welcome to our home page!')

    }

    if(req.url === '/about') { 

        rec.end('Here is our Short history')
    }
        rec.end(`
            <h1>Oops!<h1>
            
        <p>We can not find the page you are looking for!</p>
        <a href = "/">Back home </a>
            `)
 }
)

 server.listen(4040);