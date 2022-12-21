const models = {}
const db = require('../database/db')

models.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM product')
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

models.addProducts = ({ name, price, image }) => {
    return new Promise((resolve, reject) => {
        db.query(
            `INSERT INTO public.product (name, price, image, created_at, updated_at) VALUES($1, $2, $3, now(), now()) RETURNING product_id;
        `,
            [name, price, image]
        )
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = models
