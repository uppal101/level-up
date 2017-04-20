const Bookshelf = require('../bookshelf');
require('./challenge');
require('./student');

const ChallengeSubmission = Bookshelf.Model.extend({
  tableName: 'challenge_submissions',
  hasTimestamps: true,

  challenge() {
    return this.belongsTo('Challenge');
  },
  student() {
    return this.belongsTo('Student');
  },
});

module.exports = Bookshelf.model('ChallengeSubmission', ChallengeSubmission);
