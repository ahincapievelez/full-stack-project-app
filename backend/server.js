require('dotenv').config()

// Load express
const express = require('express')

const cors = require('cors')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

const contactRoutes = require('./routes/contactRoutes')
const leadRoutes = require('./routes/leadRoutes')
const projectRoutes = require('./routes/projectRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

const { authorize } = require('./middleware/authMiddleware')

app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)
app.use('/users', authorize, userRoutes)
app.use('/contacts', contactRoutes)
app.use('/leads', leadRoutes)
// "/c/" stands for contact and all contact routes need a reference to their contact
app.use('/projects/c/', projectRoutes)

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})