const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
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
  challenge_submissions() {
    return this.hasMany('ChallengeSubmission');
  },
});

const Challenges = LvlCollection.extend({
  model: Challenge,
});

module.exports = {
  Challenge: Bookshelf.model('Challenge', Challenge),
  Challenges: Bookshelf.collection('Challenges', Challenges),
};
