const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./student');
require('./campus');
require('./admin');
require('./admin_cohort');

const Cohort = LvlModel.extend({
  tableName: 'cohorts',
  hasTimestamps: true,

  students() {
    return this.hasMany('Student');
  },
  campus() {
    return this.belongsTo('Campus');
  },
  admins() {
    return this.belongsToMany('Admin').through('AdminCohort');
  },
});

module.exports = Bookshelf.model('Cohort', Cohort);