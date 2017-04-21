const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
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

const Cohorts = LvlCollection.extend({
  model: Cohort,
});

module.exports = {
  Cohort: Bookshelf.model('Cohort', Cohort),
  Cohorts: Bookshelf.collection('Cohorts', Cohorts),
};
