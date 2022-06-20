const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to home page!")
    }

    if(req.url==='/about'){
        res.end("Welcome to about page")
    }

    res.end(`
    <h1>Wrong Path </h1>
    <p> Go Back </p>
    <a href='/'> Home Page </a>
    `)
})

server.listen(3000)