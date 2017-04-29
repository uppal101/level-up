const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./category');
require('./campus');
require('./challenge_submission');

const Challenge = LvlModel.extend({
  tableName: 'challenges',
  hasTimestamps: true,

  category() {
    return this.belongsTo('Category');
  },
  campuses() {
    return this.belongsToMany('Campus');
  },
  challengeSubmissions() {
    return this.hasMany('ChallengeSubmission');
  },
});

module.exports = Bookshelf.model('Challenge', Challenge);
