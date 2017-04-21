const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
require('./cohort');
require('./admin_cohort');
require('./campus');

const Admin = LvlModel.extend({
  tableName: 'admins',
  hasTimestamps: true,

  cohorts() {
    return this.belongsToMany('Cohort').through('AdminCohort');
  },
  campus() {
    return this.belongsTo('Campus');
  },
});

const Admins = LvlCollection.extend({
  model: Admin,
});

module.exports = {
  Admin: Bookshelf.model('Admin', Admin),
  Admins: Bookshelf.collection('Admins', Admins),
};
