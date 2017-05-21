lvl^

Deployed site: http://lvlup-galvanize.herokuapp.com/

About lvl^

lvl^ is a gamified education enrichment platform for students currently enrolled in a Galvanize immersive learning programs. lvl^ is a full-stack web application that gives students and administrators an interface to participate in a reward based platform designed to help students reach their career goals. Students are provided with challenges and rewards which fall into four categories: education, community, career and life. These challenges give students an opportunity to complete tasks that will contribute to their growth in the respective categories. Examples of challenges include: mentoring a student in a junior cohort, conducting informational interviews, building a side project, or writing a LinkedIn/Medium article. Students earn points for completing challenges which can be cashed in for rewards. Rewards can include 30 minutes of paired programming with an instructor, a ticket to a Galvanize community lunch, business cards, or a $5 gift card to the cafe.

Technology

Front End:

On the Front End lvl^ is built with React and Redux. Additional technologies used include Redux-Forms, Axios, React-Router-DOM, Moment.js, Semantic UI, Redux-Thunk/Redux-Promise-Middleware, and Jest for testing.

Back End:

The server for lvl^ is built with Node.js and Express with a PostgreSQL database. To connect the server and database Knex and Bookshelf are used. For authentication lvl^ uses GitHub OAuth with Passport Sessions to authenticate and authorize students and JWT Tokens transported in cookies for admins. Additional technologies used include bcrypt, Moment.js, body-parser, and mocha/supertest for testing.

To Get Started

Please fork and clone this repo.
cd lvlup-frontend Change directories into the front end folder
npm install Install dependencies
npm run build Run a production build of our app
mv build ../lvlup-backend Move the Build Folder to the root of the /lvlup-backend directory.
cd ../lvlup-backend Change directories into the back end folder
npm install Install dependencies
touch .env Example .env file:
JWT_KEY= xxxxxx
GITHUB_CLIENT_ID= xxxxxx
GITHUB_CLIENT_SECRET= xxxxxx
SESSION_KEY1= xxxxxxx
SESSION_KEY2=xxxxx
Please note this repo requires GitHub OAuth. Please go to the GitHub Developer Console and under 'OAuth Applications' register a new application and update the .env file with the client id and secret. The callback URL will need to be updated here on line 61 in lvlup-backend/app.js:
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://yourURL/api/auth/github/callback',
  //localhost:3000 is default port if running locally
},
  (accessToken, refreshToken, profile, done) => {
    // process.nextTick(() => done(null, profile));
    done(null, profile);
  }));
Create the database locally. From the command line run the following commands: createdb lvlup_dev //For running development enviornment locally createdb lvlup_test //To run all of the tests

Seed the database. From the command line run the following commands: knex migrate:rollback //Only if dropping the database and reseeding knex migrate:latest knex seed:run

npm start To run locally

lvl^ !

Testing

Front End:

cd lvlup-frontend
npm run-script coverage
Back End:

cd lvlup-backend
npm test
