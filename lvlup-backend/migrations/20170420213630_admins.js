exports.up = (knex, Promise) => knex.schema.createTable('admins', (table) => {
  table.increments('id')
  .primary();
  table.string('username', 'varchar(20)')
  .notNullable();
  table.string('name', 'varchar(20)')
  .notNullable();
  table.string('email', 'varchar(65)')
  .notNullable()
  .unique();
  table.string('hashed_password', 'char(60)')
  .notNullable();
  table.string('gravatar_url', 'varchar(65)');
  table.integer('campus_id')
  .notNullable()
  .references('id')
  .inTable('campuses')
  .onDelete('CASCADE');
  table.boolean('confirmed');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('admins');
