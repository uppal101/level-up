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

describe('GET /submissions/cohorts/:cohort_id', () => {
  it('Should return all challenge submissions from a given campus', (done) => {
    supertest(app)
      .get('/api/submissions/cohorts/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .expect((response) => {
        for (let i = 0; i < response.body.length; i++) {
          delete response.body[i].created_at;
          delete response.body[i].updated_at;
        }
      })
      .expect(200,
      [
        {
          id: 1,
          student_id: 1,
          challenge_id: 4,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built an app that allows users to add their jacket size. It also tracks fulfillment status us to whether student has received their gSwag.',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
          challenge: {
            id: 4,
            name: 'Full-stack Side Project',
            point_value: 200,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 2,
          student_id: 3,
          challenge_id: 4,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built an app that allows users to add their jacket size. It also tracks fulfillment status us to whether student has received their gSwag.',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 4,
            name: 'Full-stack Side Project',
            point_value: 200,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 3,
          student_id: 2,
          challenge_id: 1,
          cohort_id: 1,
          category_id: 2,
          submission_message: 'Held one hour of office hours on May 6th',
          evaluation_message: null,
          submission_status: 'Pending approval',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
          challenge: {
            id: 1,
            name: 'Hold TA Hours',
            point_value: 25,
            description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
          },
        },
        {
          id: 4,
          student_id: 1,
          challenge_id: 3,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built an api that sends JSON of all ingredients in season for each month',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
          challenge: {
            id: 3,
            name: 'Back-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 5,
          student_id: 3,
          challenge_id: 3,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built an api that sends JSON of cheese by name, firmness, and animal type',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 3,
            name: 'Back-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 6,
          student_id: 2,
          challenge_id: 3,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built an api that sends JSON of individual student songs and songs that belong to a group',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
          challenge: {
            id: 3,
            name: 'Back-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 7,
          student_id: 2,
          challenge_id: 5,
          cohort_id: 1,
          category_id: 3,
          submission_message: 'Published an article on using raw SQL',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
          challenge: {
            id: 5,
            name: 'Publish Article',
            point_value: 75,
            description: 'Publish an original article on Medium with a minimum 750 word length.',
          },
        },
        {
          id: 8,
          student_id: 2,
          challenge_id: 2,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a front-end app using SF Open data API to show all movies with filming locations in SF',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
          challenge: {
            id: 2,
            name: 'Front-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 9,
          student_id: 1,
          challenge_id: 2,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a front-end app to show what cocktails require what ingredients to be made',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
          challenge: {
            id: 2,
            name: 'Front-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 10,
          student_id: 3,
          challenge_id: 2,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a front-end app using SF Open data API and Google Maps API what days and locations food trucks appear in SF',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 2,
            name: 'Front-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 11,
          student_id: 2,
          challenge_id: 5,
          cohort_id: 1,
          category_id: 3,
          submission_message: 'Published article  on how bootcamp prep courses truly prepare you for web development immersive courses',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
          challenge: {
            id: 5,
            name: 'Publish Article',
            point_value: 75,
            description: 'Publish an original article on Medium with a minimum 750 word length.',
          },
        },
        {
          id: 12,
          student_id: 1,
          challenge_id: 5,
          cohort_id: 1,
          category_id: 3,
          submission_message: 'Published article on CSS tips to create an elegant site',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
          challenge: {
            id: 5,
            name: 'Publish Article',
            point_value: 75,
            description: 'Publish an original article on Medium with a minimum 750 word length.',
          },
        },
        {
          id: 13,
          student_id: 3,
          challenge_id: 5,
          cohort_id: 1,
          category_id: 3,
          submission_message: 'Published article on a deep look at commands in the CLI',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 5,
            name: 'Publish Article',
            point_value: 75,
            description: 'Publish an original article on Medium with a minimum 750 word length.',
          },
        },
        {
          id: 14,
          student_id: 2,
          challenge_id: 1,
          cohort_id: 1,
          category_id: 2,
          submission_message: 'TA during Javascript intro course  on Jan 25th',
          evaluation_message: null,
          submission_status: 'Denied',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
          challenge: {
            id: 1,
            name: 'Hold TA Hours',
            point_value: 25,
            description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
          },
        },
        {
          id: 15,
          student_id: 1,
          challenge_id: 1,
          cohort_id: 1,
          category_id: 2,
          submission_message: 'TA during Javascript intro course  on Jan 25th',
          evaluation_message: null,
          submission_status: 'Denied',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
          challenge: {
            id: 1,
            name: 'Hold TA Hours',
            point_value: 25,
            description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
          },
        },
        {
          id: 16,
          student_id: 3,
          challenge_id: 1,
          cohort_id: 1,
          category_id: 2,
          submission_message: 'TA during Javascript intro course  on Jan 25th',
          evaluation_message: null,
          submission_status: 'Denied',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 1,
            name: 'Hold TA Hours',
            point_value: 25,
            description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
          },
        },
        {
          id: 17,
          student_id: 3,
          challenge_id: 2,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a front-end app for CheesWhiz api',
          evaluation_message: null,
          submission_status: 'Pending',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 2,
            name: 'Front-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 18,
          student_id: 1,
          challenge_id: 2,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a front-end app for supSeasonal api',
          evaluation_message: null,
          submission_status: 'Pending',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
          challenge: {
            id: 2,
            name: 'Front-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 19,
          student_id: 2,
          challenge_id: 2,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a front-end app for g42beats api',
          evaluation_message: null,
          submission_status: 'Pending',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
          challenge: {
            id: 2,
            name: 'Front-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 20,
          student_id: 3,
          challenge_id: 5,
          cohort_id: 1,
          category_id: 3,
          submission_message: 'Published article required for career services',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 5,
            name: 'Publish Article',
            point_value: 75,
            description: 'Publish an original article on Medium with a minimum 750 word length.',
          },
        },
        {
          id: 21,
          student_id: 1,
          challenge_id: 5,
          cohort_id: 1,
          category_id: 3,
          submission_message: 'Published article required for career services',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
          challenge: {
            id: 5,
            name: 'Publish Article',
            point_value: 75,
            description: 'Publish an original article on Medium with a minimum 750 word length.',
          },
        },
        {
          id: 22,
          student_id: 2,
          challenge_id: 5,
          cohort_id: 1,
          category_id: 3,
          submission_message: 'Published article required for career services',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
          challenge: {
            id: 5,
            name: 'Publish Article',
            point_value: 75,
            description: 'Publish an original article on Medium with a minimum 750 word length.',
          },
        },
        {
          id: 23,
          student_id: 1,
          challenge_id: 4,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a gamefication app for galvanize students to maxmize their experience',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
          challenge: {
            id: 4,
            name: 'Full-stack Side Project',
            point_value: 200,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 24,
          student_id: 2,
          challenge_id: 4,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a gamefication app for galvanize students to maxmize their experience',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
          challenge: {
            id: 4,
            name: 'Full-stack Side Project',
            point_value: 200,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 25,
          student_id: 3,
          challenge_id: 4,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a gamefication app for galvanize students to maxmize their experience',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 4,
            name: 'Full-stack Side Project',
            point_value: 200,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 26,
          student_id: 1,
          challenge_id: 1,
          cohort_id: 1,
          category_id: 2,
          submission_message: 'Held one hour of office hours on May 5th',
          evaluation_message: null,
          submission_status: 'Pending approval',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
          challenge: {
            id: 1,
            name: 'Hold TA Hours',
            point_value: 25,
            description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
          },
        },
        {
          id: 27,
          student_id: 3,
          challenge_id: 1,
          cohort_id: 1,
          category_id: 2,
          submission_message: 'Held one hour of office hours on May 7th',
          evaluation_message: null,
          submission_status: 'Pending approval',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 1,
            name: 'Hold TA Hours',
            point_value: 25,
            description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
          },
        },
      ], done);
  });
  it('Should return a 401 if not logged in', (done) => {
    supertest(app)
      .get('/api/submissions/cohorts/1')
      .set('Accept', 'application/json')
      .expect(401, 'You must be logged in', done);
  });
});

describe('POST /submissions', () => {
  it('Should allow a student to make a challenge submission', (done) => {
    const newSubmission = {
      student_id: 1,
      challenge_id: 1,
      cohort_id: 1,
      category_id: 2,
      submission_message: 'Held TA Hours with insert member of g52 here',
      submission_image_link_1: 'http://imagehosting.com',
    };
    supertest(app)
      .post('/api/submissions')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .send(newSubmission)
      .expect((response) => {
        delete response.body.created_at;
        delete response.body.updated_at;
      })
      .expect(200, {
        id: 28,
        student_id: 1,
        challenge_id: 1,
        cohort_id: 1,
        category_id: 2,
        submission_message: 'Held TA Hours with insert member of g52 here',
        submission_status: 'Pending approval',
        submission_image_link_1: 'http://imagehosting.com',
      }, done);
  });
  it('Should return a 401 if not logged in', (done) => {
    supertest(app)
      .post('/api/submissions')
      .set('Accept', 'application/json')
      .expect(401, 'You must be logged in', done);
  });
});

describe('GET /submissions/students/:student_id', () => {
  it('Should get all challenge submissions by a single student', (done) => {
    supertest(app)
      .get('/api/submissions/students/3')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .expect((response) => {
        for (let i = 0; i < response.body.length; i++) {
          delete response.body[i].created_at;
          delete response.body[i].updated_at;
        }
      })
      .expect(200, [
        {
          id: 2,
          student_id: 3,
          challenge_id: 4,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built an app that allows users to add their jacket size. It also tracks fulfillment status us to whether student has received their gSwag.',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 4,
            name: 'Full-stack Side Project',
            point_value: 200,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 5,
          student_id: 3,
          challenge_id: 3,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built an api that sends JSON of cheese by name, firmness, and animal type',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 3,
            name: 'Back-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 10,
          student_id: 3,
          challenge_id: 2,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a front-end app using SF Open data API and Google Maps API what days and locations food trucks appear in SF',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 2,
            name: 'Front-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 13,
          student_id: 3,
          challenge_id: 5,
          cohort_id: 1,
          category_id: 3,
          submission_message: 'Published article on a deep look at commands in the CLI',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 5,
            name: 'Publish Article',
            point_value: 75,
            description: 'Publish an original article on Medium with a minimum 750 word length.',
          },
        },
        {
          id: 16,
          student_id: 3,
          challenge_id: 1,
          cohort_id: 1,
          category_id: 2,
          submission_message: 'TA during Javascript intro course  on Jan 25th',
          evaluation_message: null,
          submission_status: 'Denied',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 1,
            name: 'Hold TA Hours',
            point_value: 25,
            description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
          },
        },
        {
          id: 17,
          student_id: 3,
          challenge_id: 2,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a front-end app for CheesWhiz api',
          evaluation_message: null,
          submission_status: 'Pending',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 2,
            name: 'Front-end Side Project',
            point_value: 75,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 20,
          student_id: 3,
          challenge_id: 5,
          cohort_id: 1,
          category_id: 3,
          submission_message: 'Published article required for career services',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 5,
            name: 'Publish Article',
            point_value: 75,
            description: 'Publish an original article on Medium with a minimum 750 word length.',
          },
        },
        {
          id: 25,
          student_id: 3,
          challenge_id: 4,
          cohort_id: 1,
          category_id: 1,
          submission_message: 'Built a gamefication app for galvanize students to maxmize their experience',
          evaluation_message: null,
          submission_status: 'Approved',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 4,
            name: 'Full-stack Side Project',
            point_value: 200,
            description: 'Develop a side project using curriculum technology.',
          },
        },
        {
          id: 27,
          student_id: 3,
          challenge_id: 1,
          cohort_id: 1,
          category_id: 2,
          submission_message: 'Held one hour of office hours on May 7th',
          evaluation_message: null,
          submission_status: 'Pending approval',
          submission_attachment_1: null,
          submission_attachment_2: null,
          submission_attachment_3: null,
          submission_image_link_1: null,
          submission_image_link_2: null,
          submission_image_link_3: null,
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
          challenge: {
            id: 1,
            name: 'Hold TA Hours',
            point_value: 25,
            description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
          },
        },
      ], done);
  });
  it('Should return a 401 if not logged in', (done) => {
    supertest(app)
      .get('/api/submissions/1')
      .set('Accept', 'application/json')
      .expect(401, 'You must be logged in', done);
  });
});

