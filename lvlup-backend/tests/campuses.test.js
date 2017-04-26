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

describe('GET /campuses/', () => {
  it('should respond with all campuses', (done) => {
    supertest(app)
    .get('/campuses/')
    .set('Accept', 'application/json')
    .expect((campuses) => {
      delete campuses.body.id;
      delete campuses.body.created_at;
      delete campuses.body.updated_at;
    })
    .expect(200, {
      locations: [
        {
          location: 'San Francisco',
        }, {
          location: 'Austin',
        }, {
          location: 'Boulder',
        }, {
          location: 'Denver-Platte',
        }, {
          location: 'Denver-Golden Triangle',
        }, {
          location: 'New York',
        }, {
          location: 'Phoenix',
        }, {
          location: 'Seattle',
        }, {
          location: 'All Campuses',
        },
      ],
    }, done);
  });
});

describe('POST /campuses/', () => {
  it('allows authorized user to add a campus in the database', (done) => {
    supertest(app)
    .post('/campuses/')
    .set('Accept', 'application/json')
    .send({
      location: 'Los Angeles',
    })
    .expect((campuses) => {
      delete campuses.body.created_at;
      delete campuses.body.updated_at;
    })
    .expect(200,
      {
        location: 'Los Angeles',
        id: 10,
      }, done);
  });
  it('should respond with 400 when authorized user does not send a location', (done) => {
    supertest(app)
      .post('/campuses/')
      .set('Accept', 'application/json')
      .send({

      })
      .expect((campuses) => {
        delete campuses.body.created_at;
        delete campuses.body.updated_at;
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
      .delete('/campuses/5')
      .set('Accept', 'application/json')
      .expect(200,
      {
        message: 'Campus successfully deleted',
      }, done);
  });
  it('should respond with 404 if user enters incorrect parameter', (done) => {
    supertest(app)
        .get('/campuses/Denver-GoldenTriangle')
        .set('Accept', 'Application/json')
        .expect(404, JSON.stringify({ code: 404, message: 'Please enter valid information' }, done));
  });
});
