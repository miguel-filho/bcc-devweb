'use strict'
const dbConnection = require('../repositories/dbConnection')
const Validation = require('../validators/validation')
const comissionWorkRepository = require('../repositories/comission-work-repository')


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
               conn.query(comissionWorkRepository.get(), (err, result) => {
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
               conn.query(comissionWorkRepository.getById(req.params.id), (error, result) => {
                    res.status(200).send(result)
                    conn.end()
               })
          })
     } catch (error) {
          getCatch(res, error)
     }
}


exports.create = (req, res, next) => {
     // let contract = new Validation()
     // if( !contract.isValid()){
     //      res.status(400).send(contract.errors()).end()
     //      return
     // }

     try {
          const conn = dbConnection.connection()
          conn.connect(function(err) {
               if (err) throw err;
               console.log("Connected!");
               conn.query(comissionWorkRepository.save({
                    comissao_id: req.body.comissao_id,
                    trabalaho_id: req.body.trabalho_id
                    }), 
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
          conn.connect(function(err) {
               if (err) throw err;
               console.log("Connected!");
               conn.query(comissionWorkRepository.update(req.params.id, req.body), 
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
               conn.query(comissionWorkRepository.remove(req.params.id), (err, result) => {
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

