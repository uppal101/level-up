exports.up = (knex, Promise) => knex.schema.createTable('campuses', (table) => {
  table.increments('id')
  .primary();
  table.string('location')
  .notNullable()
  .unique();
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('campuses');
