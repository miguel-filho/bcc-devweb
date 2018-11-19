'use strict'

const tbEvents = 'evento'

function sql(query) {
	console.log(query)
	return query
}

exports.get = () => {
	return sql(`SELECT * FROM ${tbEvents}`)
}

exports.getById = () => {
	return sql(`SELECT * FROM ${tbEvents} WHERE id = ?`)
}

exports.save = () => {
	return sql(`INSERT INTO ${tbEvents} SET ?`)
}

exports.update = () => {
	return sql(`UPDATE ${tbEvents} SET ? WHERE id = ?`)
}

exports.remove = () => {
	return sql(`DELETE FROM ${tbEvents} WHERE id = ?`)
}
