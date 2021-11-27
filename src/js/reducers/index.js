import { combineReducers } from "redux";

import usersReducer from "./users";
import questionsReducer from "./questions";

export default combineReducers({
  users: usersReducer,
  questions: questionsReducer,
});
