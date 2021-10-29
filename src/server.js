const express = require('express')
const route = require('./route')
const path = require('path')

const port = process.env.PORT || 3000

const server = express()

/* CONFIGURAÇÃO CHATINHA */
server.set('view engine', 'ejs')
server.set('views',path.join(__dirname, 'views'))
/* MANDA O SERVER.JS USAR A PASTA PUBLIC */
server.use(express.static('public'))

/* MIDWARE 
server.use(express.urlencoded({extended: true}))*/

/* MANDA O SERVER.JS USAR ROUTE.JS */
server.use(route)

server.listen(port, () => console.log('Rodando'))