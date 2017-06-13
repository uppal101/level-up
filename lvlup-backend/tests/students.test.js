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
  it('responds with 401 status if user is not logged in', (done) => {
    supertest(app)
    .get('/api/students')
    .expect('Content-Type', /plain/)
    .expect(401, 'Unauthorize', done);
  });
  it('responds with JSON if authorized', (done) => {
    supertest(app)
    .get('/api/students')
    .set('Cookie', 'authToken=adminToken')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with all students in the database', (done) => {
    supertest(app)
    .get('/api/students')
    .set('Cookie', 'authToken=adminToken')
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
        photo_url: 'https://avatars.githubusercontent.com/tkstang',
        gravatar_url: null,
        cohort_id: 1,
        username: 'algorythmist',
      },
      {
        id: 2,
        name: 'Sanjeet Uppal',
        email: 'sanjeet.uppal92@gmail.com',
        github_user_name: 'uppal101',
        photo_url: 'https://avatars.githubusercontent.com/uppal101',
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
      {
        id: 4,
        name: 'lvl^ - Demo',
        email: 'lvlupteam@lvlup.tech',
        github_user_name: 'lvlupteam',
        photo_url: 'https://avatars3.githubusercontent.com/u/29073312?v=3',
        gravatar_url: null,
        cohort_id: 1,
        username: 'lvl^-Demo',
      },
    ], done);
  });
});

describe('GET students/:id', () => {
  it('responds with 401 status if user is not logged in', (done) => {
    supertest(app)
    .get('/api/students')
    .expect('Content-Type', /plain/)
    .expect(401, 'Unauthorize', done);
  });
  it('responds with JSON', (done) => {
    supertest(app)
    .get('/api/students/1')
    .set('Cookie', 'authToken=adminToken')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with a single student specificied by id', (done) => {
    supertest(app)
    .get('/api/students/1')
    .set('Cookie', 'authToken=adminToken')
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
        photo_url: 'https://avatars.githubusercontent.com/tkstang',
        gravatar_url: null,
        cohort_id: 1,
        username: 'algorythmist',
      }, done);
  });
});

describe('DELETE students/:id', () => {
  it('should respond with success message if student is deleted', (done) => {
    supertest(app)
    .delete('/api/students/1')
    .set('Accept', 'application/json')
    .set('Cookie', 'authToken=adminToken')
    .expect(200, { message: 'Student successfully deleted' }, done);
  });
  it('should respond with 500 if invalid parameter is given', (done) => {
    supertest(app)
    .delete('/api/students/6')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'Application/json')
    .expect(500, done);
  });
});

describe('PUT students/:id', () => {
  it('responds with JSON', (done) => {
    supertest(app)
    .put('/api/students/1')
    .set('Cookie', 'authToken=adminToken')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with updated student', (done) => {
    supertest(app)
    .put('/api/students/1')
    .set('Accept', 'application/json')
    .set('Cookie', 'authToken=adminToken')
    .send({ username: 'tommyboy' })
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
        photo_url: 'https://avatars.githubusercontent.com/tkstang',
        gravatar_url: null,
        cohort_id: 1,
        username: 'tommyboy',
      }, done);
  });
});

describe('GET students/campuses/:campus_id', () => {
  it('responds with JSON', (done) => {
    supertest(app)
    .get('/api/students/campuses/1')
    .set('Cookie', 'authToken=adminToken')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with all students in the database for a given campus', (done) => {
    supertest(app)
    .get('/api/students/campuses/1')
    .set('Accept', 'application/json')
    .set('Cookie', 'authToken=adminToken')
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
        photo_url: 'https://avatars.githubusercontent.com/tkstang',
        gravatar_url: null,
        cohort_id: 1,
        username: 'algorythmist',
      },
      {
        id: 2,
        name: 'Sanjeet Uppal',
        email: 'sanjeet.uppal92@gmail.com',
        github_user_name: 'uppal101',
        photo_url: 'https://avatars.githubusercontent.com/uppal101',
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
      {
        id: 4,
        name: 'lvl^ - Demo',
        email: 'lvlupteam@lvlup.tech',
        github_user_name: 'lvlupteam',
        photo_url: 'https://avatars3.githubusercontent.com/u/29073312?v=3',
        gravatar_url: null,
        cohort_id: 1,
        username: 'lvl^-Demo',
      },
    ], done);
  });
});

describe('GET students/cohorts/:cohort_id', () => {
  it('responds with JSON', (done) => {
    supertest(app)
    .get('/api/students/cohorts/1')
    .set('Cookie', 'authToken=adminToken')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with all students in the database for a given cohort', (done) => {
    supertest(app)
    .get('/api/students/cohorts/1')
    .set('Accept', 'application/json')
    .set('Cookie', 'authToken=adminToken')
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
        photo_url: 'https://avatars.githubusercontent.com/tkstang',
        gravatar_url: null,
        cohort_id: 1,
        username: 'algorythmist',
      },
      {
        id: 2,
        name: 'Sanjeet Uppal',
        email: 'sanjeet.uppal92@gmail.com',
        github_user_name: 'uppal101',
        photo_url: 'https://avatars.githubusercontent.com/uppal101',
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
      {
        id: 4,
        name: 'lvl^ - Demo',
        email: 'lvlupteam@lvlup.tech',
        github_user_name: 'lvlupteam',
        photo_url: 'https://avatars3.githubusercontent.com/u/29073312?v=3',
        gravatar_url: null,
        cohort_id: 1,
        username: 'lvl^-Demo',
      },
    ], done);
  });
});
