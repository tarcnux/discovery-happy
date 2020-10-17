const express = require('express')
const server = express()

server.get('/', (request, response) => {
    console.log('Servidor Happy...')
    return response.send('Alo Ha')
})

server.listen(5500)