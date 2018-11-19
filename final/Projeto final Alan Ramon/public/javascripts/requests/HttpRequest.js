function HttpRequest(resource) {
    this.resource = resource
    this.urlBase = 'http://localhost:3000/'
    this.headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
    }
}

HttpRequest.prototype = Object.assign({
    login: function(login, senha) {
        return axios.post(this.urlBase + 'login', {
            login: login,
            senha: senha
        }, { headers: this.headers })
    },
    uri: function(url) {
        if (!url)
            url = ''
        return this.urlBase + this.resource + '/' + url
    },
    findAll: function() {
        return axios.get(this.uri(), { headers: this.headers })
    },
    findOne: function(id) {
        return axios.get(this.uri(id), { headers: this.headers })
    },
    save: function(body) {
        return axios.post(this.uri(), body, { headers: this.headers })
    },
    edit: function(body) {
        return axios.put(this.uri(body._id), body, { headers: this.headers })
    },
    remove: function(id) {
        return axios.delete(this.uri(id), { headers: this.headers })
    }
}, HttpRequest.prototype)

const http = new HttpRequest()