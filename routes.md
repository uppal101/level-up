GET 					/students/
POST 					/students/
GET 					/students/:student_id/									(Authorized for your own ID or Admin)
PUT 					/students/:student_id/									(Authorized for your own ID)
DEL*		 			/students/:student_id/
GET*					/students/campuses/:campus_id/
POST          /students/login/

GET*					/admins/
POST*					/admins/
PUT*					/admins/:admin_id/
DEL*					/admins/:admin_id/
POST          /admins/login

GET* 					/cohorts/
POST*					/cohorts/
GET*					/cohorts/:cohort_id/
DEL*					/cohorts/:cohort_id/
GET*					/cohorts/campuses/:campus_id/

POST*					/rewards/
GET						/rewards/:reward_id/
PUT*					/rewards/:reward_id/
DEL*					/rewards/:reward_id/
GET						/rewards/campuses/:campus_id/
GET						/rewards/campuses/:campus_id/suggestions
POST					/rewards/campuses/:campus_id/suggestions
PUT				   	/rewards/campuses/:campus_id/suggestions/:id
DEL*					/rewards/campuses/:campus_id/suggestions/:id

POST					/requests/															(Authorized for your own ID)
GET						/requests/															(Authorized for your own ID)
PUT						/requests/															(Authorized for your own ID)
DEL						/requests/															(Authorized for your own ID)
GET*					/requests/campuses/:campus_id/
PUT*					/requests/:request_id/

POST*					/tasks/
GET						/tasks/:task_id/
DEL*					/tasks/:task_id/
PUT*					/tasks/:task_id/
GET						/tasks/campuses/:campus_id/

POST					/submissions/
GET						/submissions/students/:student_id			(Authorized for your own ID or Admin)
PUT						/submissions/:submissions_id/					(Authorized for your own ID)
DEL						/submissions/:submissions_id/					(Authorized for your own ID)
GET						/submissions/:submissions_id/					(Authorized for your own ID)

GET*					/campuses/
POST*					/campuses/
DEL*					/campuses/:campus_id/

GET						/points/:student_id/										(Authorized for your own ID or Admin)
PUT*					/points/:student_id/
