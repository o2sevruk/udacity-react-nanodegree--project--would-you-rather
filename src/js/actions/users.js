import userActionTypes from "../actionTypes/users";

export default {
  loadingUsers: () => ({ type: userActionTypes.Loading }),
  fetchUsers: (users) => ({
    type: userActionTypes.Fetch,
    payload: users,
  }),
  selectUser: (user) => ({
    type: userActionTypes.Select,
    payload: user,
  }),
  addUser: (user) => ({
    type: userActionTypes.Add,
    payload: user,
  }),
};
