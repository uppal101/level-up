const Bookshelf = require('../bookshelf');
require('./campus');
require('./category');
require('./reward_request');

const Reward = Bookshelf.Model.extend({
  tableName: 'rewards',
  hasTimestamps: true,

  campuses: function() {
    return this.belongsToMany('Campus');
  },
  category: function() {
    return this.belongsTo('Category');
  }
  reward_requests: function() {
    return this.hasMany('RewardRequests')
  }
});

module.exports = Bookshelf.model('Reward', Reward);
