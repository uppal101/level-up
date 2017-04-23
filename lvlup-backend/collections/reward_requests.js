const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const RewardRequest = require('../models/reward_request');

const RewardRequests = LvlCollection.extend({
  model: RewardRequest,
});

module.exports = Bookshelf.collection('RewardRequests', RewardRequests);
