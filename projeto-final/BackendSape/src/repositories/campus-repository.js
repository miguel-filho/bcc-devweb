'use strict'

const tbCampus = 'campus'

function sql(query) {
    console.log(query)
    return query
}

exports.get = () => {
    return sql(`SELECT * FROM ${tbCampus}`)
}

exports.getById = () => {
    return sql(`SELECT * FROM ${tbCampus} WHERE id = ?`)
}

exports.save = () => {
    return sql(`INSERT INTO ${tbCampus} SET ?`)
}

exports.update = () => {
    return sql(`UPDATE ${tbCampus} SET ? WHERE id = ?`)
}

exports.remove = () => {
    return sql(`DELETE FROM ${tbCampus} WHERE id = ?`)
}
