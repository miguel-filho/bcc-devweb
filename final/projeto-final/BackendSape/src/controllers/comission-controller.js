'use strict'
const dbConnection = require('../repositories/dbConnection')
const Validation = require('../validators/validation')
const comissionRepository = require('../repositories/comission-repository')


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
            conn.query(comissionRepository.get(), (err, result) => {
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
            conn.query(comissionRepository.getById(), [req.params.id], (error, result) => {
                res.status(200).send(result)
                conn.end()
            })
        })
    } catch (error) {
        getCatch(res, error)
    }
}


exports.create = (req, res, next) => {
    try {
        const conn = dbConnection.connection()
        conn.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            conn.query(comissionRepository.save(),
                {
                    nome: req.body.nome,
                    evento_id: req.body.evento_id
                },
                (error, result) => {
                    res.status(200).send(result)
                    // console.log(error)
                    conn.end()
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
            conn.query(comissionRepository.update(), [req.body, req.params.id],
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
            conn.query(comissionRepository.remove(), [req.params.id], (err, result) => {
                res.status(200).send({
                    message: 'Evento removido com sucesso!',
                    result
                })
                conn.end()
            })
        })

    } catch (error) {
        getCatch(res, error)
    }
}

