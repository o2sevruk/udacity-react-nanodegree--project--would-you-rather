import { loadingAction, fetchAction, setSelectedAction, voteAction } from "./actionCreators";
import { voteAction as usersVoteAction } from "../users/actionCreators";

// API
import { _getQuestions, _saveQuestionAnswer } from "../../_DATA";

// ./API

export function fetchQuestions() {
  return (dispatch) => {
    dispatch(loadingAction(true));

    _getQuestions()
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        dispatch(loadingAction(false));
        dispatch(fetchAction(res));

        return res;
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };
}

export function setSelectedQuestion(id) {
  return (dispatch) => {
    _getQuestions()
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        const question = res[Object.keys(res).filter((el) => el === id)];

        dispatch(setSelectedAction(question));

        return res;
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };
}

export function voteQuestion(payload) {
  const { userId, questionId, answer } = payload;

  return (dispatch) => {
    _saveQuestionAnswer({
      authedUser: userId,
      qid: questionId,
      answer,
    })
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        dispatch(usersVoteAction({ userId, questionId, answer }));
        dispatch(voteAction({ userId, questionId, answer }));

        return res;
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };
}
