exports.up = (knex, Promise) => knex.schema.createTable('reward_suggestions_students', (table) => {
  table.increments('id')
  .primary();
  table.integer('reward_suggestions_id')
  .notNullable()
  .references('id')
  .inTable('reward_suggestions')
  .onDelete('CASCADE');
  table.integer('voters')
  .notNullable()
  .references('id')
  .inTable('students')
  .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('reward_suggestions_students');
