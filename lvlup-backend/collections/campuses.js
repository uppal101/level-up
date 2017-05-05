const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const Campus = require('../models/campus');

const Campuses = LvlCollection.extend({
  model: Campus,
});

module.exports = Bookshelf.collection('Campuses', Campuses);
