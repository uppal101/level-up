export const adminLoginInfo = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADMIN_LOGIN_PENDING':
      return state;
    case 'ADMIN_LOGIN_FULFILLED':
      return action.payload;
    case 'ADMIN_LOGIN_REJECTED':
      return action.payload;
    default:
      return state;
  }
};
