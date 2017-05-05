const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./student');
require('./campus');
require('./admin');
require('./admin_cohort');
require('./challenge_submission');
require('./reward_request');

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
  challengeSubmissions() {
    return this.hasMany('ChallengeSubmission');
  },
  rewardRequests() {
    return this.hasMany('RewardRequest');
  },
});

module.exports = Bookshelf.model('Cohort', Cohort);
