const express = require('express')
const path = require("path")
const router = express.Router()

// admin/add-product
// __dirname is a global variable provided by Node to get the absolute path of this project root
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, "expressJs_views", "views", "admin.html"))
})

// admin/product
router.post('/product', (req, res, next) => {
    res.sendFile(path.join(__dirname, "expressJs_views", "views", "admin.html"))
})

module.exports = router