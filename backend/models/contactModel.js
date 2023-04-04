const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    company: {
        type: String,
    },
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    phoneNumber: {
        type: String,
        required: true 
    },
    projects: [{
        type: mongoose.Types.ObjectId,
        ref: 'Project'
    }]
}, { timestamps: true })

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact