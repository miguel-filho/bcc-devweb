'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()
const router = express.Router()

// Conectando ao banco
// mongoose.connect('Connection String')
// mongoose.connect('mongodb://root:1binbash@ds018248.mlab.com:18248/rcapp', { useNewUrlParser: true })

mongoose.connect(config.connectionString, { useNewUrlParser: true })
mongoose.set('useCreateIndex', true)

// Carregando Models
// const User = require('./models/user')

// Importando de rotas
const index = require('./routes/index-routes')
const userRoutes = require('./routes/user-routes')
const institutionRoutes = require('./routes/institution-routes')
const campusRoutes = require('./routes/campus-routes')
const eventosRoutes = require('./routes/event-routes')
const paperRoutes = require('./routes/works-routes')
const authorRoutes = require('./routes/author-routes')
const comissinRoutes = require('./routes/comission-routes')
const evaluationRoutes = require('./routes/evaluation-routes')
 

app.use(bodyParser.json({
     limit: '5mb'
}))
app.use(bodyParser.urlencoded({ 
     extended: false 
}))

app.use(function(req, res, next){
     res.header('Access-Control-Allow-Origin', '*')
     res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept, x-access-tokekn')
     res.header('Access-Control-Allow-Origin', 'GET, POS, PUT, PATCH, DELETE, OPTIONS')
     next()
})


app.use('/', index)
app.use('/users', userRoutes)
app.use('/institution', institutionRoutes)
app.use('/campus', campusRoutes)
app.use('/events', eventosRoutes)
app.use('/works', paperRoutes)
app.use('/authors',authorRoutes)
app.use('/comissions', comissinRoutes)
app.use('/evaluations', evaluationRoutes)
module.exports = app