'use strict'

const TB_WORK_AUTHOR = 'trabalho_autor'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${TB_WORK_AUTHOR}`)
}

exports.getById = () => {
     return sql(`SELECT * FROM ${TB_WORK_AUTHOR} WHERE id = ?`)
}

exports.save = () => {
      return sql(`INSERT INTO ${TB_WORK_AUTHOR} SET ?`)
}

exports.update = () => {
      return sql(`UPDATE ${TB_WORK_AUTHOR} SET ? WHERE id = ?`)
}

exports.remove = () => {
     return sql(`DELETE FROM ${TB_WORK_AUTHOR} WHERE id = ?`)
}
