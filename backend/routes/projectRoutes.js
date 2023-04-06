const express = require('express')

const router = express.Router()

const projectController = require('../controllers/projectController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')

router.get('/', projectController.indexAllProjects)
// "/:cid/" is the URL Param for the id of the contact that the project is related to
router.post('/:cid/', authorize, projectController.createProject)
// "/p/" stands for project followed by that comment's id
router.delete('/:cid/p/:id', authorize, projectController.deleteProject)

router.get('/:cid/', projectController.indexProject)

router.get('/:cid/p/:id', projectController.showProject)

router.put('/:cid/p/:id', authorize, projectController.updateProject)

module.exports = router