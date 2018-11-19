'use strict'

const tbInstitution = 'instituicao'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${tbInstitution}`)
}

exports.getById = () => {
     return sql(`SELECT * FROM ${tbInstitution} WHERE id = ?`)
}

exports.save = () => {
      return sql(`INSERT INTO ${tbInstitution} SET ?`)
}

exports.update = () => {
      return sql(`UPDATE ${tbInstitution} SET ? WHERE id = ?`)
}

exports.remove = () => {
     return sql(`DELETE FROM ${tbInstitution} WHERE id = ?`)
}
