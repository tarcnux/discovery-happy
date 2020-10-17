const express = require('express')
const server = express()
const path = require('path')
const pages = require('./pages')


server
.use(express.static('public'))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
//Rotas
.get('/', pages.index)
.get('/orfanato', pages.orfanato)
.get('/orfanatos', pages.orfanatos)
.get('/criar-orfanato', pages.criarOrfanato)


server.listen(5500)