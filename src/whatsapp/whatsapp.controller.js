const whatsapp = require('./whatsapp.service')

module.exports = {
    getContacts: async (_, res) => {
        try {
            const contacts = await whatsapp.getContacts()
            res.status(200).json(contacts)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}