'use strict'
const express = require('express')
const router = express.Router()
const comissionController = require('../controllers/comission-controller')

router.get('/', comissionController.get)
router.get('/:id', comissionController.getById)
router.post('/', comissionController.create)
router.put('/:id', comissionController.update)
router.delete('/:id', comissionController.delete)

module.exports = router