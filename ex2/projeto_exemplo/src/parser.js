var get = require('./get.js')
const cheerio = require('cheerio')

module.exports = (f) => {
  get((html) => {
    const $ = cheerio.load(html)
    const data = $('input[name="mostrador"]').attr('value')
    f(data)
    console.log(data);
  })
}
