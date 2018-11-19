function ServicoRequest () {
    HttpRequest.call(this, 'servicos')
}

ServicoRequest.prototype = Object.create(HttpRequest.prototype)
ServicoRequest.prototype.constructor = ServicoRequest

const servicoRequest = new ServicoRequest()