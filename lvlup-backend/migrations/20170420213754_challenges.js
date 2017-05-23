exports.up = (knex, Promise) => knex.schema.createTable('challenges', (table) => {
  table.increments('id')
  .primary();
  table.string('name', 'varchar(65)')
  .notNullable();
  table.integer('point_value')
  .notNullable();
  table.string('description')
  .notNullable();
  table.integer('campus_id')
  .notNullable()
  .references('id')
  .inTable('campuses')
  .onDelete('CASCADE');
  table.integer('category_id')
  .notNullable()
  .references('id')
  .inTable('categories')
  .onDelete('CASCADE');
  table.string('requirements_1');
  table.string('requirements_2');
  table.string('requirements_3');
  table.string('requirements_4');
  table.string('requirements_5');
  table.string('active');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('challenges');
