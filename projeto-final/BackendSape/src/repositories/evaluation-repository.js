'use strict'

const tbEvaluation = 'avaliacao'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${tbEvaluation}`)
}

exports.getById = (id) => {
     return sql(`SELECT * FROM ${tbEvaluation} WHERE id = ${id}`)
}

exports.save = (evaluation) => {
     return sql(`INSERT INTO ${tbEvaluation} (nota1,nota2,nota3,nota4,nota5,nota6,nota7,comissao_trabalho_id,avaliador_id) 
          VALUES ('${evaluation.nota1}',
               '${evaluation.nota2}',
               '${evaluation.nota3}',
               '${evaluation.nota4}',
               '${evaluation.nota5}',
               '${evaluation.nota6}',
               '${evaluation.nota7}',
               '${evaluation.comissao_trabalho_id}',
               '${evaluation.avaliador_id}')`
          )
}

exports.update = (id, evaluation) => {
     return sql(`UPDATE ${tbEvaluation} SET
          nota1 =                '${evaluation.nota1}',
          nota2 =                '${evaluation.nota2}',
          nota3 =                '${evaluation.nota3}',
          nota4 =                '${evaluation.nota4}',
          nota5 =                '${evaluation.nota5}',
          nota6 =                '${evaluation.nota6}',
          nota7 =                '${evaluation.nota7}',
          comissao_trabalho_id = '${evaluation.comissao_trabalho_id}',
          avaliador_id =         '${evaluation.avaliador_id}'
           WHERE id = ${id}`
     )
}

exports.remove = (id) => {
     return sql(`DELETE FROM ${tbEvaluation} WHERE id = ${id}`)
}
