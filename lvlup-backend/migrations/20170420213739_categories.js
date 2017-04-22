
exports.up = (knex, Promise) => knex.schema.createTable('categories', (table) => {
  table.increments('id')
  .primary();
  table.string('category', 'varchar(20)')
  .notNullable();
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('categories');
