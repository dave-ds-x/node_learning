const express = require('express')
const path = require("path")
const router = express.Router()

// admin/add-product
// __dirname is a global variable provided by Node to get the absolute path of this file
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "add_product.html"))
})

// admin/product
router.post('/product', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"))
})

module.exports = router