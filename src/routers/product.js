const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/product')

routers.get('/', ctrl.getData)
routers.post('/', ctrl.addData)
routers.delete('/', ctrl.delData)
routers.put('/', ctrl.updateData)

// localhost:8081/products/

module.exports = routers