describe('GET /submissions/:submission_id', () => {
  it('Should pull up a single challenge submission based on id', (done) => {
    supertest(app)
      .get('/api/submissions/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .expect((response) => {
        delete response.body.updated_at;
        delete response.body.created_at;
      })
      .expect(200, {
        id: 1,
        student_id: 1,
        challenge_id: 4,
        cohort_id: 1,
        category_id: 1,
        submission_message: 'Built an app that allows users to add their jacket size. It also tracks fulfillment status us to whether student has received their gSwag.',
        evaluation_message: null,
        submission_status: 'Approved',
        submission_attachment_1: null,
        submission_attachment_2: null,
        submission_attachment_3: null,
        submission_image_link_1: null,
        submission_image_link_2: null,
        submission_image_link_3: null,
        challenge: {
          id: 4,
          name: 'Full-stack Side Project',
          point_value: 200,
          description: 'Develop a side project using curriculum technology.',
          requirements_1: null,
          requirements_2: null,
          requirements_3: null,
          requirements_4: null,
          requirements_5: null,
        },
        category: {
          id: 1,
          category: 'Education',
        },
        student: {
          id: 1,
          username: 'algorythmist',
          name: 'Thomas Stang',
        },
      }, done);
  });
  it('Should return a 401 if not logged in', (done) => {
    supertest(app)
      .get('/api/submissions/1')
      .set('Accept', 'application/json')
      .expect(401, 'You must be logged in', done);
  });
});

