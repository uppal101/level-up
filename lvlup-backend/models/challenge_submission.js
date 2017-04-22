const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
require('./challenge');
require('./student');

const ChallengeSubmission = LvlModel.extend({
  tableName: 'challenge_submissions',
  hasTimestamps: true,

  challenge() {
    return this.belongsTo('Challenge');
  },
  student() {
    return this.belongsTo('Student');
  },
});

const ChallengeSubmissions = LvlCollection.extend({
  model: ChallengeSubmission,
});

module.exports = {
  ChallengeSubmission: Bookshelf.model('ChallengeSubmission', ChallengeSubmission),
  ChallengeSubmissions: Bookshelf.collection('ChallengeSubmissions', ChallengeSubmissions),
};
