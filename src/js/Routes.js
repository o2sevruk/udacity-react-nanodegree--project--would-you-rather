import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Settings
import usersActions from "./actions/users";
import questionsActions from "./actions/questions";

// Layouts
import AuthRoute from "./layout/Auth";
import MainRoute from "./layout/Main";

// Components
import LoginPage from "./pages/Login";
import QuestionsPage from "./pages/Questions";
import QuestionsSinglePage from "./pages/QuestionsSingle";

function Routes() {
  const dispatch = useDispatch();

  // Handlers
  const isLoggedIn = () => !!localStorage.getItem("udacity-would-you-rather--current-user");

  // Initial funcs
  useEffect(() => {
    if (isLoggedIn()) {
      dispatch(usersActions.selectUser(JSON.parse(localStorage.getItem("udacity-would-you-rather--current-user"))));
      dispatch(usersActions.loadingUsers());
      dispatch(questionsActions.loadingQuestions());
    }
  }, [dispatch]);

  return (
    <Router>
      <Route path="/" exact>
        {isLoggedIn ? <Redirect to="/questions" /> : <Redirect to="/login" />}
      </Route>
      <AuthRoute path="/login" exact>
        <LoginPage />
      </AuthRoute>
      <MainRoute path="/questions" exact>
        <QuestionsPage />
      </MainRoute>
      <MainRoute path="/questions/:id">
        <QuestionsSinglePage />
      </MainRoute>
    </Router>
  );
}

export default connect(null, {
  usersActions,
  questionsActions,
})(Routes);
