const express = require('express')

const router = express.Router()

// admin/add-product
router.get('/add-product', (req, res, next) => {
    console.log('padd product')
    res.send('<form action=\"/admin/product\" method=POST><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

// admin/product
router.post('/product', (req, res, next) => {
    // This doesn't work alone. It needs a parser and that's the why i installed body parser 
    console.log(req.body)
    res.redirect('/')
})

module.exports = router