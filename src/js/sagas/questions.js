import { put, takeLatest } from "redux-saga/effects";

import questionActionTypes from "../actionTypes/questions";
import questionActions from "../actions/questions";

// Mocks
import questions from "../store/questions";

export function* loadingQuestionsSaga() {
  const fetchedQuestions = yield new Promise((res) => {
    setTimeout(() => res(questions), 1000);
  });

  yield put(questionActions.fetchQuestions(fetchedQuestions));
}

export function* selectQuestionSaga({ payload }) {
  // ToDo
  yield loadingQuestionsSaga();

  yield put(questionActions.selectQuestion(payload));
}

export default function* questionsSaga() {
  yield takeLatest(questionActionTypes.Loading, loadingQuestionsSaga);

  yield takeLatest(questionActionTypes.Select, selectQuestionSaga);
}
