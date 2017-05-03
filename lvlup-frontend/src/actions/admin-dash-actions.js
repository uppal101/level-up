import axios from 'axios';


// const fetchSubmissions = studentId => axios(`/api/submissions/students/${studentId}`)
// .then(response => response.data);
//
// const fetchRequests = studentId => axios(`/api/requests/students/${studentId}`)
// .then(response => response.data);

const fetchAdmin = () => axios.post('/api/admin/login', { withCredentials: false });


export const loggingInAction = () => ({
  type: 'ADMIN_LOGIN',
  payload: fetchAdmin(),
});

// export const submissionsAction = studentId => ({
//   type: CONST.SUBMISSIONS,
//   payload: fetchSubmissions(studentId),
// });
//
// export const requestsAction = studentId => ({
//   type: CONST.REQUESTS,
//   payload: fetchRequests(studentId),
// });
