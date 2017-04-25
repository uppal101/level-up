process.env.NODE_ENV = 'test';

const app = require('../app');
const supertest = require('supertest');
const knex = require('../knex');

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

describe('GET students', () => {
  it('responds with JSON', (done) => {
    supertest(app)
    .get('/api/students')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with all students in the database', (done) => {
    supertest(app)
    .get('/api/students')
    .set('Accept', 'application/json')
    .expect(students => students.body.forEach((student) => {
      delete student.created_at;
      delete student.updated_at;
    }))
    .expect(200, [
      {
        id: 1,
        name: 'Thomas Stang',
        email: 'stang.tk@gmail.com',
        github_user_name: 'tkstang',
        photo_url: null,
        gravatar_url: null,
        cohort_id: 1,
        username: 'algorythmist',
      },
      {
        id: 2,
        name: 'Sanjeet Uppal',
        email: 'sanjeet.uppal92@gmail.com',
        github_user_name: 'uppal101',
        photo_url: null,
        gravatar_url: null,
        cohort_id: 1,
        username: 'leveluppal',
      },
      {
        id: 3,
        name: 'Daniel Gardner',
        email: 'daniel.marc.gardner@gmail.com',
        github_user_name: 'danielmarcgardner',
        photo_url: 'https://avatars2.githubusercontent.com/u/22782154?v=3',
        gravatar_url: null,
        cohort_id: 1,
        username: 'dan_m_g',
      },
    ], done);
  });
});

describe('GET students/:id', () => {
  it('responds with JSON', (done) => {
    supertest(app)
    .get('/api/students/1')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with a single student specificied by id', (done) => {
    supertest(app)
    .get('/api/students/1')
    .set('Accept', 'application/json')
    .expect((student) => {
      delete student.body.created_at;
      delete student.body.updated_at;
    })
    .expect(200,
      {
        id: 1,
        name: 'Thomas Stang',
        email: 'stang.tk@gmail.com',
        github_user_name: 'tkstang',
        photo_url: null,
        gravatar_url: null,
        cohort_id: 1,
        username: 'algorythmist',
      }, done);
  });
});
