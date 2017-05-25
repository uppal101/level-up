const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./cohort');
require('./reward_suggestion_student');
require('./challenge_submission');
require('./challenge_submission_pts');
require('./reward_request');

const Student = LvlModel.extend({
  tableName: 'students',
  hasTimestamps: true,
  hidden: ['github_id'],

  cohort() {
    return this.belongsTo('Cohort');
  },
  rewardSuggestionStudents() {
    return this.belongsToMany('RewardSuggestions').through('RewardSuggestionStudent');
  },
  challengeSubmissions() {
    return this.hasMany('ChallengeSubmission');
  },
  challengeSubmissionsPts() {
    return this.hasMany('ChallengeSubmissionPts');
  },
  rewardRequests() {
    return this.hasMany('RewardRequest');
  },
});

module.exports = Bookshelf.model('Student', Student);
