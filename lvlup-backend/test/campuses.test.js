'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const supertest = require('supertest');
const knex = require('../knex');
const app = require('../app');

before((done) => {
  knex.migrate.rollback()
  .then(function(){
    return knex.migrate.latest()
  })
  .then(() => {
    done();
  })
  .catch((err) => {
    done(err);
  });
});

beforeEach((done) => {
  knex.seed.run()
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
});
