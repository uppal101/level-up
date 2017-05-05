const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const Challenge = require('../models/challenge');

const Challenges = LvlCollection.extend({
  model: Challenge,
});

module.exports = Bookshelf.collection('Challenges', Challenges);
