'use strict'
const tbUsuario = 'usuario'
const enums = require('../models/enums')

// exports.authenticate = (data) => {
//      const res = User.findOne({
//           email: data.email,
//           password: data.password
//      })
//      return res
// }
function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`select * from ${tbUsuario}`)
}

exports.getById = (id) => {
     return sql(`select * from ${tbUsuario} where id = ${id}`)
}
exports.save = (usuario) => {
     return sql(`INSERT INTO ${tbUsuario} (nome, sobrenome, email, senha, tipo, criado_em) VALUES (
          '${usuario.nome}',
          '${usuario.sobrenome}',
          '${usuario.email}',
          '${usuario.senha}',
          '${usuario.tipo}',
          '${usuario.criado_em}')`
     )
}

// depois tem que ter um só para alterar senha alterar senha
exports.update = (id, usuario) => {
     return sql(`UPDATE ${tbUsuario} SET 
          nome = '${usuario.nome}',
          sobrenome = '${usuario.sobrenome}',
          email = '${usuario.email}',
          tipo = '${usuario.tipo}',
          criado_em = '${usuario.criado_em}'
          WHERE id = ${id}`)
}

exports.remove = (id) => {
     return sql(`DELETE FROM ${tbUsuario} WHERE id = ${id}`)
}