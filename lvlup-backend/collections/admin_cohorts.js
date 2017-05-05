const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const AdminCohort = require('../models/admin_cohort');

const AdminCohorts = LvlCollection.extend({
  model: AdminCohort,
});

module.exports = Bookshelf.collection('AdminCohorts', AdminCohorts);
