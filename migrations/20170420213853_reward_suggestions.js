exports.up = (knex, Promise) => knex.schema.createTable('rewards_suggestions', (table) => {
  table.increments('id')
  .primary();

  table.string('title', 'char(64)')
  .notNullable();

  table.string('description', 'char(256)')
  .notNullable();

  table.integer('votes');

  table.integer('categories_id')
  .notNullable()
  .references('id')
  .inTable('categories')
  .onDelete('cascade');

  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('reward_suggestions');
