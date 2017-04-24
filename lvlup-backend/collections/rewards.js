const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const Reward = require('../models/reward');

const Rewards = LvlCollection.extend({
  model: Reward,
});

module.exports = Bookshelf.collection('Rewards', Rewards);
