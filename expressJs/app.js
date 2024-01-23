const http = require('http')

const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// Middleware - In this middleware i am not calling next function inside, since i want just launch add-product middleware
// The order of the middlewares is in a way that the last one is read as the last one since the path passed as first parameter
// is intended as "starts with" so if i place the path "/" as first middleware and the url is add-product, the middleware 
// will not be used due the order of the middlewares 
app.use('/add-product', (req, res, next) => {
    console.log('padd product')
    res.send('<form action=\"/product\" method=POST><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.use('/product', (req, res, next) => {
    // This doesn't work alone. It needs a parser and that's the why i installed body parser 
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    // This (send) comes from express which replaces write and setHeader (Which can be still used)
    res.send('<h1>Hello from express js</h1>')
    console.log('in another middlewareee')
})

app.listen(3001)