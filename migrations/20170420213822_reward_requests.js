exports.up = (knex, Promise) => knex.schema.createTable('reward_requests', (table) => {
  table.increments('id')
  .primary();
  table.string('request_status', 'varchar(65)')
  .notNullable();
  table.integer('student_id')
  .notNullable()
  .references('id')
  .inTable('students')
  .onDelete('CASCADE');
  table.integer('rewards_id')
  .notNullable()
  .references('id')
  .inTable('rewards');
  table.timestamp('updated_at')
  .notNullable()
  .defaultTo(knex.fn.now());
  table.string('notes', 'varchar(256)');
  table.boolean('reward_used')
  .notNullable();
  table.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('reward_requests');
