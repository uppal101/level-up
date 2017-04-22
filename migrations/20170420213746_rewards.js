exports.up = (knex, Promise) => knex.schema.createTable('rewards', (table) => {
  table.increments('id')
  .primary();
  table.string('name', 'varchar(65)')
  .notNullable();
  table.integer('point_cost')
  .notNullable();
  table.string('description', 'varchar(255)')
  .notNullable();
  table.integer('campus_id')
  .notNullable()
  .references('id')
  .inTable('campus')
  .onDelete('CASCADE');
  table.integer('categories_id')
  .notNullable()
  .references('id')
  .inTable('categories')
  .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('rewards');
