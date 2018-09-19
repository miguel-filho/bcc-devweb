const express = require('express')
const router = express.Router()
const paperController = require('../controllers/works-controller')


router.get('/', paperController.get)
router.post('/', paperController.create)
router.put('/:id', paperController.update)
router.delete('/:id', paperController.delete)

module.exports = router