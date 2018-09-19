'use strict'
const express = require('express')
const router = express.Router()
const comissionWorkController = require('../controllers/comission-work-controller')

router.get('/', comissionWorkController.get)
router.post('/', comissionWorkController.create)
router.put('/:id', comissionWorkController.update)
router.delete('/:id', comissionWorkController.delete)

module.exports = router