const express = require('express')
const server = express()
const path = require('path')


server
.use(express.static('public'))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
.get('/', (req, res) => {
    console.log('Servidor Happy...')
    
    return res.render('index')
})

server.listen(5500)