exports.up = (knex, Promise) => knex.schema.createTable('reward_suggestions', (table) => {
  table.increments('id')
  .primary();
  table.string('title', 'varchar(65)')
  .notNullable();
  table.string('description')
  .notNullable();
  table.integer('votes');
  table.integer('category_id')
  .notNullable()
  .references('id')
  .inTable('categories')
  .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('reward_suggestions');
