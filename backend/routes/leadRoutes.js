const express = require('express')

const router = express.Router()

const leadController = require('../controllers/leadController')

const { authorize } = require('../middleware/authMiddleware')


// index
router.get('/', leadController.index)

// new
// router.get('/new', leadController.new)

// delete
router.delete('/:id', authorize, leadController.delete)

// update
router.put('/:id', authorize, leadController.update)

// create
router.post('/', authorize, leadController.create)

// edit 
router.get('/:id/edit', authorize, leadController.edit)

// show
router.get('/:id', leadController.show)

module.exports = router