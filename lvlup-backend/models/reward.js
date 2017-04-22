const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
require('./campus');
require('./category');
require('./reward_request');

const Reward = LvlModel.extend({
  tableName: 'rewards',
  hasTimestamps: true,

  campuses() {
    return this.belongsToMany('Campus');
  },
  category() {
    return this.belongsTo('Category');
  },
  rewardRequests() {
    return this.hasMany('RewardRequests');
  },
});

const Rewards = LvlCollection.extend({
  model: Reward,
});

module.exports = {
  Reward: Bookshelf.model('Reward', Reward),
  Rewards: Bookshelf.collection('Rewards', Rewards),
};
