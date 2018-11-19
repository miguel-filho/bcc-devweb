'use strict'
const express = require('express')
const router = express.Router()
const evaluationController = require('../controllers/evaluation-controller')

router.get('/', evaluationController.get)
router.post('/', evaluationController.create)
router.put('/:id', evaluationController.update)
router.delete('/:id', evaluationController.delete)

module.exports = router