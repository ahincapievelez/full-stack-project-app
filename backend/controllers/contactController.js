const Contacts = require('../models/contactModel')
const Projects = require('../models/projectModel')


module.exports.index = async (req, res) => {
    try {
        const contacts = await Contacts.find().sort({ createdAt: 1 })
        res.status(200).json(contacts)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.delete = async (req, res) => {
    try {
        // first find the contact, store it in a variable, then delete it from database
        const contact = await Contacts.findByIdAndDelete(req.params.id)
        // delete all comments where the comment id 
        await Projects.deleteMany({ _id: { 
            // equals/matches any comment ids in this array
            $in: contact.projects 
        }})
        res.status(200).json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.update = async (req, res) => {
    try {
        // add a third argument to the update { new: true } to return the new updated version of the document
        const updatedContact = await Contacts.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedContact)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.create = async (req, res) => {
    try {
        const contact = await Contacts.create(req.body)
        res.status(200).json(contact)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.show = async (req, res) => {
    try {
        // populate replaces the ids with actual documents/objects we can use
        const contact = await Contacts.findById(req.params.id).populate('projects')
        res.status(200).json(contact)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}