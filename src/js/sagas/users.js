import { put, takeLatest } from "redux-saga/effects";

import userActionTypes from "../actionTypes/users";
import userActions from "../actions/users";

// Mocks
import users from "../store/users";

export default function* usersSaga() {
  yield takeLatest(userActionTypes.Loading, function* loadingUsersSaga() {
    const fetchedUsers = yield new Promise((res) => {
      setTimeout(() => res(users), 1000);
    });

    yield put(userActions.fetchUsers(fetchedUsers));
  });
}
