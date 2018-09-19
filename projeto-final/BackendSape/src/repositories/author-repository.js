'use strict'

const tbAuthor = 'autor'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${tbAuthor}`)
}

exports.getById = (id) => {
     return sql(`SELECT * FROM ${tbAuthor} WHERE id = ${id}`)
}

exports.save = (author) => {
      return sql(`INSERT INTO ${tbAuthor} (nome, email, cpf) VALUES (
          '${author.nome}',
          '${author.email}',
          '${author.cpf}'
     )`)
}

exports.update = (id, autor) => {
     return sql(`UPDATE ${tbAuthor} SET
          nome =  '${autor.nome}',
          email = '${autor.email}',
          cpf =   '${autor.cpf}'
           WHERE id = ${id}
     `)
}

exports.remove = (id) => {
     return sql(`DELETE FROM ${tbAuthor} WHERE id = ${id}`)
}
