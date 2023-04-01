const Leads = require('../models/leadModel')
// const Comments = require('../models/commentModel')

// const posts = require('../models/posts')

// module.exports.seed = async (req, res) => {
//     // await Posts.deleteMany({})
//     // await Posts.create(posts)
//     res.redirect('/posts')
// }

module.exports.index = async (req, res) => {
    try {
        const leads = await Leads.find().sort({ createdAt: 1 })
        res.status(200).json(leads)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.delete = async (req, res) => {
    try {
        // first find the lead, store it in a variable, then delete it from database
        const lead = await Leads.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.update = async (req, res) => {
    try {
        // add a third argument to the update { new: true } to return the new updated version of the document
        const updatedLead = await Leads.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedLead)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.create = async (req, res) => {
    try {
        const lead = await Leads.create(req.body)
        res.status(200).json(lead)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.edit = async (req, res) => {
    const lead = await Leads.findById(req.params.id)
    console.log(lead)
    res.status(200).json(lead)
}

module.exports.show = async (req, res) => {
    try {
        // populate replaces the ids with actual documents/objects we can use
        const post = await Leads.findById(req.params.id)
        res.status(200).json(post)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}