'use strict'

const tbEvents = 'evento'

function sql(query){
     console.log(query)
     return query
}

exports.get = () => {
     return sql(`SELECT * FROM ${tbEvents}`)
}

exports.getById = (id) => {
     return sql(`SELECT * FROM ${tbEvents} WHERE id = ${id}`)
}

exports.save = (event) => {
      return sql(`INSERT INTO ${tbEvents} (nome, resumo, dt_inicio, dt_termino, local, endereco, cidade, estado, pais, organizado_por, campus_id) 
      VALUES ('${event.nome}',
      '${event.resumo}',
      '${event.dt_inicio}',
      '${event.dt_termino}',
      '${event.local}',
      '${event.endereco}',
      '${event.cidade}',
      '${event.estado}',
      '${event.pais}',
      '${event.organizado_por}',
      '${event.campus_id}')`)
}

exports.update = (id, event) => {
     return sql(`UPDATE ${tbEvents} SET
          nome =           '${event.nome}',
          resumo =         '${event.resumo}',
          dt_inicio =      '${event.dt_inicio}',
          dt_termino =     '${event.dt_termino}',
          local =          '${event.local}',
          endereco =       '${event.endereco}',
          cidade =         '${event.cidade}',
          estado =         '${event.estado}',
          pais =           '${event.pais}',
          organizado_por = '${event.organizado_por}',
          campus_id =      '${event.campus_id}'
           WHERE id = ${id}
     `)
}

exports.remove = (id) => {
     return sql(`DELETE FROM ${tbEvents} WHERE id = ${id}`)
}
