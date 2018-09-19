'use strict'
const dbConnection = require('../repositories/dbConnection')
const Validation = require('../validators/validation')
const workRepository = require('../repositories/works-repository')


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
               conn.query(workRepository.get(), (err, result) => {
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
               conn.query(workRepository.getById(req.params.id), (error, result) => {
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
     contract.hasMinLen(req.body.titulo, 3, 'O nome deve ter no mínimo 3 caracteres')
     contract.hasMinLen(req.body.resumo, 3, 'O sigla deve ter no mínimo 3 caracteres')

     if( !contract.isValid()){
          res.status(400).send(contract.errors()).end()
          return
     }

     try {
          const conn = dbConnection.connection()
          conn.connect(function(err) {
               if (err) throw err;
               console.log("Connected!");
               conn.query(workRepository.save({
                    titulo: req.body.titulo,
                    resumo: req.body.resumo,
                    palavra_chave1: req.body.palavra_chave1,
                    palavra_chave2: req.body.palavra_chave2,
                    palavra_chave3: req.body.palavra_chave3
                    }), 
                    (error, result) => {
                         res.status(200).send(result)
                         conn.end()
                         console.log(result.insertId)
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
               conn.query(workRepository.update(req.params.id, req.body), 
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
               conn.query(workRepository.remove(req.params.id), (err, result) => {
                    res.status(200).send({
                         message: 'Artigo removido com sucesso!',
                         result
                    })
                    conn.end()
               })
          })
     
     } catch (error) {
          getCatch(res, error)           
     }
}

