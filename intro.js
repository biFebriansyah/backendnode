const express = require('express')
const server = express()
const PORT = 8081

//TODO server.[method]('endpoint', (req,res)=>{})
// TODO www.tokopedia.com/auth

server.get('/', (request, respone) => {
    respone.send('app running')
})

// req parmas
server.get('/hello/:names', (request, respone) => {
    const name = request.params.names
    respone.send(`hello ${name}`)
})

// req query
server.get('/search/names', (request, respone) => {
    const qr = request.query
    respone.send(qr)
})

server.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})

// TODO http://localhost:8081/search/names?nama=ebi&role=backend&hoby=sepeda
