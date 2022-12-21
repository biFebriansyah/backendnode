const express = require('express')
const routers = express.Router()

const product = require('./product')

routers.use('/products', product)

module.exports = routers
