'use strict'

const tbInstitution = 'instituicao'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${tbInstitution}`)
}

exports.getById = (id) => {
     return sql(`SELECT * FROM ${tbInstitution} WHERE id = ${id}`)
}

exports.save = (institution) => {
      return sql(`INSERT INTO ${tbInstitution} (nome, sigla) VALUES (
            '${institution.nome}',
            '${institution.sigla}'
     )`)
}

exports.update = (id, institution) => {
     return sql(`UPDATE ${tbInstitution} SET
          nome = '${institution.nome}',
          sigla = '${institution.sigla}'
           WHERE id = ${id}
     `)
}

exports.remove = (id) => {
     return sql(`DELETE FROM ${tbInstitution} WHERE id = ${id}`)
}
