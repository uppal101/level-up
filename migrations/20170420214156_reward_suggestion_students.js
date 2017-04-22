exports.up = (knex, Promise) => knex.schema.createTable('reward_suggestions_students', (table) => {
  table.increments('id')
  .primary();
  table.integer('reward_suggestions_id')
  .notNullable()
  .references('id')
  .inTable('reward_suggestions')
  .onDelete('cascade');
  table.integer('voters')
  .notNullable()
  .references('id')
  .inTable('students')
  .onDelete('cascade');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('reward_suggestions_students');
