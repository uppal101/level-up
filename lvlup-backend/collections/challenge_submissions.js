const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const ChallengeSubmission = require('../models/challenge_submission');

const ChallengeSubmissions = LvlCollection.extend({
  model: ChallengeSubmission,
});

module.exports = Bookshelf.collection('ChallengeSubmissions', ChallengeSubmissions);
