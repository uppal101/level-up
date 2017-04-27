const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./challenge');
require('./student');

const ChallengeSubmissionPts = LvlModel.extend({
  tableName: 'challenge_submissions',
  hasTimestamps: true,
  hidden: ['submission_message', 'campus_id', 'category_id', 'created_at', 'submission_attachment_1', 'submission_attachment_2', 'submission_attachment_3', 'submission_attachment_4', 'submission_attachment_5', 'submission_image_link_1', 'submission_image_link_2', 'submission_image_link_3', 'submission_image_link_4', 'submission_image_link_5', 'evaluation_message'],

  challenge() {
    return this.belongsTo('Challenge');
  },
  student() {
    return this.belongsTo('Student');
  },
});

module.exports = Bookshelf.model('ChallengeSubmissionPts', ChallengeSubmissionPts);
