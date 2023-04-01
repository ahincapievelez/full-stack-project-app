const mongoose = require('mongoose')

const Schema = mongoose.Schema

const leadSchema = new Schema({
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
    }
}, { timestamps: true })

const Lead = mongoose.model('Lead', leadSchema)

module.exports = Lead