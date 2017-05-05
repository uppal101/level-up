const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./challenge');
require('./reward');
require('./challenge_submission');
require('./reward_request');

const Category = LvlModel.extend({
  tableName: 'categories',
  hasTimestamps: true,
  hidden: ['created_at', 'updated_at'],

  challenges() {
    return this.hasMany('Challenge');
  },
  rewards() {
    return this.hasMany('Reward');
  },
  challengeSubmissions() {
    return this.hasMany('ChallengeSubmission');
  },
  rewardRequests() {
    return this.hasMany('RewardRequest');
  },
});

module.exports = Bookshelf.model('Category', Category);
