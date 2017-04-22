exports.up = (knex, Promise) => knex.schema.createTable('challenges', (table) => {
  table.increments('id')
  .primary();
  table.string('name', 'varchar(65)')
  .notNullable();
  table.integer('point_value')
  .notNullable();
  table.string('description', 'varchar(255)')
  .notNullable();
  table.string('requirements_1', 'varchar(255)');
  table.string('requirements_2', 'varchar(255)');
  table.string('requirements_3', 'varchar(255)');
  table.string('requirements_4', 'varchar(255)');
  table.string('requirements_5', 'varchar(255)');
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('challenges');
