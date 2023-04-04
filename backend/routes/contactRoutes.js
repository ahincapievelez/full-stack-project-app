const express = require('express')

const router = express.Router()

const contactController = require('../controllers/contactController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')

// index
router.get('/', contactController.index)

// delete
router.delete('/:id', authorize, confirmUserAccess, contactController.delete)

// update
router.put('/:id', authorize, confirmUserAccess, contactController.update)

// create
router.post('/', authorize, contactController.create)

// show
router.get('/:id', contactController.show)

module.exports = router