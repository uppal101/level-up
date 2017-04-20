const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');

require('./cohort');
require('./admin');

const AdminCohort = LvlModel.extend({
  tableName: 'admin_cohorts',
  hasTimestamps: true,

  cohorts() {
    return this.hasMany('Cohort');
  },
  admin() {
    return this.hasMany('Admin');
  },
});

const AdminCohorts = LvlCollection.extend({
  model: AdminCohort,
});

module.exports = {
  AdminCohort: Bookshelf.model('AdminCohort', AdminCohort),
  AdminCohorts: Bookshelf.collection('AdminCohorts', AdminCohorts),
};
