const express = require('express')
const router = express.Router()
const Servico = require('../model/servico')

router.get('/', function (req, res, next) {
    Servico.find().exec()
        .then(servicos => {
            res.send(servicos)
        })
        .catch(err => {
            next({message: err.message})
        })
})

router.get('/:id', function (req, res, next) {
    let id = req.params.id

    Servico.find({
        _id: id
    }).exec()
        .then(servicos => {
            if (servicos.length)
                res.send(servicos[0])
            else
                res.status(400).end()
        })
        .catch(err => {
            next({message: err.message})
        })
})

router.post('/', function (req, res, next) {
    let servicos = req.body

    Servico.create(servicos)
        .then(data => {
            res.send(data)
        }).catch(err => {
            next({message: err.message})
        })
})

router.put('/:id', function (req, res, next) {
    let id = req.params.id
    let servico = req.body

    Servico.findByIdAndUpdate(id, servico, {new: true}).exec()
        .then(servicoAtualizado => {
            res.send(servicoAtualizado);
        }).catch(err => {
            next({ message: 'Não foi possível atualizar o serviço: ' + err.message })
        })
})

router.delete('/:id', function (req, res, next) {
    let id = req.params.id
    
    Servico.findByIdAndRemove(id).exec()
        .then(() => {
            res.status(204).end()
        }).catch(err => {
            next({message: 'Não foi possível remover o serviço: ' + err.message})
        })
})

module.exports = router