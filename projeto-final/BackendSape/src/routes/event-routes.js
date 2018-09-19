'use strict'
const express = require('express')
const router = express.Router()
const eventController = require('../controllers/event-controller')

router.get('/', eventController.get)
router.post('/', eventController.create)
router.put('/:id', eventController.update)
router.delete('/:id', eventController.delete)

module.exports = router