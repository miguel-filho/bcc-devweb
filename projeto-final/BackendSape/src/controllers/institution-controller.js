'use strict'
const dbConnection = require('../repositories/dbConnection')
const Validation = require('../validators/validation')
const institutionRepository = require('../repositories/institution-repository')


const getCatch = (res, error) => {
     console.error(error)
     res.status(500).send({
          message: 'Falha ao processar sua requisição.'
     })
}

exports.get = (req, res, next) => {
     try {
          const conn = dbConnection.connection()
          conn.connect( err => {
               if (err) throw err
               console.log('Conectado!')
               conn.query(institutionRepository.get(), (err, result) => {
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
          conn.connect( err =>{
               if(err) throw err
               console.log('Conectado!!')
               conn.query(institutionRepository.getById(req.params.id), (error, result) => {
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
     contract.hasMinLen(req.body.sigla, 3, 'O sigla deve ter no mínimo 3 caracteres')

     if( !contract.isValid()){
          res.status(400).send(contract.errors()).end()
          return
     }

     try {
          const conn = dbConnection.connection()
          conn.connect(function(err) {
               if (err) throw err;
               console.log("Connected!");
               conn.query(institutionRepository.save({
                    nome: req.body.nome,
                    sigla: req.body.sigla,
                    }), 
                    (error, result) => {
                         res.status(200).send(result)
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
          conn.connect(function(err) {
               if (err) throw err;
               console.log("Connected!");
               conn.query(institutionRepository.update(req.params.id, req.body), 
                    (errr, result) => {
                         res.status(200).send({result})
                         conn.end()
                    }
               )     
          })
     } catch (error) {
          getCatch(res, error)          
     }
}

exports.delete = async(req, res, next) => {
     try {
          const conn = dbConnection.connection()
          conn.connect( err => {
               if(err) throw err
               console.log('Conectado...')
               conn.query(institutionRepository.remove(req.params.id), (err, result) => {
                    res.status(200).send({
                         message: 'Instituição removida com sucesso!',
                         result
                    })
                    conn.end()
               })
          })
     
     } catch (error) {
          getCatch(res, error)           
     }
}

