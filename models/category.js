const Bookshelf = require('../bookshelf');
require('./challenge');
require('./reward');

const Category = Bookshelf.Model.extend({
  tableName: 'categories',
  hasTimestamps: true,

  challenges: function() {
    return this.hasMany('Challenge');
  },
  rewards: function() {
    return this.hasMany('Reward');
  },
});

module.exports = Bookshelf.model('Category', Category);
