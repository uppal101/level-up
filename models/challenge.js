const Bookshelf = require('../bookshelf');
require('./category');
require('./campus');
require('./challenge_submission');

const Challenge = Bookshelf.Model.extend({
  tableName: 'challenges',
  hasTimestamps: true,

  category() {
    return this.belongsTo('Category');
  },
  campuses() {
    return this.belongsToMany('Campus');
  },
  challenge_submissions() {
    return this.hasMany('ChallengeSubmission');
  },
});

module.exports = Bookshelf.model('Challenge', Challenge);