describe('DELETE /submissions/:submission_id', () => {
  it('Should delete a challenge submission based on id', (done) => {
    supertest(app)
      .delete('/api/submissions/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .expect(200, { message: 'Submission successfully deleted' }, done);
  });
  it('Should return a 401 if not logged in', (done) => {
    supertest(app)
      .delete('/api/submissions/1')
      .set('Accept', 'application/json')
      .expect(401, 'You must be logged in', done);
  });
});

describe('PUT /submissions/:submission_id', () => {
  it('Should allow a student to update a challenge submission message and/or attachments', (done) => {
    const updatedSubmission = {
      submission_message: 'Updated Message with more Attachments!!!',
      submission_attachment_1: 'new attachment 1',
      submission_attachment_2: 'new attachment 2',
      submission_image_link_1: 'http://www.attachment1.com/attachment1',
    };
    supertest(app)
      .put('/api/submissions/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .send(updatedSubmission)
      .expect((response) => {
        delete response.body.updated_at;
        delete response.body.created_at;
      })
      .expect(200, {
        id: 1,
        student_id: 1,
        challenge_id: 4,
        cohort_id: 1,
        category_id: 1,
        submission_message: 'Updated Message with more Attachments!!!',
        evaluation_message: null,
        submission_status: 'Approved',
        submission_attachment_1: 'new attachment 1',
        submission_attachment_2: 'new attachment 2',
        submission_attachment_3: null,
        submission_image_link_1: 'http://www.attachment1.com/attachment1',
        submission_image_link_2: null,
        submission_image_link_3: null,
      }, done);
  });
  it('Should return a 401 if not logged in', (done) => {
    supertest(app)
      .put('/api/submissions/1')
      .set('Accept', 'application/json')
      .expect(401, 'You must be logged in', done);
  });
});

describe('PUT /submissions/:submission_id/admin', () => {
  it('Should allow an admin to approve a challenge', (done) => {
    const adminUpdate = {
      evaluation_message: 'Great job SJ!',
      submission_status: 'Approved',
    };
    supertest(app)
      .put('/api/submissions/3/admin')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .send(adminUpdate)
      .expect((response) => {
        delete response.body.updated_at;
        delete response.body.created_at;
      })
      .expect(200,
      {
        id: 3,
        student_id: 2,
        challenge_id: 1,
        cohort_id: 1,
        category_id: 2,
        submission_message: 'Held one hour of office hours on May 6th',
        evaluation_message: 'Great job SJ!',
        submission_status: 'Approved',
        submission_attachment_1: null,
        submission_attachment_2: null,
        submission_attachment_3: null,
        submission_image_link_1: null,
        submission_image_link_2: null,
        submission_image_link_3: null,
      }, done);
  });
  it('Should return a 401 if not logged in', (done) => {
    supertest(app)
      .put('/api/submissions/1/admin')
      .set('Accept', 'application/json')
      .expect(401, 'You must be logged in', done);
  });
});
