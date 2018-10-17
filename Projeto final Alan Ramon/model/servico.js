const mongoose = require('mongoose')

const ServicoSchema = new mongoose.Schema({
    nome: String,
    tipo: String,
    valor: Number,
    formaPagamento: String,
    parcelas: Number,
})

module.exports = mongoose.model('Servico', ServicoSchema)