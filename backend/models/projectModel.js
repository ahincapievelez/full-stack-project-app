const mongoose = require('mongoose')

const Schema = mongoose.Schema

const currentDate = new Date()

const projectSchema = new Schema({
    projectName: {
        type: String,
    },
    status: {
        type: String, 
        enum: ['To Do', 'In Progress', 'On Hold', 'Completed', 'Delayed', 'Cancelled'],
        default: 'To Do'
    },
    tasks: [{
        taskName: { type: String },
        taskStatus: { 
            type: String,
            enum: ['To Do', 'In Progress', 'On Hold', 'Completed', 'Delayed', 'Cancelled'],
            default: 'To Do'
        },
        taskStartDate: {
            type: Date,
            default: currentDate
        },
        taskEndDate: { type: Date }
    }],
    startDate: {
        type: Date,
        default: currentDate 
    },
    endDate: { type: String }
}, { timestamps: true })

const Project = mongoose.model('Project', projectSchema)

module.exports = Project