GET 		/students/                                      Gets all Students
POST 		/students/                                      Adds a Student
GET 		/students/:student_id/		                      Gets a single Student - Authorized for your own ID or Admin
PUT 		/students/:student_id/		                      Edits a single Student - Authorized for your own ID
DEL*		/students/:student_id/                          Deleted a single Student
GET*		/students/campuses/:campus_id/                  Gets all students at a single campus
POST    /students/login/                                Student Login with OAuth
POST    /students/signup                                Student signup with OAuth

GET*		/admins/                                        Gets all Admins
POST*		/admins/                                        Adds an admin (Sign up)
PUT*		/admins/:admin_id/                              Edits an admin
DEL*		/admins/:admin_id/                              Deletes an admin
POST    /admins/login/                                  logs in an admin
POST    /admins/signup/                                 Signs up an admin

GET* 		/cohorts/                                       Gets all cohorts
POST*		/cohorts/                                       Adds a cohort
GET*		/cohorts/:cohort_id/                            Gets a single cohort
DEL*		/cohorts/:cohort_id/                            Deletes a single cohort
GET*		/cohorts/campuses/:campus_id/                   Gets all cohorts at a campus

POST*		/rewards/                                       Adds a reward
GET     /rewards/:reward_id/                            Gets a specific reward
PUT*		/rewards/:reward_id/                            Edits a specific reward
DEL*		/rewards/:reward_id/                            Deletes a specific reward
GET			/rewards/campuses/:campus_id/                   Gets all rewards for a campus
GET			/rewards/campuses/:campus_id/suggestions        Gets all reward suggestions for a campus
POST		/rewards/campuses/:campus_id/suggestions        Adds a reward suggestion for a campus
PUT			/rewards/campuses/:campus_id/suggestions/:id    Edits a specific reward suggestion for a campus
DEL*		/rewards/campuses/:campus_id/suggestions/:id    Deletes a specific reward suggestion for a campus

POST		/requests/				                              Makes a reward request - Authorized for your own ID  
GET			/requests/				                              Gets all of a students rewards requests	- Authorized for your own ID
DEL			/requests/:request_id				                    Deletes a student request	- Authorized for your own ID
GET			/requests/:user_name				                    Gets all of a students rewards requests - Authorized for Admins
GET*		/requests/campuses/:campus_id/                  Gets all requests for campus
GET*		/requests/campuses/:cohort_id/                  Gets all requests for a specific cohort
PUT*		/requests/admin/:request_id/                    Update a specific request - Approve a request

POST*		/challenges/                                    Add a challenge to the database
GET     /challenges/:challenge_id/                      Get a specific challenge
DEL*		/challenges/:challenge_id/                      Delete a specific challenge
PUT*		/challenges/:challenge_id/                      Update a specific challenge
GET			/challenges/campuses/:campus_id/                Get all challenges for a campus

POST		/submissions/                                   Submit a completed challenge
GET     /submissions/students/:student_id	              Get all submissions for an individual student - Authorized for your own ID or Admin
PUT     /submissions/:submissions_id/		                Edit a submission/Approve a submission by an admin - Authorized for your own ID or Admin)
DEL     /submissions/:submissions_id/		                Delete a specific submission - Authorized for your own ID
GET*		/submissions/:submissions_id/			              Get a specific submission - Authorized for your own ID or Admin
GET**		/submissions/campuses/:campus_id/               Gets all submissions for campus
GET**		/submissions/campuses/:cohort_id/               Gets all submissions for a specific cohort

GET*		/campuses/                                      Get all campuses
POST*		/campuses/                                      Add a campus
DEL*		/campuses/:campus_id/                           Delete a campus :(

GET			/points/:student_id/										        Get all points for a student - Authorized for your own ID or Admin
PUT*		/points/:student_id/                            Updates points for a student - Authorized for your own ID or Admin
