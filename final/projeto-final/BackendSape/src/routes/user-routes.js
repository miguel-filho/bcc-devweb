'use strict'
const express = require('express')
const router = express.Router()
const userController = require('../controllers/user-controller') 
// const authService = require('../services/auth-service')

// router.post('/authenticate', userController.authenticate)
// router.post('/refresh-token', authService.authorize, userController.refreshToken)
router.get('/', userController.get)
router.get('/:id', userController.getById)
router.post('/', userController.create)
router.patch('/:id', userController.update)
router.delete('/:id', userController.delete)
// router.get('/admin/:id', clientController.getById)
// router.get('/tags/:tag', clientController.getByTag)




module.exports = router
