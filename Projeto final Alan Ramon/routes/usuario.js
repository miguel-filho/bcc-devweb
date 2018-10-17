const express = require('express')
const router = express.Router()
const Usuario = require('../model/usuario')

router.get('/', function (req, res, next) {
    Usuario.find().exec()
        .then(usuarios => {
            res.send(usuarios)
        })
        .catch(err => {
            next({message: err.message})
        })
})

router.get('/:id', function (req, res, next) {
    let id = req.params.id

    Usuario.find({
        _id: id
    }).exec()
        .then(usuarios => {
            if (usuarios.length)
                res.send(usuarios[0])
            else
                res.status(400).end()
        })
        .catch(err => {
            next({message: err.message})
        })
})

router.post('/', function (req, res, next) {
    let usuarios = req.body

    Usuario.create(usuarios)
        .then(data => {
            res.send(data)
        }).catch(err => {
            next({message: err.message})
        })
})

router.put('/:id', function (req, res, next) {
    let id = req.params.id
    let usuario = req.body

    Usuario.findByIdAndUpdate(id, usuario, {new: true}).exec()
        .then(usuarioAtualizado => {
            res.send(usuarioAtualizado);
        }).catch(err => {
            next({ message: 'Não foi possível atualizar o usuário: ' + err.message })
        })
})

router.delete('/:id', function (req, res, next) {
    let id = req.params.id
    
    Usuario.findByIdAndRemove(id).exec()
        .then(() => {
            res.status(204).end()
        }).catch(err => {
            next({message: 'Não foi possível remover o usuário: ' + err.message})
        })
})

module.exports = router