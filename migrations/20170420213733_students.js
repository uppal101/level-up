
exports.up = (knex, Promise) => knex.schema.createTable('students', (table) => {
  table.increments('id')
  .primary();
  table.string('first_name', 'varchar(20)')
  .notNullable();
  table.string('last_name', 'varchar(20)')
  .notNullable();
  table.string('email', 'varchar(65)')
  .notNullable();
  table.string('github_user_name', 'varchar(65)')
  .notNullable();
  table.string('photo_url', 'varchar(65)');
  table.string('gravatar_url', 'varchar(65)');
  table.integer('cohort_id')
  .notNullable()
  .references('id')
  .inTable('cohorts')
  .onDelete('CASCADE');
  table.string('username', 'varchar(65)')
  .notNullable();
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('students');
