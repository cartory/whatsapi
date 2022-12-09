const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

module.exports = client
    .on('qr', qr => qrcode.generate(qr, { small: true }))
    .on('ready', () => {
        console.log(new Date())
        console.log('Client is ready!');
    })