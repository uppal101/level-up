exports.up = (knex, Promise) => knex.schema.createTable('challenge_submissions', (table) => {
  table.increments('id')
  .primary();
  table.integer('student_id')
  .notNullable()
  .references('id')
  .inTable('students')
  .onDelete('CASCADE');
  table.integer('challenges_id')
  .notNullable()
  .references('id')
  .inTable('challenges');
  table.string('submission_message', 'varchar(512)');
  table.string('evaluation_message', 'varchar(512)');
  table.string('submission_status', 'varchar(65)');
  table.string('submission_attachment_1', 'varchar(65)');
  table.string('submission_attachment_2', 'varchar(65)');
  table.string('submission_attachment_3', 'varchar(65)');
  table.string('submission_image_link_1', 'varchar(65)');
  table.string('submission_image_link_2', 'varchar(65)');
  table.string('submission_image_link_3', 'varchar(65)');
  table.timestamp('updated_at')
  .notNullable()
  .defaultTo(knex.fn.now());
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('challenge_submissions');
