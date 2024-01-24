const http = require('http')

const express = require('express')

const app = express()

/* app.use('/', (req, res, next) => {
    console.log("first middleware")

}) */

// Middleware - In this middleware i am not calling next function inside, since i want just launch add-product middleware
// The order of the middlewares is in a way that the last one is read as the last one since the path passed as first parameter
// is intended as "starts with" so if i place the path "/" as first middleware and the url is add-product, the middleware 
// will not be used due the order of the middlewares 
// middleware 1
app.use('/add-product', (req, res, next) => {
    console.log('padd product')
    //res.send("<h1>Add a new product</h1>")
    next()
})
// middleware 2
app.use('/', (req, res, next) => {

    // This (send) comes from express which replaces write and setHeader (Which can be still used)
    res.send('<h1>Hello from express js</h1>')
    console.log('in another middlewareee')
})

/* const server = http.createServer(app);

server.listen(3001) */
// All this above, can be translated, with express, as
app.listen(3001)