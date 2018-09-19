'use strict'
const app = require('../src/app')
const http = require('http')
const debug = require('debug')('sape:server')

const port = normalizePort( process.env.PORT || '3000' )

app.set('port',port)

const server = http.createServer(app)

server.listen(port, () => { console.log('Servidor escutando na porta: ' + port) })
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(value) {
     const port = parseInt(value, 10)

     if(isNaN(port)) return value
     if(port > 0) return port

     return false 
}

function onError(error) {
     if( error.syscall !== 'listen')
          throw error
     
     const bind = 
          typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port
     
          switch (error.code) {
               case 'EACCES' :
                    console.error(bind + 'requer privilégios elevados.')
                    process.exit(1)
                    break
               case 'EADDRINUSE':
                    console.error(bind + ' já está em uso.')
                    process.exit(1)
                    break
               default:
                    throw error
          }

}

function onListening() {
     const addr = server.address()
     const bind = 
          typeof addr === 'string' ? 'pipe ' + add : 'pipe' + addr.port
     debug('Listening on ' + bind)
}