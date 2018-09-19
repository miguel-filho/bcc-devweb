'use strict'

const tbComission = 'comissao'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${tbComission}`)
}

exports.getById = (id) => {
     return sql(`SELECT * FROM ${tbComission} WHERE id = ${id}`)
}

exports.save = (comission) => {
      return sql(`INSERT INTO ${tbComission} (nome, evento_id) 
      VALUES (
     '${comission.nome}',
      '${comission.evento_id}')`)
}

exports.update = (id, comission) => {
     return sql(`UPDATE ${tbComission} SET
          nome =           '${comission.nome}',
          evento_id =      '${comission.evento_id}'
           WHERE id = ${id}
     `)
}

exports.remove = (id) => {
     return sql(`DELETE FROM ${tbComission} WHERE id = ${id}`)
}
