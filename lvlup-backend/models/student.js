const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./cohort');
require('./reward_suggestion_student');
require('./challenge_submission');
require('./reward_request');

const Student = LvlModel.extend({
  tableName: 'students',
  hasTimestamps: true,

  cohort() {
    return this.belongsTo('Cohort');
  },
  rewardSuggestionStudents() {
    return this.belongsToMany('RewardSuggestions').through('RewardSuggestionStudent');
  },
  challegeSubmissions() {
    return this.hasMany('ChallengeSubmission');
  },
  rewardRequests() {
    return this.hasMany('RewardRequest');
  },
});

module.exports = Bookshelf.model('Student', Student);
