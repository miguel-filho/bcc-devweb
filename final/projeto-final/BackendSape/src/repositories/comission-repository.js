'use strict'

const tbComission = 'comissao'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${tbComission}`)
}

exports.getById = () => {
     return sql(`SELECT * FROM ${tbComission} WHERE id = ?`)
}

exports.save = () => {
      return sql(`INSERT INTO ${tbComission} SET ?`)
}

exports.update = () => {
     return sql(`UPDATE ${tbComission} SET ? WHERE id = ?`)
}

exports.remove = () => {
     return sql(`DELETE FROM ${tbComission} WHERE id = ?`)
}
