const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./challenge');
require('./student');
require('./category');

const ChallengeSubmission = LvlModel.extend({
  tableName: 'challenge_submissions',
  hasTimestamps: true,

  challenge() {
    return this.belongsTo('Challenge');
  },
  student() {
    return this.belongsTo('Student');
  },
  category() {
    return this.belongsTo('Category');
  },
});

module.exports = Bookshelf.model('ChallengeSubmission', ChallengeSubmission);
