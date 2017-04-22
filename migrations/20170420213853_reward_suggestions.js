exports.up = (knex, Promise) => knex.schema.createTable('reward_suggestions', (table) => {
  table.increments('id')
  .primary();
  table.string('title', 'varchar(64)')
  .notNullable();
  table.string('description', 'varchar(256)')
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
