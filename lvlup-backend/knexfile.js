module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/lvlup_dev',
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/lvlup_test',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
