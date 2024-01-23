const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    // This (send) comes from express which replaces write and setHeader (Which can be still used)
    res.send('<h1>Hello from express js</h1>')
    console.log('in another middlewareee')
})
module.exports = router
