const router = require('express').Router()
const whatsapp = require('./whatsapp.controller')

module.exports = router
    .get('/chats', whatsapp.getChats)
    .get('/send', whatsapp.sendMessage)
    .get('/contacts', whatsapp.getContacts)