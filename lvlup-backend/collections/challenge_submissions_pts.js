const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const ChallengeSubmissionPts = require('../models/challenge_submission_pts');

const ChallengeSubmissionsPts = LvlCollection.extend({
  model: ChallengeSubmissionPts,
});

module.exports = Bookshelf.collection('ChallengeSubmissionsPts', ChallengeSubmissionsPts);
