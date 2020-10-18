const express = require('express')
const server = express()
const path = require('path')
const pages = require('./pages')


server
//Utilizar body no req na rota salvar-orfanato
.use(express.urlencoded({ extended: true}))
//Utilizar arquivos estáticos
.use(express.static('public'))
//Configurar template engine Handlebars
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
//Rotas da aplicação
.get('/', pages.index)
.get('/orfanato', pages.orfanato)
.get('/orfanatos', pages.orfanatos)
.get('/criar-orfanato', pages.criarOrfanato)
.post('/salvar-orfanato', pages.salvarUmOrfanato)


server.listen(5500)