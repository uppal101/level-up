const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

const Recruiter = LvlModel.extend({
  tableName: 'recruiter',
  hasTimestamps: true,
});

module.exports = Bookshelf.model('Recruiter', Recruiter);
