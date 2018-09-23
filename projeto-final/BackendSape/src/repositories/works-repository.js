'use strict'

const tbPaper = 'trabalho'

function sql(query) {
	console.log(query)
	return query
}

exports.get = () => {
	return sql(`SELECT * FROM ${tbPaper}`)
}

exports.getById = () => {
	return sql(`SELECT * FROM ${tbPaper} WHERE id = ?`)
}

exports.save = () => {
	return sql(`INSERT INTO ${tbPaper} SET ?`)
}

exports.update = () => {
	return sql(`UPDATE ${tbPaper} SET ? WHERE id = ?`)
}

exports.remove = () => {
	return sql(`DELETE FROM ${tbPaper} WHERE id = ?`)
}
