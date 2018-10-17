const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/oficina', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    require('./servico')
    let Usuario = require('./usuario')
    Usuario.find().exec()
        .then(function (usuarios) {
            if (!usuarios.length)
                return Usuario.create({
                    nome: "Administrador",
                    login: "admin",
                    senha: 'admin'
                })
        })
});