var Scrabble = require('../lib/scrabble');
var scrabble = new Scrabble();

var ScrabbleController = {
  getChart: function (request, response) {
    var locals = {}

    locals.chart = scrabble.letterscores

    response.render('chart', locals)
  }
}
module.exports = ScrabbleController
