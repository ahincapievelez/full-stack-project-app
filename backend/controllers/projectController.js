const Contacts = require('../models/contactModel')
const Projects = require('../models/projectModel')

module.exports.createProject = async (req, res) => {
    try {
        // create a document in our project collection
        const project = await Projects.create(req.body)
        // find the post 
        await Contacts.findByIdAndUpdate(req.params.cid, {
            // and push the new project document's id
            $push: {
                // to the contact's projects field/property
                projects: project._id
            }
        })
        res.status(200).json(project)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.deleteProject = async (req, res) => {
    try {
        // first use the id to delete the project from the projects collection
        await Projects.findByIdAndDelete(req.params.id)
        // then use the post's id to find the post
        await Contacts.findByIdAndUpdate(req.params.cid, {
            // and pull/remove the reference id (to the comment) from
            $pull: {
                // the comments array
                projects: req.params.id
            }
        })
        res.json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.indexAllProjects = async (req, res) => {
    try {
        const projects = await Projects.find().populate('contacts')
        res.status(200).json(projects)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.indexProject = async (req, res) => {
    try {
        // target the projects property 
        const contact = await Contacts.findById(req.params.cid).populate({path: 'projects', options: {sort: {endDate: 1}}})
        res.json(contact.projects)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.showProject = async (req, res) => {
    try {
        // find the contact and filter it's projects property array
        const project = await Projects.findById(req.params.id)
        res.json(project)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.updateProject = async (req, res) => {
    try {
        // update a project by updating an item in the projects property in contact
        await Projects.findByIdAndUpdate(req.params.id, req.body)
        res.json({ message: 'updated successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}