#To Get Started

1. Complete steps in `lvlup-frontend`
2. `npm install` Install dependencies
3. `touch .env` Example .env file:
```
JWT_KEY= xxxxxx
GITHUB_CLIENT_ID= xxxxxx
GITHUB_CLIENT_SECRET= xxxxxx
SESSION_KEY1= xxxxxxx
SESSION_KEY2=xxxxx
```
4. Please note this repo requires GitHub OAuth. Please go to the [GitHub Developer Console](https://github.com/settings/developers) and under 'OAuth Applications' register a new application and update the .env file with the client id and secret. The callback URL will need to be updated here on line 61 in lvlup-backend/app.js:

```JavaScript
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
```
5. Create the database locally. From the command line run the following commands:
`
createdb lvlup_dev  //For running development enviornment locally
createdb lvlup_test  //To run all of the tests
`

6. Seed the database. From the command line run the following commands:
`
knex migrate:rollback //Only if dropping the database and reseeding
knex migrate:latest
knex seed:run
`
7. `npm start` To run locally
8. lvl^ !
