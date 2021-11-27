import questionActionTypes from "../actionTypes/questions";

export default {
  loadingQuestions: () => ({ type: questionActionTypes.Loading }),
  fetchQuestions: (questions) => ({
    type: questionActionTypes.Fetch,
    payload: questions,
  }),
  selectQuestion: (id) => ({
    type: questionActionTypes.Select,
    payload: id,
  }),
  addQuestion: (question) => ({
    type: questionActionTypes.Add,
    payload: question,
  }),
};
