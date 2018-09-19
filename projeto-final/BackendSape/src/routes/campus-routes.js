const express = require('express')
const router = express.Router()
const campusController = require('../controllers/campus-controller')

router.get('/', campusController.get)
router.post('/', campusController.create)
router.put('/:id', campusController.update)
router.delete('/:id', campusController.delete)

module.exports = router