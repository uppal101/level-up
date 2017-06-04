
exports.up = (knex, Promise) => knex.schema.createTable('recruiter', (table) => {
  table.increments('id')
  .primary();
  table.string('email', 'varchar(65)')
  .notNullable();
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('recruiter');
