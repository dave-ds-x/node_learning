const http = require('http')

const express = require('express')

const app = express()

// Middleware - this is called to any request
// middleware 1
app.use((req, res, next) => {
    console.log('called for any request')
    // This allows to go on the next middleware - in case gets removed, the middleware 2 would be never executed
    next()
})
// middleware 2
app.use((req, res, next) => {
    console.log('in another middleware')
    // This (send) comes from express which replaces write and setHeader (Which can be still used)
    res.send('<h1>Hello from express js</h1>')
})

/* const server = http.createServer(app);

server.listen(3001) */
// All this above, can be translated, with express, as
app.listen(3001)