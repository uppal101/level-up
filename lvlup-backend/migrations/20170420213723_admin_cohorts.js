exports.up = (knex, Promise) => knex.schema.createTable('admin_cohorts', (table) => {
  table.increments('id')
  .primary();
  table.integer('admin_id')
  .notNullable()
  .references('id')
  .inTable('admins')
  .onDelete('CASCADE');
  table.integer('cohort_id')
  .notNullable()
  .references('id')
  .inTable('cohorts')
  .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('admin_cohorts');
