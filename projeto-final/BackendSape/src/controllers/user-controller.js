'use strict'
const Validation = require('../validators/validation')
const userRepository = require('../repositories/user-repository')
const md5 = require('md5')
const dbConnection = require('../repositories/dbConnection')
const enums = require('../models/enums')
// const authService = require('../services/auth-service')

exports.get = (req, res, next) => {
    try {
        const conn = dbConnection.connection()
        conn.connect(err => {
            if (err) throw err
            console.log('Conectado!')
            conn.query(userRepository.get(), (error, result) => {
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
            conn.query(userRepository.getById(), [req.params.id], (error, result) => {
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
    contract.hasMinLen(req.body.sobrenome, 3, 'O sobrenome deve ter no mínimo 3 caracteres')
    contract.hasMinLen(req.body.email, 5, 'O e-mail deve ter no mínimo 5 caracteres')

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end()
        return
    }

    try {
        const conn = dbConnection.connection()
        conn.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            const dataAtual = new Date
            conn.query(userRepository.save(),
                {
                    nome: req.body.nome,
                    sobrenome: req.body.sobrenome,
                    email: req.body.email,
                    senha: md5(req.body.senha + global.SALT_KEY),
                    tipo: enums.tipoUsuario.padrao,
                    telefone: req.body.telefone,
                    area: req.body.area,
                    criado_em: `${dataAtual.getFullYear()}-${dataAtual.getMonth()}-${dataAtual.getDate()}`,
                    vencimento: `${dataAtual.getFullYear() + 1}-${dataAtual.getMonth()}-${dataAtual.getDate()}`,
                    comissao_id: req.body.comissao_id
                },
                (error, result) => {
                    res.status(200).send({ result, message: 'Usuário criado com sucesso!' })
                    console.log('err:', error)
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
            conn.query(userRepository.update(),
                [
                    req.body,
                    req.params.id,
                ],
                (errr, result) => {
                    res.status(200).send({ result, message: 'Usuário atualizado com sucesso!' })
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
            conn.query(userRepository.remove(), [req.params.id], (err, result) => {
                res.status(200).send({
                    message: 'Usuário removido com sucesso!',
                    result
                })
                conn.end()
            })
        })

    } catch (error) {
        getCatch(res, error)
    }
}

exports.authenticate = async (req, res, next) => {
    try {
        const user = await userRepository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
        })

        if (!user) {
            res.status(401).send({
                message: 'Usuário ou senha inválido!'
            })
            return
        }

        const token = await authService.generateToken({
            id: user._id,
            email: user.email,
            password: user.password,
            roles: user.roles
        })
        res.status(201).send({
            token: token,
            data: {
                email: user.email,
                name: user.name
            }
        })

    } catch (error) {
        getCatch(res, error)
    }
}

// exports.refreshToken = async(req, res, next) => {
//      try {
//           // Recuperando o token
//           const token = req.body.token || req.query.token || req.headers['x-access-token']
//           const data = await authService.decodeToken(token)

//           // const client = await repository.getById(data._id)
//           const client = await repository.getById(data.id)

//           if(!client){
//                res.status(401).send({
//                     message: 'Cliente não encontrado!!'
//                })
//                return
//           }

//           const tokenData = await authService.generateToken({
//                id: client._id,
//                email: client.email,
//                senha: client.senha,
//                roles: client.roles
//           })


//           res.status(201).send({
//                token: token,
//                data:{
//                     email: client.email,
//                     razaoSocial: client.razaoSocial
//                }
//           })

//      } catch (error) {
//           getCatch()
//      }
// }

function getCatch(res, error) {
    console.error(error)
    res.status(500).send({
        message: 'Falha ao processar sua requisição.'
    })
}