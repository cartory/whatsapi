const router = require('express').Router()
const whatsapp = require('./whatsapp.controller')

module.exports = router
    .get('/contacts', whatsapp.getContacts)