const express = require('express')
const server = express()
const PORT = 8081
const router = require('./src/routers/index')
const dbms = require('./src/database/db')

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(router)

dbms.connect()
    .then(() => {
        console.log('database connected')
        server.listen(PORT, () => {
            console.log(`app running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })

// TODO http://localhost:8081/search/names?nama=ebi&role=backend&hoby=sepeda
