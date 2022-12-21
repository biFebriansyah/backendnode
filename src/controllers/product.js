const ctrl = {}
const models = require('../models/product')
const respone = require('../lib/respone')

ctrl.getData = async (req, res) => {
    try {
        const result = await models.getAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

ctrl.addData = async (req, res) => {
    try {
        const { name, price, image } = req.body
        const result = await models.addProducts({ name, price, image })
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

ctrl.updateData = async (req, res) => {
    try {
        const { name, price, image } = req.body
        const result = await models.addProducts({ name, price, image })
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send('terjadi error')
    }
}

ctrl.delData = async (req, res) => {
    try {
        const { name, price, image } = req.body
        const result = await models.addProducts({ name, price, image })
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send('terjadi error')
    }
}

module.exports = ctrl
