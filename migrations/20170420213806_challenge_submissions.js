exports.up = (knex, Promise) => knex.schema.createTable('challenge_submissions', (table) => {
  table.increments('id')
  .primary();
  table.integer('student_id')
  .notNullable()
  .references('id')
  .inTable('students')
  .onDelete('CASCADE');
  table.integer('challenge_id')
  .notNullable()
  .references('id')
  .inTable('challenges');
  table.integer('campus_id')
  .notNullable()
  .references('id')
  .inTable('campuses')
  .onDelete('CASCADE');
  table.integer('category_id')
  .notNullable()
  .references('id')
  .inTable('categories')
  .onDelete('CASCADE');
  table.string('submission_message');
  table.string('evaluation_message');
  table.string('submission_status', 'varchar(65)');
  table.string('submission_attachment_1', 'varchar(65)');
  table.string('submission_attachment_2', 'varchar(65)');
  table.string('submission_attachment_3', 'varchar(65)');
  table.string('submission_image_link_1', 'varchar(65)');
  table.string('submission_image_link_2', 'varchar(65)');
  table.string('submission_image_link_3', 'varchar(65)');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('challenge_submissions');
