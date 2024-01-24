const express = require('express')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// App use identifies a startsWith match with path
// App get / post / delete / ... identifies an exact match with path
// The firs parameter is a path filer
app.use("/admin", adminRoutes)
app.use("/shop", shopRoutes)

// status wants an http code and in case it verifies, sends what in send function
app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>")
})


app.use('/', (req, res, next) => {
    // This (send) comes from express which replaces write and setHeader (Which can be still used)
    res.send('<h1>Hello from express js</h1>')
    console.log('in another middlewareee')
})

app.listen(3001)