'use strict'
const dbConnection = require('../repositories/dbConnection')
const Validation = require('../validators/validation')
const evaluatinoRepository = require('../repositories/evaluation-repository')


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
               conn.query(evaluatinoRepository.get(), (err, result) => {
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
               conn.query(evaluatinoRepository.getById(req.params.id), (error, result) => {
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
               conn.query(evaluatinoRepository.save({
                    nota1: req.body.nota1,
                    nota2: req.body.nota2,
                    nota3: req.body.nota3,
                    nota4: req.body.nota4,
                    nota5: req.body.nota5,
                    nota6: req.body.nota6,
                    nota7: req.body.nota7,
                    comissao_trabalho_id: req.body.comissao_trabalho_id,
                    avaliador_id: req.body.avaliador_id
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
               conn.query(evaluatinoRepository.update(req.params.id, req.body), 
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
               conn.query(evaluatinoRepository.remove(req.params.id), (err, result) => {
                    res.status(200).send({
                         message: 'Avaliação removida com sucesso!',
                         result
                    })
                    conn.end()
               })
          })
     
     } catch (error) {
          getCatch(res, error)           
     }
}

