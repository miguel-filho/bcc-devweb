var request = require('request');

module.exports = (f) => {
  request('http://www.horacerta.com.br/index.php?city=moscou', function (e, r, b) {
    f(b);
  });
}
