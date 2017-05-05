const bookshelf = require('../bookshelf');
const ModelBase = require('bookshelf-modelbase')(bookshelf);

bookshelf.plugin('registry');
bookshelf.plugin('visibility');

const LvlModel = ModelBase.extend({
});

module.exports = LvlModel;
