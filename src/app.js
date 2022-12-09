const cors = require('cors')
const express = require('express')

const app = express()
const whatsapp = require('./whatsapp/whatsapp.service')

whatsapp.initialize()

module.exports = app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    // routes
    .use('/whatsapp', require('./whatsapp/whatsapp.routes'))
    .get('/', (_, res) => res.send('Hello World!'))