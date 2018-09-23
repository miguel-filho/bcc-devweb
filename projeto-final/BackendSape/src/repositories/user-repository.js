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

exports.getById = () => {
    return sql(`select * from ${tbUsuario} where id = ?`)
}

exports.save = () => {
    return sql(`INSERT INTO ${tbUsuario} SET ?`)
}

// depois tem que ter um só para alterar senha alterar senha


exports.update = () => {
    return sql(`UPDATE ${tbUsuario} SET ? WHERE id = ?`)
}

exports.remove = () => {
     return sql(`DELETE FROM ${tbUsuario} WHERE id = ?`)
}