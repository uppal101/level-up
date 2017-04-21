const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
require('./student');
require('./reward');

const RewardRequest = LvlModel.extend({
  tableName: 'reward_requests',
  hasTimestamps: true,

  student() {
    return this.belongsTo('Student');
  },
  reward() {
    return this.belongsTo('Reward');
  },
});

const RewardRequests = LvlCollection.extend({
  model: RewardRequest,
});

module.exports = {
  RewardRequest: Bookshelf.model('RewardRequest', RewardRequest),
  RewardRequests: Bookshelf.collection('RewardRequests', RewardRequests),
};
