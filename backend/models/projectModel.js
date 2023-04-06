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
    contacts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Contact'
    }],
    startDate: {
        type: Date,
        default: currentDate 
    },
    endDate: { type: Date, default: currentDate },
    tasks: { type: Number }
}, { timestamps: true })

const Project = mongoose.model('Project', projectSchema)

module.exports = Project








// tasks: [{
//     taskName: { type: String },
//     taskStatus: { 
//         type: String,
//         enum: ['To Do', 'In Progress', 'On Hold', 'Completed', 'Delayed', 'Cancelled'],
//         default: 'To Do'
//     },
//     taskStartDate: {
//         type: Date,
//         default: currentDate
//     },
//     taskEndDate: { type: Date }
// }],