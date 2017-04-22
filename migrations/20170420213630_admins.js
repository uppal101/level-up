exports.up = (knex, Promise) => knex.schema.createTable('admins', (table) => {
  table.increments('id').primary();
  table.string('username', 'char(20)').notNullable();
  table.string('first_name', 'char(20)').notNullable();
  table.string('last_name', 'char(20)').notNullable();
  table.string('email', 'char(65)').notNullable();
  table.string('gravatar_url', 'char(65)').notNullable();
  table.integer('campus_id').notNullable().references('id').inTable('campuses');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('admins');
