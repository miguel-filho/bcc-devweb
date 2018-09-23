'use strict'
const dbConnection = require('../repositories/dbConnection')
const Validation = require('../validators/validation')
const eventRepository = require('../repositories/event-repository')


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
            conn.query(eventRepository.get(), (err, result) => {
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
            conn.query(eventRepository.getById(), [req.params.id], (error, result) => {
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
            conn.query(eventRepository.save(),
                {
                    nome: req.body.nome,
                    resumo: req.body.resumo,
                    dt_inicio: req.body.dt_inicio,
                    dt_termino: req.body.dt_termino,
                    local: req.body.local,
                    endereco: req.body.endereco,
                    cidade: req.body.cidade,
                    estado: req.body.estado,
                    pais: req.body.pais,
                    organizado_por: req.body.organizado_por,
                    campus_id: req.body.campus_id
                },
                (error, result) => {
                    res.status(200).send({ result, message: 'Evento criado com sucesso!' })
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
            conn.query(eventRepository.update(), [ req.body, req.params.id ],
                (errr, result) => {
                    console.log('err: ',errr)
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
            conn.query(eventRepository.remove(), [req.params.id], (err, result) => {
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

