'use strict'
const dbConnection = require('../repositories/dbConnection')
const Validation = require('../validators/validation')
const authorRepository = require('../repositories/author-repository')


const getCatch = (res, error) => {
    console.error(error)
    res.status(500).send({
        message: 'Falha ao processar sua requisição.'
    })
}

exports.get = (req, res, next) => {
    try {
        const conn = dbConnection.connection()
        conn.connect(err => {
            if (err) throw err
            console.log('Conectado!')
            conn.query(authorRepository.get(), (err, result) => {
                res.status(200).send(result)
                conn.end()
            })
        })
    } catch (error) {
        getCatch(res, error)
    }
}

exports.getById = (req, res, next) => {
    try {
        const conn = dbConnection.connection()
        conn.connect(err => {
            if (err) throw err
            console.log('Conectado!!')
            conn.query(authorRepository.getById(), [req.params.id], (error, result) => {
                res.status(200).send(result)
                conn.end()
            })
        })
    } catch (error) {
        getCatch(res, error)
    }
}


exports.create = (req, res, next) => {
    let contract = new Validation()
    contract.hasMinLen(req.body.nome, 3, 'O nome deve ter no mínimo 3 caracteres')
    contract.hasMinLen(req.body.cpf, 10, 'O cpf deve ter no mínimo 10 caracteres')
    contract.hasMaxLen(req.body.cpf, 14, 'O cpf deve ter no máximo 14 caracteres, contando com os pontos e traços.')

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end()
        return
    }

    try {
        const conn = dbConnection.connection()
        conn.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            conn.query(authorRepository.save(),
                {
                    nome: req.body.nome,
                    email: req.body.email,
                    cpf: req.body.cpf
                },
                (error, result) => {
                    res.status(200).send(result)
                    conn.end()
                    // console.log(result.insertId)
                }
            )

        });

    } catch (err) {
        getCatch(res, err)
    }
}

exports.update = (req, res, next) => {
    try {
        const conn = dbConnection.connection()
        conn.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            conn.query(authorRepository.update(), [req.body, req.params.id],
                (errr, result) => {
                    res.status(200).send({ result })
                    conn.end()
                }
            )
        })
    } catch (error) {
        getCatch(res, error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const conn = dbConnection.connection()
        conn.connect(err => {
            if (err) throw err
            console.log('Conectado...')
            conn.query(authorRepository.remove(), [req.params.id], (err, result) => {
                res.status(200).send({
                    message: 'Autor removido com sucesso!',
                    result
                })
                conn.end()
            })
        })

    } catch (error) {
        getCatch(res, error)
    }
}

