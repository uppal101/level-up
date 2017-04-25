process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const supertest = require('supertest');
const knex = require('../knex');
const app = require('../app');

beforeEach((done) => {
  knex.migrate.latest()
  .then(() => knex.seed.run())
  .then(() => {
    done();
  })
  .catch((err) => {
    done(err);
  });
});

afterEach((done) => {
  knex.migrate.rollback()
  .then(() => done())
  .catch((err) => {
    done(err);
  });
});

after(() => {
  knex.destroy();
});

describe('GET /campuses/', () => {
  it('should respond with all campuses', (done) => {
    supertest(app)
    .get('/api/campuses/')
    .set('Accept', 'application/json')
    .expect(locations => locations.body.forEach((location) => {
      delete location.created_at;
      delete location.updated_at;
    }))
    .expect(200, [
      {
        id: 1,
        location: 'San Francisco',
      }, {
        id: 2,
        location: 'Austin',
      }, {
        id: 3,
        location: 'Boulder',
      }, {
        id: 4,
        location: 'Denver-Platte',
      }, {
        id: 5,
        location: 'Denver-Golden Triangle',
      }, {
        id: 6,
        location: 'New York',
      }, {
        id: 7,
        location: 'Phoenix',
      }, {
        id: 8,
        location: 'Seattle',
      }, {
        id: 9,
        location: 'All Campuses',
      },
    ], done);
  });
});

describe('POST /campuses/', () => {
  it('allows authorized user to add a campus in the database', (done) => {
    supertest(app)
    .post('/api/campuses/')
    .set('Accept', 'application/json')
    .send({
      location: 'Los Angeles',
    })
    .expect()
    .expect(200, {
      location: 'Los Angeles',
      id: 10,
    }, done);
  });
  it('should respond with 400 when authorized user does not send a location', (done) => {
    supertest(app)
      .post('/api/campuses/')
      .set('Accept', 'application/json')
      .send({

      })
      .expect(400, JSON.stringify({
        code: 400,
        message: 'Please enter a location',
      }, done));
  });
});

describe('DELETE /campuses/:id', () => {
  it('should allow authorized user to delete a specific campus in the database', (done) => {
    supertest(app)
      .delete('/api/campuses/5')
      .set('Accept', 'application/json')
      .expect(200, {
        message: 'Campus successfully deleted',
      }, done);
  });
  it('should respond with 404 if user enters incorrect parameter', (done) => {
    supertest(app)
        .delete('/api/campuses/Denver-GoldenTriangle')
        .set('Accept', 'Application/json')
        .expect(500, done);
  });
});
