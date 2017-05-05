const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./cohort');
require('./admin');
require('./challenge');
require('./reward');

const Campus = LvlModel.extend({
  tableName: 'campuses',
  hasTimestamps: true,

  cohorts() {
    return this.hasMany('Cohort');
  },
  admins() {
    return this.hasMany('Admin');
  },
  rewards() {
    return this.hasMany('Reward');
  },
  challenges() {
    return this.hasMany('Challenge');
  },
});

module.exports = Bookshelf.model('Campus', Campus);
