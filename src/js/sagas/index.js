import { all } from "redux-saga/effects";

import usersSaga from "./users";
import questionsSaga from "./questions";

export default function* rootSaga() {
  yield all([usersSaga(), questionsSaga()]);
}
