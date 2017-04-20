const Bookshelf = require('../bookshelf');
require('./campus');
require('./category');
require('./reward_request');

const Reward = Bookshelf.Model.extend({
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

module.exports = Bookshelf.model('Reward', Reward);
