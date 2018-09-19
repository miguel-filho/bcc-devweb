'use strict'

const tbCampus = 'campus'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${tbCampus}`)
}

exports.getById = (id) => {
     return sql(`SELECT * FROM ${tbCampus} WHERE id = ${id}`)
}

exports.save = (campus) => {
      return sql(`INSERT INTO ${tbCampus} (nome, instituicao_id) VALUES (
            '${campus.nome}',
            '${campus.instituicao_id}'
     )`)
}

exports.update = (id, campus) => {
     return sql(`UPDATE ${tbCampus} SET
          nome = '${campus.nome}',
          instituicao_id = '${campus.instituicao_id}'
           WHERE id = ${id}
     `)
}

exports.remove = (id) => {
     return sql(`DELETE FROM ${tbCampus} WHERE id = ${id}`)
}
