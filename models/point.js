const Bookshelf = require('../bookshelf');
require('./student');

const Point = Bookshelf.Model.extend({
  tableName: 'points',
  hasTimestamps: true,

  students() {
    return this.belongsToMany('Student');
  },
});

module.exports = Bookshelf.model('Point', Point);
