exports.up = (knex, Promise) => knex.schema.createTable('cohorts', (table) => {
  table.increments('id')
  .primary();
  table.string('name', 'varchar(6)')
  .notNullable();
  table.string('type', 'varchar(3)')
  .notNullable();
  table.date('q1_start_date')
  .notNullable();
  table.date('q2_start_date')
  .notNullable();
  table.date('q3_start_date')
  .notNullable();
  table.date('q4_start_date')
  .notNullable();
  table.date('graduation_date')
  .notNullable();
  table.integer('campus_id')
  .notNullable()
  .references('id')
  .inTable('campuses')
  .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('cohorts');
