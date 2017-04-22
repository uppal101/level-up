exports.up = (knex, Promise) => knex.schema.createTable('admins', (table) => {
  table.increments('id')
  .primary();
  table.string('username', 'varchar(20)')
  .notNullable();
  table.string('first_name', 'varchar(20)')
  .notNullable();
  table.string('last_name', 'varchar(20)')
  .notNullable();
  table.string('email', 'varchar(65)')
  .notNullable();
  table.string('gravatar_url', 'varchar(65)')
  .notNullable();
  table.integer('campus_id')
  .notNullable()
  .references('id')
  .inTable('campuses')
  .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('admins');
