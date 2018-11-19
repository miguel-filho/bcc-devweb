'use strict'

const tbComissionWork = 'comissao_trabalho'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${tbComissionWork}`)
}

exports.getById = (id) => {
     return sql(`SELECT * FROM ${tbComissionWork} WHERE id = ${id}`)
}

exports.save = (comissionWork) => {
     return sql(`INSERT INTO ${tbComissionWork} (comissao_id, trabalho_id) 
          VALUES (
               '${comissionWork.comissao_id}',
               '${comissionWork.trabalho_id}')`)
}

exports.update = (id, comissionWork) => {
     return sql(`UPDATE ${tbComissionWork} SET
          comissao_id = '${comissionWork.nome}',
          trabalho_id = '${comissionWork.evento_id}'
           WHERE id = ${id}
     `)
}

exports.remove = (id) => {
     return sql(`DELETE FROM ${tbComissionWork} WHERE id = ${id}`)
}
