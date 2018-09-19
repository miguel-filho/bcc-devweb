'use strict'

const tbPaper = 'trabalho'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${tbPaper}`)
}

exports.getById = (id) => {
     return sql(`SELECT * FROM ${tbPaper} WHERE id = ${id}`)
}

exports.save = (paper) => {
      return sql(`INSERT INTO ${tbPaper} (titulo, resumo, palavra_chave1, palavra_chave2, palavra_chave3) VALUES (
            '${paper.titulo}',
            '${paper.resumo}',
            '${paper.palavra_chave1}',
            '${paper.palavra_chave2}',
            '${paper.palavra_chave3}'
     )`)
}

exports.update = (id, institution) => {
     return sql(`UPDATE ${tbPaper} SET
          titulo = '${institution.titulo}',
          resumo = '${institution.resumo}',
          palavra_chave1 = '${institution.palavra_chave1}',
          palavra_chave2 = '${institution.palavra_chave2}',
          palavra_chave3 = '${institution.palavra_chave3}'
           WHERE id = ${id}
     `)
}

exports.remove = (id) => {
     return sql(`DELETE FROM ${tbPaper} WHERE id = ${id}`)
}
