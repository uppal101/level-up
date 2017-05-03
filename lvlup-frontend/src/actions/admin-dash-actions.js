import axios from 'axios';


// const fetchSubmissions = studentId => axios(`http://localhost:3000/api/submissions/students/${studentId}`)
// .then(response => response.data);
//
// const fetchRequests = studentId => axios(`http://localhost:3000/api/requests/students/${studentId}`)
// .then(response => response.data);

const fetchAdmin = () => axios.post('http://localhost:3000/api/admin/login', { withCredentials: false });


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
