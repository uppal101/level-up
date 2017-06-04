const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const Recruiter = require('../models/recruiter');

const Recruiters = LvlCollection.extend({
  model: Recruiter,
});

module.exports = Bookshelf.collection('Recruiters', Recruiters);
