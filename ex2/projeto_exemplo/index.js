const parser = require('./src/parser')

setInterval(() => {
  parser((data) => process.stdout.write(data + '\r'))
}, 1000)
