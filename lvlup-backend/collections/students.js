const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const Student = require('../models/student');

const Students = LvlCollection.extend({
  model: Student,
});

module.exports = Bookshelf.collection('Students', Students);
