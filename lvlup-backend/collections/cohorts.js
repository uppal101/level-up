const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const Cohort = require('../models/cohort');

const Cohorts = LvlCollection.extend({
  model: Cohort,
});

module.exports = Bookshelf.collection('Cohorts', Cohorts);
