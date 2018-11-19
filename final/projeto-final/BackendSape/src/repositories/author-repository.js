'use strict'

const tbAuthor = 'autor'

function sql(query) {
	console.log(query)
	return query
}

exports.get = () => {
	return sql(`SELECT * FROM ${tbAuthor}`)
}

exports.getById = () => {
	return sql(`SELECT * FROM ${tbAuthor} WHERE id = ?`)
}

exports.save = () => {
	return sql(`INSERT INTO ${tbAuthor} SET ?`)
}

exports.update = () => {
	return sql(`UPDATE ${tbAuthor} SET ? WHERE id = ?`)
}

exports.remove = () => {
	return sql(`DELETE FROM ${tbAuthor} WHERE id = ?`)
}
